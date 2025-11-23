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
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";


const NOTIFICATION_PERMISSION_KEY = "notificationPermission";

export default function SettingsPanel() {
  const [theme, setTheme] = useState("light");
  const { language, setLanguage, dictionary } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | "unsupported">("default");
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme === "dark" ? "dark" : "light");

    if (!("Notification" in window)) {
        setNotificationPermission("unsupported");
        return;
    }
    setNotificationPermission(Notification.permission);
     try {
      const savedPerm = localStorage.getItem(NOTIFICATION_PERMISSION_KEY);
      if(savedPerm){
        setNotificationPermission(savedPerm as NotificationPermission);
      }
    } catch (error) {
        console.error("Could not read from localStorage", error);
    }

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

  const handleNotificationPermission = async () => {
    if (notificationPermission === 'unsupported' || notificationPermission === 'denied') return;

    if (notificationPermission === 'granted') {
      // This is a simplified approach. Revoking permission isn't directly possible via JS.
      // We'll just update our state to reflect the user's intent to disable.
      setNotificationPermission("default");
      localStorage.setItem(NOTIFICATION_PERMISSION_KEY, "default");
       toast({
        title: dictionary.settings.notifications,
        description: dictionary.settings.notificationsDisabled,
      });
      return;
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
    localStorage.setItem(NOTIFICATION_PERMISSION_KEY, permission);

    if (permission === 'granted') {
        toast({
            title: dictionary.settings.notifications,
            description: dictionary.settings.notificationsEnabled,
        });
        new Notification(dictionary.settings.notifications, {
            body: dictionary.settings.notificationsEnabled,
            icon: '/icons/icon-192x192.png'
        });
    } else {
         toast({
            variant: "destructive",
            title: dictionary.settings.notifications,
            description: dictionary.settings.notificationsDenied,
        });
    }
  };

  if (!isMounted) {
    return (
        <Card className="w-full overflow-hidden border-transparent shadow-none bg-transparent">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">الإعدادات</CardTitle>
            </CardHeader>
        </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden border-transparent shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{dictionary.settings.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="language-select" className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span>{dictionary.settings.language}</span>
          </Label>
          <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
            <SelectTrigger id="language-select" className="w-[180px]">
              <SelectValue placeholder={dictionary.settings.selectLanguage} />
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
            <span>{dictionary.settings.theme}</span>
          </Label>
          <Select value={theme} onValueChange={(value) => handleThemeChange(value as "light" | "dark")}>
              <SelectTrigger id="theme-select" className="w-[180px]">
                <SelectValue placeholder={dictionary.settings.selectTheme} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">{dictionary.settings.light}</SelectItem>
                <SelectItem value="dark">{dictionary.settings.dark}</SelectItem>
              </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-switch" className="flex items-center gap-2 cursor-pointer">
            <Bell className="h-5 w-5" />
            <span>{dictionary.settings.notifications}</span>
          </Label>
          <Switch 
            id="notifications-switch"
            checked={notificationPermission === 'granted'}
            onClick={handleNotificationPermission}
            disabled={notificationPermission === 'denied' || notificationPermission === 'unsupported'}
          />
        </div>
      </CardContent>
    </Card>
  );
}
