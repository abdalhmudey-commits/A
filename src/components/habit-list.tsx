"use client";

import { Trash2, BellRing } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import type { Habit } from "./habit-setup";
import { useLanguage } from "@/context/language-context";

type HabitListProps = {
  habits: Habit[];
  onDelete: (id: string) => void;
};

export default function HabitList({ habits, onDelete }: HabitListProps) {
  const { dictionary } = useLanguage();

  const getUnitString = (unit: Habit["unit"]) => {
    return dictionary.habits.intervalUnit[unit] || unit;
  }

  if (habits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-64">
        <BellRing className="h-12 w-12 text-muted-foreground" />
        <p className="mt-4 text-lg font-medium">{dictionary.habits.noHabitsTitle}</p>
        <p className="text-muted-foreground">
          {dictionary.habits.noHabitsDescription}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <Card key={habit.id} className="flex items-center justify-between p-4">
          <div className="flex flex-col">
            <CardTitle className="text-lg font-semibold">{habit.description}</CardTitle>
            <CardDescription className="text-sm">
                {dictionary.habits.every} {habit.interval} {getUnitString(habit.unit)}
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => onDelete(habit.id)}
          >
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">{dictionary.habits.deleteHabit}</span>
          </Button>
        </Card>
      ))}
    </div>
  );
}
