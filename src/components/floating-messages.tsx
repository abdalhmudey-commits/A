"use client";

import { useEffect, useState, useCallback } from "react";
import { generateMotivationalMessages, type MotivationalMessagesOutput } from "@/ai/flows/generate-motivational-message";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MessagePosition = {
  top: string;
  left: string;
  transform: string;
};

const getRandomPosition = (): MessagePosition => {
    // Constrain position to avoid edges and ensure visibility when scaled
    // Top: 20% to 60% to move it down. Left: 10% to 70% to keep it centered.
    const top = `${20 + Math.random() * 40}%`; 
    const left = `${10 + Math.random() * 60}%`; 
    const rotate = Math.random() * 20 - 10; // -10 to 10 degrees
    // We add a translation to ensure the center of the card is what's positioned
    return { top, left, transform: `translate(-50%, -50%) rotate(${rotate}deg)` };
};


const fallbackData: MotivationalMessagesOutput = {
    messages: [
      { message: "احتضن الرحلة، فكل خطوة هي تقدم.", author: "غير معروف" },
      { message: "سر المضي قدمًا هو البدء.", author: "مارك توين" },
      { message: "الأمر دائمًا يبدو مستحيلًا حتى يتم إنجازه.", author: "نيلسون مانديلا"},
      { message: "آمن بأنك تستطيع، وستكون قد قطعت نصف الطريق.", author: "ثيودور روزفلت"},
      { message: "الطريقة الوحيدة لعمل أشياء عظيمة هي أن تحب ما تفعله.", author: "ستيف جوبز"},
    ],
};


export default function FloatingMessages() {
  const [data, setData] = useState<MotivationalMessagesOutput | null>(null);
  const [positions, setPositions] = useState<MessagePosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [skeletonPositions, setSkeletonPositions] = useState<MessagePosition[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const result = await generateMotivationalMessages();
      setData(result);
    } catch (error) {
      console.error("Failed to generate motivational message:", error);
      const shuffledMessages = [...fallbackData.messages].sort(() => Math.random() - 0.5);
      setData({messages: shuffledMessages});
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    // Generate positions and fetch data only on the client-side to avoid hydration mismatch
    setSkeletonPositions([...Array(5)].map(() => getRandomPosition()));
    if (data === null) {
      fetchMessages();
    }
  }, [fetchMessages, data]);

  useEffect(() => {
    if (data && positions.length === 0) {
      setPositions(data.messages.map(() => getRandomPosition()));
    }
  }, [data, positions.length]);

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); 
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleContainerClick = () => {
    setActiveIndex(null); 
  };

  if (loading || positions.length === 0) {
    return (
      <div className="relative h-full w-full min-h-[calc(100vh-220px)]">
         {skeletonPositions.map((pos, i) => (
             <Skeleton key={i} className="absolute h-24 w-48" style={pos} />
         ))}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full min-h-[calc(100vh-220px)] animate-in fade-in-50 duration-1000" onClick={handleContainerClick}>
       {data?.messages.map((item, index) => (
         <Card 
            key={index} 
            onClick={(e) => handleCardClick(index, e)}
            className={cn(
              "absolute w-48 md:w-64 origin-center border-border/50 bg-card/80 backdrop-blur-sm shadow-xl transition-all duration-300 ease-in-out cursor-pointer",
              "animate-in fade-in zoom-in-90 slide-in-from-bottom-10",
              activeIndex === index 
                ? 'scale-150 shadow-2xl z-20' 
                : 'hover:scale-110 hover:shadow-2xl z-10'
            )}
            style={{
                ...positions[index],
                zIndex: activeIndex === index ? 20 : 1,
            }}
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
