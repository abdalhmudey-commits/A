"use client";

import { useState, useEffect } from "react";
import { PlusCircle, ListTodo } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  HabitForm  from "./habit-form";
import HabitList from "./habit-list";

export type Habit = {
  id: string;
  description: string;
  interval: number;
  unit: "seconds" | "minutes" | "hours" | "days";
  notificationText: string;
  audioUrl?: string;
};

const HABITS_STORAGE_KEY = "habitsList";

export default function HabitSetup() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [activeTab, setActiveTab] = useState("new");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
      if (savedHabits) {
        setHabits(JSON.parse(savedHabits));
      }
    } catch (error) {
      console.error("Failed to load habits from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
      } catch (error) {
        console.error("Failed to save habits to localStorage", error);
      }
    }
  }, [habits, isMounted]);

  const addHabit = (newHabit: Omit<Habit, 'id'>) => {
    const habitWithId = { ...newHabit, id: crypto.randomUUID() };
    setHabits(prevHabits => [...prevHabits, habitWithId]);
    setActiveTab("list");
  };

  const deleteHabit = (habitId: string) => {
    setHabits(prevHabits => prevHabits.filter(habit => habit.id !== habitId));
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
                            عاداتي
                        </TabsTrigger>
                        <TabsTrigger value="new" className="gap-2 text-base rounded-none" disabled>
                            <PlusCircle className="h-5 w-5" />
                            إعداد جديد
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent">
      <CardContent className="p-0 sm:p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-none h-14">
             <TabsTrigger value="new" className="gap-2 text-base rounded-none">
              <PlusCircle className="h-5 w-5" />
              إعداد جديد
            </TabsTrigger>
            <TabsTrigger value="list" className="gap-2 text-base rounded-none">
              <ListTodo className="h-5 w-5" />
              عاداتي
            </TabsTrigger>
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
