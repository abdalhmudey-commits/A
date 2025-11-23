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

type HabitFormProps = {
    onSave: (habit: Omit<Habit, 'id'>) => void;
}

type RecordingStatus = "idle" | "recording" | "stopped";

export default function HabitForm({ onSave }: HabitFormProps) {
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
      toast({ title: "بدء التسجيل...", description: "تحدث الآن." });
    } catch (err) {
      console.error("Error starting recording:", err);
      toast({
        variant: "destructive",
        title: "خطأ في الوصول إلى الميكروفون",
        description:
          "يرجى التأكد من أنك سمحت بالوصول إلى الميكروفون في إعدادات المتصفح.",
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
          title: "ملف غير صالح",
          description: "الرجاء اختيار ملف صوتي.",
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
        title: "حقول ناقصة",
        description:
          "يرجى ملء وصف العادة ومحتوى رسالة التذكير.",
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
        title: "تمت إضافة العادة بنجاح!",
        description: "يمكنك رؤية عادتك الجديدة في تبويب 'عاداتي'.",
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
            ما هي العادة التي تريد تتبعها؟
          </Label>
          <Input
            id="habit-description"
            placeholder="مثال: قضم الأظافر، تصفح وسائل التواصل الاجتماعي..."
            value={habitDescription}
            onChange={(e) => setHabitDescription(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label>ما هو معدل تكرار التذكير؟</Label>
          <div className="flex items-center gap-2">
            <span>كل</span>
            <Input
              type="number"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              className="w-20"
              aria-label="قيمة الفاصل الزمني"
              min="1"
            />
            <Select
              value={unit}
              onValueChange={setUnit}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="اختر وحدة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seconds">ثانية</SelectItem>
                <SelectItem value="minutes">دقيقة</SelectItem>
                <SelectItem value="hours">ساعة</SelectItem>
                <SelectItem value="days">يوم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="notification-text">محتوى رسالة التذكير</Label>
          <Textarea
            id="notification-text"
            placeholder="اكتب رسالة لنفسك (مثال: توقف! أنت أقوى من هذه العادة.)"
            value={notificationText}
            onChange={(e) => setNotificationText(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label className="flex items-center gap-2">
            <AudioLines className="h-5 w-5" />
            <span>تذكير صوتي (اختياري)</span>
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
                <span className="sr-only">حذف المقطع الصوتي</span>
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
                تسجيل مقطع صوتي
              </Button>
              <Label htmlFor="audio-upload" className="flex-1">
                <Button asChild variant="outline" className="w-full cursor-pointer">
                  <div>
                    <FileAudio className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                    اختيار ملف صوتي
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
            إضافة عادة جديدة
        </Button>
    </div>
  );
}
