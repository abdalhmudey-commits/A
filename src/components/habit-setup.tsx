"use client";

import { useState, useEffect, useCallback } from "react";
import { PlusCircle, ListTodo } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  HabitForm  from "./habit-form";
import HabitList from "./habit-list";
import { useLanguage } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";

export type Habit = {
  id: string;
  description: string;
  interval: number;
  unit: "seconds" | "minutes" | "hours" | "days";
  notificationText: string;
  audioUrl?: string;
};

const HABITS_STORAGE_KEY = "habitsList";
const NOTIFICATION_PERMISSION_KEY = "notificationPermission";

export default function HabitSetup() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [activeTab, setActiveTab] = useState("new");
  const [isMounted, setIsMounted] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | "unsupported">("default");
  const { dictionary, language } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
     if (!("Notification" in window)) {
      setNotificationPermission("unsupported");
      return;
    }
    setNotificationPermission(Notification.permission);

    try {
      const savedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
      if (savedHabits) {
        setHabits(JSON.parse(savedHabits));
      }
      const savedPerm = localStorage.getItem(NOTIFICATION_PERMISSION_KEY);
      if(savedPerm){
        setNotificationPermission(savedPerm as NotificationPermission);
      }
    } catch (error) {
      console.error("Failed to load from localStorage", error);
    }
  }, []);

  const sendNotification = useCallback((habit: Habit) => {
    if (notificationPermission !== 'granted') {
        console.log("Notification permission not granted.");
        return;
    }

    const notification = new Notification(dictionary.mainTabs.habits, {
        body: habit.notificationText,
        icon: '/icons/icon-192x192.png',
        silent: !!habit.audioUrl
    });

    if (habit.audioUrl) {
      const audio = new Audio(habit.audioUrl);
      // a bit of delay to give notification time to show
      setTimeout(() => audio.play().catch(e => console.error("Error playing audio:", e)), 500);
    }
  }, [notificationPermission, dictionary]);

  useEffect(() => {
    if (!isMounted) return;

    try {
      localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
    } catch (error) {
      console.error("Failed to save habits to localStorage", error);
    }

    // Clear existing timers
    const intervalIds = Object.keys(window).filter(key => key.startsWith('habit-timer-')).map(key => parseInt(key.split('-')[2], 10));
    intervalIds.forEach(id => clearInterval(id));


    // Set up new timers
    habits.forEach(habit => {
        let intervalMs: number;
        switch (habit.unit) {
            case 'seconds':
                intervalMs = habit.interval * 1000;
                break;
            case 'minutes':
                intervalMs = habit.interval * 60 * 1000;
                break;
            case 'hours':
                intervalMs = habit.interval * 60 * 60 * 1000;
                break;
            case 'days':
                intervalMs = habit.interval * 24 * 60 * 60 * 1000;
                break;
        }

        const timerId = setInterval(() => {
            sendNotification(habit);
        }, intervalMs);
        
        // Store timerId in a way we can clear it later. We are attaching it to window for simplicity.
        (window as any)[`habit-timer-${habit.id}`] = timerId;
    });

    // Cleanup function
    return () => {
      habits.forEach(habit => {
        const timerId = (window as any)[`habit-timer-${habit.id}`];
        if (timerId) {
          clearInterval(timerId);
        }
      });
    };
  }, [habits, isMounted, sendNotification]);


  const addHabit = (newHabit: Omit<Habit, 'id'>) => {
    if(notificationPermission !== 'granted'){
        toast({
            variant: "destructive",
            title: dictionary.settings.notifications,
            description: dictionary.habits.enableNotificationsFirst
        });
        return;
    }

    const habitWithId = { ...newHabit, id: crypto.randomUUID() };
    setHabits(prevHabits => [...prevHabits, habitWithId]);
    setActiveTab("list");
  };

  const deleteHabit = (habitId: string) => {
    setHabits(prevHabits => {
        const timerId = (window as any)[`habit-timer-${habitId}`];
        if (timerId) {
          clearInterval(timerId);
          delete (window as any)[`habit-timer-${habitId}`];
        }
        return prevHabits.filter(habit => habit.id !== habitId)
    });
  };
  
  if (!isMounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return (
        <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent">
            <CardContent className="p-0 sm:p-0">
                <Tabs value="new" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-none h-14">
                        <TabsTrigger value="list" className="gap-2 text-base rounded-none" disabled>
                            <ListTodo className="h-5 w-5" />
                            {dictionary.habits.myHabits}
                        </TabsTrigger>
                        <TabsTrigger value="new" className="gap-2 text-base rounded-none" disabled>
                            <PlusCircle className="h-5 w-5" />
                            {dictionary.habits.newSetup}
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </CardContent>
        </Card>
    );
  }

  const tabs = [
    <TabsTrigger key="list" value="list" className="gap-2 text-base rounded-none">
      <ListTodo className="h-5 w-5" />
      {dictionary.habits.myHabits}
    </TabsTrigger>,
    <TabsTrigger key="new" value="new" className="gap-2 text-base rounded-none">
      <PlusCircle className="h-5 w-5" />
      {dictionary.habits.newSetup}
    </TabsTrigger>
  ];
  
  if (language === 'ar') {
    tabs.reverse();
  }

  return (
    <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent">
      <CardContent className="p-0 sm:p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-none h-14">
             {tabs}
          </TabsList>
          <TabsContent value="list" className="mt-4 p-4">
            <HabitList habits={habits} onDelete={deleteHabit} />
          </TabsContent>
          <TabsContent value="new" className="mt-4 p-4">
            <HabitForm onSave={addHabit} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
