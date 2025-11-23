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
  const [dir, setDir] = useState<'ltr' | 'rtl'>('rtl');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const docDir = document.documentElement.dir || 'rtl';
      setDir(docDir as 'ltr' | 'rtl');
    }
  }, []);

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
            { message: "احتضن الرحلة، فكل خطوة هي تقدم.", author: "غير معروف" },
            { message: "سر المضي قدمًا هو البدء.", author: "مارك توين" },
            { message: "الأمر دائمًا يبدو مستحيلًا حتى يتم إنجازه.", author: "نيلسون مانديلا"},
            { message: "آمن بأنك تستطيع، وستكون قد قطعت نصف الطريق.", author: "ثيودور روزفلت"},
            { message: "الطريقة الوحيدة لعمل أشياء عظيمة هي أن تحب ما تفعله.", author: "ستيف جوبز"},
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
       <Carousel className="w-full" opts={{ direction: dir }}>
        <CarouselContent>
          {data?.messages.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-border bg-card shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4 text-center min-h-[200px]">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex items-center justify-center mt-4 gap-2 text-muted-foreground text-xs">
        <Bot size={14} />
        <span>يتم توليد الرسائل بواسطة الذكاء الاصطناعي عند كل زيارة.</span>
      </div>
    </div>
  );
}
