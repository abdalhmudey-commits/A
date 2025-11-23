"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

  // For swipe gesture
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const minSwipeDistance = 50; // Minimum distance for a swipe

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      try {
        const result = await generateMotivationalMessages();
        setData(result);
      } catch (error) {
        console.error("Failed to generate motivational message:", error);
        // Stronger fallback data with 5 messages
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

  const messages = data?.messages || [];
  const canGoNext = currentIndex < messages.length - 1;
  const canGoPrev = currentIndex > 0;

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [canGoNext]);

  const handlePrev = useCallback(() => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [canGoPrev]);

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndRef.current = null; // Reset touch end on new touch
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext(); // Corresponds to user swiping left (next item)
    } else if (isRightSwipe) {
      handlePrev(); // Corresponds to user swiping right (previous item)
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  if (loading) {
    return (
      <div className="w-full max-w-3xl pt-4">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-6 animate-in fade-in-0 zoom-in-95 duration-500 pt-4">
      <div
        className="relative w-full h-[250px] cursor-grab"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {messages.map((item, index) => {
          const isActive = index === currentIndex;
          const isPast = index < currentIndex;
          const isFuture = index > currentIndex;

          let transform = "";
          let opacity = 0;
          let zIndex = 0;

          if (isActive) {
            transform = "translateY(0) scale(1)";
            opacity = 1;
            zIndex = messages.length;
          } else if (isFuture) {
            const offset = index - currentIndex;
            transform = `translateY(${offset * 10}px) scale(${1 - offset * 0.05})`;
            opacity = 1;
            zIndex = messages.length - offset;
          } else { // isPast
            transform = 'translateY(-20px) scale(0.95)';
            opacity = 0;
            zIndex = 0;
          }

          return (
            <Card
              key={index}
              className={cn(
                "border-border bg-card shadow-lg absolute w-full h-full transition-all duration-300 ease-in-out flex flex-col justify-center",
                isActive && "pointer-events-auto",
                !isActive && "pointer-events-none"
              )}
              style={{
                transform,
                opacity,
                zIndex,
              }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 gap-4 text-center">
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

      <div className="flex items-center justify-center mt-2 gap-2 text-muted-foreground text-xs">
        <Bot size={14} />
        <span>يتم توليد الرسائل بواسطة الذكاء الاصطناعي عند كل زيارة.</span>
      </div>
    </div>
  );
}
