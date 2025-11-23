"use client";

import { useState } from "react";
import { PlusCircle, ListTodo } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
  const [habits, setHabits] = useState<Habit[]>(() => {
    try {
      const savedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
      return savedHabits ? JSON.parse(savedHabits) : [];
    } catch (error) {
      console.error("Failed to load habits from localStorage", error);
      return [];
    }
  });
  const [activeTab, setActiveTab] = useState("list");

  const addHabit = (newHabit: Omit<Habit, 'id'>) => {
    const habitWithId = { ...newHabit, id: crypto.randomUUID() };
    const updatedHabits = [...habits, habitWithId];
    setHabits(updatedHabits);
    try {
      localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(updatedHabits));
    } catch (error) {
      console.error("Failed to save habits to localStorage", error);
    }
    setActiveTab("list");
  };

  const deleteHabit = (habitId: string) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    setHabits(updatedHabits);
     try {
      localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(updatedHabits));
    } catch (error) {
      console.error("Failed to save habits to localStorage", error);
    }
  };

  return (
    <Card className="w-full overflow-hidden border-border bg-card">
       <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <span>تتبع عاداتك</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list" className="gap-2">
              <ListTodo className="h-4 w-4" />
              عاداتي
            </TabsTrigger>
            <TabsTrigger value="new" className="gap-2">
              <PlusCircle className="h-4 w-4" />
              إعداد جديد
            </TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="mt-4">
            <HabitList habits={habits} onDelete={deleteHabit} />
          </TabsContent>
          <TabsContent value="new" className="mt-4">
            <HabitForm onSave={addHabit} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
