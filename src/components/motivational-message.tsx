"use client";

import { useEffect, useState } from "react";
import { Sparkles, Bot } from "lucide-react";
import { generateMotivationalMessages, type MotivationalMessagesOutput } from "@/ai/flows/generate-motivational-message";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useSearchParams } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function MotivationalMessage() {
  const [data, setData] = useState<MotivationalMessagesOutput | null>(null);
  const [loading, setLoading] = useState(true);

  // Re-fetch when path or search params change to simulate page navigation
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
            { message: "Embrace the journey, for every step is progress.", author: "Unknown" },
            { message: "The secret of getting ahead is getting started.", author: "Mark Twain" },
            { message: "It always seems impossible until it's done.", author: "Nelson Mandela"},
            { message: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
            { message: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [pathname, searchParams]);

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

  return (
    <div className="relative w-full max-w-3xl pt-10 animate-in fade-in-0 zoom-in-95 duration-500">
       <Carousel className="w-full" dir="rtl">
        <CarouselContent>
          {data?.messages.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-accent/20 bg-accent/10 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4 text-center">
                    <Sparkles className="h-8 w-8 text-accent-foreground/80" />
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 rtl:rotate-180" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 rtl:rotate-180" />
      </Carousel>
      <div className="flex items-center justify-center mt-4 gap-2 text-muted-foreground text-xs">
        <Bot size={14} />
        <span>يتم توليد الرسائل بواسطة الذكاء الاصطناعي عند كل زيارة.</span>
      </div>
    </div>
  );
}
