"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import HabitForm from "./habit-form";
import { useLanguage } from "@/context/language-context";
import { Progress } from "./ui/progress";
import type { Habit } from "./habit-setup";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";


const ONBOARDING_COMPLETED_KEY = "onboardingCompleted";

export default function Onboarding() {
  const { dictionary } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      const onboardingCompleted = localStorage.getItem(ONBOARDING_COMPLETED_KEY);
      if (!onboardingCompleted) {
        setIsOpen(true);
      }
    } catch (error) {
      console.error("Failed to read from localStorage", error);
    }
  }, []);

  const handleSaveAndFinish = (habit: Omit<Habit, 'id'>) => {
    try {
      const habits = JSON.parse(localStorage.getItem("habitsList") || "[]");
      const habitWithId = { ...habit, id: crypto.randomUUID() };
      localStorage.setItem("habitsList", JSON.stringify([...habits, habitWithId]));
      localStorage.setItem(ONBOARDING_COMPLETED_KEY, "true");
      setIsOpen(false);
      // Optionally, you can refresh the page or update the state in the parent component
      window.location.reload(); 
    } catch (error) {
      console.error("Failed to save habit during onboarding", error);
    }
  };

  const steps = [
    {
        title: dictionary.onboarding.welcomeTitle,
        subtitle: "",
        content: (
            <div className="flex items-center justify-center h-48 bg-muted rounded-md border-2 border-dashed">
                <span className="text-muted-foreground">{dictionary.onboarding.welcomeAdPlaceholder}</span>
            </div>
        )
    },
    {
      title: dictionary.onboarding.habitDescriptionTitle,
      subtitle: dictionary.onboarding.habitDescriptionSubtitle,
      content: <HabitForm onSave={handleSaveAndFinish} />,
    },
    {
      title: dictionary.onboarding.finalStepTitle,
      subtitle: dictionary.onboarding.finalStepSubtitle,
      content: (
        <div className="text-center p-8">
            <p className="text-4xl">🎉</p>
        </div>
      ),
    },
  ];
  
  // This is a special case for the multi-step form within the HabitForm
  if (step === 1) {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md">
                 <DialogHeader>
                    <DialogTitle>{steps[step].title}</DialogTitle>
                    <DialogDescription>{steps[step].subtitle}</DialogDescription>
                </DialogHeader>
                {steps[step].content}
            </DialogContent>
        </Dialog>
    )
  }


  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{steps[step].title}</DialogTitle>
          <DialogDescription>{steps[step].subtitle}</DialogDescription>
        </DialogHeader>

        {steps[step].content}

        <DialogFooter className="flex-row justify-between w-full pt-4">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            {dictionary.onboarding.back}
          </Button>
          {step < steps.length - 1 ? (
             <Button onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>
                {dictionary.onboarding.next}
             </Button>
          ) : (
            <Button onClick={() => {
                localStorage.setItem(ONBOARDING_COMPLETED_KEY, "true");
                setIsOpen(false);
            }}>
                {dictionary.onboarding.finish}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
