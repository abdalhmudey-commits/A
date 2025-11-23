"use client";

import { Globe, Moon, Sun, Bell } from "lucide-react";
import { useEffect, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";

export default function SettingsPanel() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme === "dark" ? "dark" : "light");
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Card className="w-full overflow-hidden border-transparent shadow-none bg-transparent">
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
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
           <Label htmlFor="theme-select" className="flex items-center gap-2">
             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Theme</span>
            <span>المظهر</span>
          </Label>
          <Select value={theme} onValueChange={(value) => handleThemeChange(value as "light" | "dark")}>
              <SelectTrigger id="theme-select" className="w-[180px]">
                <SelectValue placeholder="اختر مظهراً" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">فاتح</SelectItem>
                <SelectItem value="dark">داكن</SelectItem>
              </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-checkbox" className="flex items-center gap-2 cursor-pointer">
            <Bell className="h-5 w-5" />
            <span>تفعيل الإشعارات</span>
          </Label>
          <Checkbox id="notifications-checkbox" />
        </div>
      </CardContent>
    </Card>
  );
}
