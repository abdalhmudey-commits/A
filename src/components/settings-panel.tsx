"use client";

import { Globe, Moon, Sun, Bell } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPanel() {
  return (
    <Card className="w-full overflow-hidden border-border bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">الإعدادات</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="language-select" className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span>اللغة</span>
          </Label>
          <Select defaultValue="ar">
            <SelectTrigger id="language-select" className="w-[180px]">
              <SelectValue placeholder="اختر لغة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="tr">Türkçe</SelectItem>
              <SelectItem value="id">Bahasa Indonesia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="theme-switch" className="flex items-center gap-2">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Theme</span>
            <span>المظهر</span>
          </Label>
          <Switch
            id="theme-switch"
            onCheckedChange={() =>
              document.documentElement.classList.toggle("dark")
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-switch" className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <span>الإشعارات</span>
          </Label>
          <Switch id="notifications-switch" />
        </div>
      </CardContent>
    </Card>
  );
}
