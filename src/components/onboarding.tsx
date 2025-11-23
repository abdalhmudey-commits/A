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
import type { Habit } from "./habit-setup";


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
      // If reading fails, assume onboarding is not completed to be safe
      setIsOpen(true);
    }
  }, []);

  const handleSaveAndFinish = (habit: Omit<Habit, 'id'>) => {
    try {
      // We are in the onboarding flow, so we handle saving directly
      const habits = JSON.parse(localStorage.getItem("habitsList") || "[]");
      const habitWithId = { ...habit, id: crypto.randomUUID() };
      localStorage.setItem("habitsList", JSON.stringify([...habits, habitWithId]));
      
      // Move to the final step
      setStep(prev => prev + 1);

    } catch (error) {
      console.error("Failed to save habit during onboarding", error);
    }
  };

  const handleFinishOnboarding = () => {
    try {
        localStorage.setItem(ONBOARDING_COMPLETED_KEY, "true");
        setIsOpen(false);
        window.location.reload(); 
    } catch(error){
        console.error("Failed to complete onboarding", error);
    }
  }

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
            <p className="text-4xl animate-bounce">🎉</p>
        </div>
      ),
    },
  ];
  
  // This is a special case for the multi-step form within the HabitForm component
  if (step === 1) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if(!open) handleFinishOnboarding() }}>
            <DialogContent className="sm:max-w-md">
                 <DialogHeader>
                    <DialogTitle>{steps[step].title}</DialogTitle>
                    <DialogDescription>{steps[step].subtitle}</DialogDescription>
                </DialogHeader>
                {steps[step].content}
                {/* Footer is handled inside HabitForm for this step */}
            </DialogContent>
        </Dialog>
    )
  }


  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if(!open) handleFinishOnboarding() }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{steps[step].title}</DialogTitle>
          {steps[step].subtitle && <DialogDescription>{steps[step].subtitle}</DialogDescription>}
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
            <Button onClick={handleFinishOnboarding}>
                {dictionary.onboarding.finish}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
