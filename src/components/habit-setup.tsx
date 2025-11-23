"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlarmClock,
  AudioLines,
  FileAudio,
  Mic,
  Pause,
  Play,
  Square,
  Trash2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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

type HabitSettings = {
  description: string;
  interval: number;
  unit: "seconds" | "minutes" | "hours" | "days";
  notificationText: string;
  audioUrl?: string;
};

type RecordingStatus = "idle" | "recording" | "paused" | "stopped";

export default function HabitSetup() {
  const [habitDescription, setHabitDescription] = useState("");
  const [interval, setInterval] = useState("5");
  const [unit, setUnit] = useState("minutes");
  const [notificationText, setNotificationText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined);
  const [isHabitActive, setIsHabitActive] = useState(false);

  const [recordingStatus, setRecordingStatus] =
    useState<RecordingStatus>("idle");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  const { seconds, startTimer, stopTimer, resetTimer } = useTimer();

  // Load saved habit on mount
  useEffect(() => {
    try {
      const savedHabit = localStorage.getItem("habitSettings");
      if (savedHabit) {
        const settings: HabitSettings = JSON.parse(savedHabit);
        setHabitDescription(settings.description);
        setInterval(String(settings.interval));
        setUnit(settings.unit);
        setNotificationText(settings.notificationText);
        setAudioUrl(settings.audioUrl);
        setIsHabitActive(true);
      }
    } catch (error) {
      console.error("Failed to load habit from localStorage", error);
    }
  }, []);

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
         // Stop all tracks to turn off the mic indicator
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

    const settings: HabitSettings = {
      description: habitDescription,
      interval: Number(interval),
      unit: unit as HabitSettings["unit"],
      notificationText,
      audioUrl: audioUrl,
    };

    try {
      localStorage.setItem("habitSettings", JSON.stringify(settings));
      setIsHabitActive(true);
      toast({
        title: "تم حفظ العادة بنجاح!",
        description: "ستبدأ في تلقي الإشعارات حسب الإعدادات الخاصة بك.",
      });
      // Here we would start the actual notification service
    } catch (error) {
      console.error("Failed to save habit to localStorage", error);
      toast({
        variant: "destructive",
        title: "خطأ في الحفظ",
        description: "لم نتمكن من حفظ إعدادات العادة.",
      });
    }
  };

  const handleStopTracking = () => {
    try {
      localStorage.removeItem("habitSettings");
      setIsHabitActive(false);
      setHabitDescription("");
      setNotificationText("");
      setInterval("5");
      setUnit("minutes");
      handleDeleteAudio();
      toast({
        title: "تم إيقاف التتبع",
        description: "لقد توقفت عن تتبع عادتك الحالية.",
      });
    } catch (error) {
      console.error("Failed to remove habit from localStorage", error);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Card className="w-full overflow-hidden border-border bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <AlarmClock className="h-6 w-6" />
          <span>{isHabitActive ? "عادتك الحالية" : "إعداد تذكير العادة"}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="habit-description">
            ما هي العادة التي تريد التخلص منها؟
          </Label>
          <Input
            id="habit-description"
            placeholder="مثال: قضم الأظافر، تصفح وسائل التواصل الاجتماعي..."
            value={habitDescription}
            onChange={(e) => setHabitDescription(e.target.value)}
            disabled={isHabitActive}
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
              disabled={isHabitActive}
            />
            <Select
              value={unit}
              onValueChange={setUnit}
              disabled={isHabitActive}
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
            disabled={isHabitActive}
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
                disabled={isHabitActive}
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
                disabled={isHabitActive}
              >
                <Mic className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                تسجيل مقطع صوتي
              </Button>
              <Label htmlFor="audio-upload" className="flex-1">
                <Button asChild variant="outline" className="w-full cursor-pointer" disabled={isHabitActive}>
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
                  disabled={isHabitActive}
                />
              </Label>
            </div>
          )}
        </div>

        {isHabitActive ? (
          <Button
            size="lg"
            className="w-full"
            variant="destructive"
            onClick={handleStopTracking}
          >
            إيقاف تتبع العادة
          </Button>
        ) : (
          <Button size="lg" className="w-full" onClick={handleSaveHabit}>
            بدء تتبع العادة
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
