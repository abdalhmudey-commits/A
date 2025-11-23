"use client";

import { useRef, useState } from "react";
import {
  AudioLines,
  FileAudio,
  Mic,
  Square,
  Trash2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTimer } from "@/hooks/use-timer";
import type { Habit } from "./habit-setup";
import { useLanguage } from "@/context/language-context";

type HabitFormProps = {
    onSave: (habit: Omit<Habit, 'id'>) => void;
}

type RecordingStatus = "idle" | "recording" | "stopped";

export default function HabitForm({ onSave }: HabitFormProps) {
  const { dictionary } = useLanguage();
  const [habitDescription, setHabitDescription] = useState("");
  const [interval, setInterval] = useState("5");
  const [unit, setUnit] = useState("minutes");
  const [notificationText, setNotificationText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined);

  const [recordingStatus, setRecordingStatus] =
    useState<RecordingStatus>("idle");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  const { seconds, startTimer, stopTimer, resetTimer } = useTimer();


  const handleStartRecording = async () => {
    if (recordingStatus === "recording") return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setRecordingStatus("idle");
        stopTimer();
        resetTimer();
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setRecordingStatus("recording");
      startTimer();
      toast({ title: dictionary.habits.recordingToastTitle, description: dictionary.habits.recordingToastDescription });
    } catch (err) {
      console.error("Error starting recording:", err);
      toast({
        variant: "destructive",
        title: dictionary.habits.micErrorToastTitle,
        description: dictionary.habits.micErrorToastDescription,
      });
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && recordingStatus === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("audio/")) {
        const url = URL.createObjectURL(file);
        setAudioUrl(url);
      } else {
        toast({
          variant: "destructive",
          title: dictionary.habits.invalidFileToastTitle,
          description: dictionary.habits.invalidFileToastDescription,
        });
      }
    }
  };

  const handleDeleteAudio = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(undefined);
    }
  };

  const handleSaveHabit = () => {
    if (!habitDescription || !notificationText) {
      toast({
        variant: "destructive",
        title: dictionary.habits.missingFieldsToastTitle,
        description: dictionary.habits.missingFieldsToastDescription,
      });
      return;
    }

    const newHabit: Omit<Habit, 'id'> = {
      description: habitDescription,
      interval: Number(interval),
      unit: unit as Habit["unit"],
      notificationText,
      audioUrl: audioUrl,
    };
    
    onSave(newHabit);
    
    toast({
        title: dictionary.habits.habitAddedToastTitle,
        description: dictionary.habits.habitAddedToastDescription,
    });

    // Reset form
    setHabitDescription("");
    setNotificationText("");
    setInterval("5");
    setUnit("minutes");
    handleDeleteAudio();
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="grid gap-6 p-1">
        <div className="grid gap-2">
          <Label htmlFor="habit-description">
            {dictionary.habits.habitDescriptionLabel}
          </Label>
          <Input
            id="habit-description"
            placeholder={dictionary.habits.habitDescriptionPlaceholder}
            value={habitDescription}
            onChange={(e) => setHabitDescription(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label>{dictionary.habits.reminderFrequencyLabel}</Label>
          <div className="flex items-center gap-2">
            <span>{dictionary.habits.every}</span>
            <Input
              type="number"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              className="w-20"
              aria-label={dictionary.habits.intervalPlaceholder}
              min="1"
            />
            <Select
              value={unit}
              onValueChange={setUnit}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder={dictionary.habits.unit} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seconds">{dictionary.habits.seconds}</SelectItem>
                <SelectItem value="minutes">{dictionary.habits.minutes}</SelectItem>
                <SelectItem value="hours">{dictionary.habits.hours}</SelectItem>
                <SelectItem value="days">{dictionary.habits.days}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="notification-text">{dictionary.habits.reminderMessageLabel}</Label>
          <Textarea
            id="notification-text"
            placeholder={dictionary.habits.reminderMessagePlaceholder}
            value={notificationText}
            onChange={(e) => setNotificationText(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label className="flex items-center gap-2">
            <AudioLines className="h-5 w-5" />
            <span>{dictionary.habits.audioReminderLabel}</span>
          </Label>
          {audioUrl ? (
            <div className="flex items-center justify-between p-2 mt-2 border rounded-md bg-muted/50">
              <audio src={audioUrl} controls className="h-10" />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                onClick={handleDeleteAudio}
              >
                <Trash2 size={18} />
                <span className="sr-only">{dictionary.habits.deleteAudio}</span>
              </Button>
            </div>
          ) : recordingStatus === "recording" ? (
             <div className="flex items-center justify-center gap-4 p-2 border-2 border-destructive rounded-lg animate-pulse">
                <span className="font-mono text-lg text-destructive">{formatTime(seconds)}</span>
                <Button variant="destructive" size="icon" onClick={handleStopRecording}>
                    <Square className="h-5 w-5" />
                </Button>
             </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleStartRecording}
              >
                <Mic className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                {dictionary.habits.recordAudio}
              </Button>
              <Label htmlFor="audio-upload" className="flex-1">
                <Button asChild variant="outline" className="w-full cursor-pointer">
                  <div>
                    <FileAudio className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                    {dictionary.habits.uploadAudio}
                  </div>
                </Button>
                <Input
                  id="audio-upload"
                  type="file"
                  accept="audio/*"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </Label>
            </div>
          )}
        </div>

        <Button size="lg" className="w-full" onClick={handleSaveHabit}>
            {dictionary.habits.saveHabit}
        </Button>
    </div>
  );
}
