"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

import { generateMotivationalMessage } from "@/ai/flows/generate-motivational-message";
import { Skeleton } from "@/components/ui/skeleton";

export default function MotivationalMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      try {
        const result = await generateMotivationalMessage();
        setMessage(result.message);
      } catch (error) {
        console.error("Failed to generate motivational message:", error);
        setMessage("Embrace the journey, for every step is progress.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-3xl">
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-3xl text-center animate-in fade-in-0 zoom-in-95 duration-500">
      <Sparkles className="absolute -left-4 -top-4 h-6 w-6 text-accent/80 rtl:hidden" />
      <Sparkles className="absolute -right-4 -top-4 h-6 w-6 text-accent/80 ltr:hidden" />
      <Sparkles className="absolute -right-4 -bottom-4 h-6 w-6 text-accent/80 rtl:hidden" />
      <Sparkles className="absolute -left-4 -bottom-4 h-6 w-6 text-accent/80 ltr:hidden" />
      <p className="font-headline text-2xl italic text-foreground/80 md:text-3xl">
        "{message}"
      </p>
    </div>
  );
}
