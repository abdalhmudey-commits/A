
"use client";

import { useEffect, useState } from "react";
import { generateMotivationalMessages, type MotivationalMessagesOutput } from "@/ai/flows/generate-motivational-message";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

type MessagePosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform: string;
};

const getRandomPosition = (): MessagePosition => {
  const top = Math.random() > 0.5 ? `${Math.random() * 50}%` : undefined;
  const bottom = top ? undefined : `${Math.random() * 50}%`;
  const left = Math.random() > 0.5 ? `${Math.random() * 60}%` : undefined;
  const right = left ? undefined : `${Math.random() * 60}%`;
  const rotate = Math.random() * 20 - 10; // -10 to 10 degrees
  return { top, bottom, left, right, transform: `rotate(${rotate}deg)` };
};


export default function FloatingMessages() {
  const [data, setData] = useState<MotivationalMessagesOutput | null>(null);
  const [positions, setPositions] = useState<MessagePosition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      try {
        const result = await generateMotivationalMessages();
        setData(result);
        setPositions(result.messages.map(() => getRandomPosition()));
      } catch (error) {
        console.error("Failed to generate motivational message:", error);
        const fallbackData = {
          messages: [
            { message: "احتضن الرحلة، فكل خطوة هي تقدم.", author: "غير معروف" },
            { message: "سر المضي قدمًا هو البدء.", author: "مارك توين" },
            { message: "الأمر دائمًا يبدو مستحيلًا حتى يتم إنجازه.", author: "نيلسون مانديلا"},
            { message: "آمن بأنك تستطيع، وستكون قد قطعت نصف الطريق.", author: "ثيودور روزفلت"},
            { message: "الطريقة الوحيدة لعمل أشياء عظيمة هي أن تحب ما تفعله.", author: "ستيف جوبز"},
          ],
        };
        setData(fallbackData);
        setPositions(fallbackData.messages.map(() => getRandomPosition()));
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return (
      <div className="relative h-[calc(100vh-200px)] w-full">
         {[...Array(5)].map((_, i) => (
             <Skeleton key={i} className="absolute h-24 w-48" style={getRandomPosition()} />
         ))}
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100vh-200px)] w-full animate-in fade-in-50 duration-1000">
       {data?.messages.map((item, index) => (
         <Card 
            key={index} 
            className="absolute w-48 md:w-64 border-border/50 bg-card/80 backdrop-blur-sm shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-in fade-in zoom-in-90 slide-in-from-bottom-10"
            style={positions[index]}
            >
           <CardContent className="p-4 text-center">
             <p className="font-headline text-lg italic text-foreground/90">
               "{item.message}"
             </p>
             {item.author && (
               <p className="mt-2 font-body text-xs text-muted-foreground">
                 - {item.author}
               </p>
             )}
           </CardContent>
         </Card>
       ))}
    </div>
  );
}
