"use client";

import { useEffect, useState } from "react";
import { Sparkles, Bot, ArrowLeft, ArrowRight } from "lucide-react";
import {
  generateMotivationalMessages,
  type MotivationalMessagesOutput,
} from "@/ai/flows/generate-motivational-message";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MotivationalMessage() {
  const [data, setData] = useState<MotivationalMessagesOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | "none">("none");

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      try {
        const result = await generateMotivationalMessages();
        setData(result);
      } catch (error) {
        console.error("Failed to generate motivational message:", error);
        setData({
          messages: [
            {
              message: "احتضن الرحلة، فكل خطوة هي تقدم.",
              author: "غير معروف",
            },
            { message: "سر المضي قدمًا هو البدء.", author: "مارك توين" },
            {
              message: "الأمر دائمًا يبدو مستحيلًا حتى يتم إنجازه.",
              author: "نيلسون مانديلا",
            },
            {
              message: "آمن بأنك تستطيع، وستكون قد قطعت نصف الطريق.",
              author: "ثيودور روزفلت",
            },
            {
              message: "الطريقة الوحيدة لعمل أشياء عظيمة هي أن تحب ما تفعله.",
              author: "ستيف جوبز",
            },
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  const handleNext = () => {
    if (data && currentIndex < data.messages.length - 1) {
      setDirection("next");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDirection("none");
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("prev");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setDirection("none");
      }, 300);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-3xl pt-10">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  const messages = data?.messages || [];
  const canGoNext = currentIndex < messages.length - 1;
  const canGoPrev = currentIndex > 0;

  return (
    <div className="relative w-full max-w-3xl pt-10 flex flex-col items-center gap-6 animate-in fade-in-0 zoom-in-95 duration-500">
      <div className="relative w-full h-[250px]">
        {messages.map((item, index) => {
          const isActive = index === currentIndex;
          const isPrevious = index < currentIndex;
          const offset = Math.min(index - currentIndex, 3);
          const scale = 1 - offset * 0.05;
          const translateY = offset * 10;

          return (
            <Card
              key={index}
              className={cn(
                "border-border bg-card shadow-lg absolute w-full h-full transition-all duration-300 ease-in-out",
                isActive ? "z-10" : "z-0",
                 direction === 'next' && isActive ? 'animate-out fade-out-0 slide-out-to-left-52' : '',
                 direction === 'prev' && index === currentIndex - 1 ? 'animate-in fade-in-0 slide-in-from-left-52' : ''
              )}
              style={{
                transform: `scale(${isActive ? 1 : scale}) translateY(${isActive ? 0 : translateY}px)`,
                opacity: isPrevious ? 0 : 1,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 gap-4 text-center min-h-full">
                <Sparkles className="h-8 w-8 text-primary" />
                <p className="font-headline text-2xl italic text-foreground/80 md:text-3xl">
                  "{item.message}"
                </p>
                {item.author && (
                  <p className="font-body text-base text-muted-foreground">
                    - {item.author}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="rounded-full h-12 w-12"
        >
          <ArrowRight className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
        <span className="font-mono text-muted-foreground">
          {currentIndex + 1} / {messages.length}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={!canGoNext}
          className="rounded-full h-12 w-12"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="flex items-center justify-center mt-4 gap-2 text-muted-foreground text-xs">
        <Bot size={14} />
        <span>يتم توليد الرسائل بواسطة الذكاء الاصطناعي عند كل زيارة.</span>
      </div>
    </div>
  );
}
