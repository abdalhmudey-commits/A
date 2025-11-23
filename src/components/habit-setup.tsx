"use client";

import { useState } from "react";
import {
  AlarmClock,
  AudioLines,
  FileAudio,
  Mic,
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

export default function HabitSetup() {
  const [interval, setInterval] = useState("5");
  const [unit, setUnit] = useState("minutes");

  return (
    <Card className="w-full overflow-hidden border-border bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <AlarmClock className="h-6 w-6" />
          <span>إعداد تذكير العادة</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {/* Habit Description */}
        <div className="grid gap-2">
          <Label htmlFor="habit-description">
            ما هي العادة التي تريد التخلص منها؟
          </Label>
          <Input
            id="habit-description"
            placeholder="مثال: قضم الأظافر، تصفح وسائل التواصل الاجتماعي بكثرة..."
          />
        </div>

        {/* Reminder Interval */}
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
            />
            <Select value={unit} onValueChange={setUnit}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="اختر وحدة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seconds">ثانية</SelectItem>
                <SelectItem value="minutes">دقيقة</SelectItem>
                <SelectItem value="hours">ساعة</SelectItem>
                <SelectItem value="days">يوم</SelectItem>
                <SelectItem value="weeks">أسبوع</SelectItem>
                <SelectItem value="months">شهر</SelectItem>
                <SelectItem value="years">سنة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Notification Content */}
        <div className="grid gap-2">
          <Label htmlFor="notification-text">محتوى رسالة التذكير</Label>
          <Textarea
            id="notification-text"
            placeholder="اكتب رسالة لنفسك (مثال: توقف! أنت أقوى من هذه العادة.)"
          />
        </div>

        {/* Audio Reminder */}
        <div className="grid gap-2">
          <Label className="flex items-center gap-2">
            <AudioLines className="h-5 w-5" />
            <span>تذكير صوتي (اختياري)</span>
          </Label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="flex-1">
              <Mic className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
              تسجيل مقطع صوتي
            </Button>
            <Button variant="outline" className="flex-1">
              <FileAudio className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
              اختيار ملف صوتي
            </Button>
          </div>
          {/* This part can be shown when a recording/file is added */}
          {/* <div className="flex items-center justify-between p-2 mt-2 border rounded-md bg-muted/50">
             <div className="flex items-center gap-2">
                <AudioLines size={16} />
                <span className="text-sm">my-reminder.mp3</span>
             </div>
             <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive">
                <Trash2 size={16} />
             </Button>
          </div> */}
        </div>

        <Button size="lg" className="w-full">
          بدء تتبع العادة
        </Button>
      </CardContent>
    </Card>
  );
}
