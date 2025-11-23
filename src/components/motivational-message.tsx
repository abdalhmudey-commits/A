"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Sparkles, Bot, ArrowLeft, ArrowRight, Loader2, BookOpen } from "lucide-react";
import {
  generateMotivationalMessages,
  type MotivationalMessagesOutput,
} from "@/ai/flows/generate-motivational-message";
import { 
  summarizeBook,
  type BookSummaryInput,
  type BookSummaryOutput 
} from "@/ai/flows/summarize-book";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

type SummarizedBookRecord = {
  title: string;
  summarizedAt: number; // Timestamp
};

const SUMMARIZED_BOOKS_KEY = "summarizedBooksList";
const TWO_MONTHS_IN_MS = 60 * 24 * 60 * 60 * 1000;

export default function MotivationalMessage() {
  const { dictionary, language } = useLanguage();
  const [data, setData] = useState<MotivationalMessagesOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [summary, setSummary] = useState<BookSummaryOutput | null>(null);
  const [summarizedBooks, setSummarizedBooks] = useState<SummarizedBookRecord[]>([]);
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [isSummaryDialogOpen, setIsSummaryDialogOpen] = useState(false);


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
    
    // Load summarized books from localStorage
    try {
      const savedBooks = localStorage.getItem(SUMMARIZED_BOOKS_KEY);
      if (savedBooks) {
        setSummarizedBooks(JSON.parse(savedBooks));
      }
    } catch (error) {
      console.error("Failed to load summarized books from localStorage", error);
    }
  }, []);

  const handleSummarizeBook = async () => {
    setIsSummaryLoading(true);
    setIsSummaryDialogOpen(true);
    setSummary(null); // Clear previous summary

    try {
      // Filter out books summarized within the last two months
      const now = Date.now();
      const recentBookTitles = summarizedBooks
        .filter(book => (now - book.summarizedAt) < TWO_MONTHS_IN_MS)
        .map(book => book.title);

      const result = await summarizeBook({ previousTitles: recentBookTitles });
      setSummary(result);
      
      // Add the new book to our record
      if(result.title) {
        const newRecord: SummarizedBookRecord = { title: result.title, summarizedAt: Date.now() };
        const updatedBooks = [...summarizedBooks.filter(b => b.title !== result.title), newRecord];
        setSummarizedBooks(updatedBooks);
        localStorage.setItem(SUMMARIZED_BOOKS_KEY, JSON.stringify(updatedBooks));
      }
    } catch (error) {
      console.error("Failed to summarize book:", error);
      setSummary({
        title: dictionary.home.errorTitle,
        author: dictionary.home.errorAuthor,
        summary: dictionary.home.errorSummary,
      });
    } finally {
      setIsSummaryLoading(false);
    }
  };


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
    
    const isLtr = language !== 'ar';
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLtr) {
      if (isLeftSwipe) handleNext();
      else if (isRightSwipe) handlePrev();
    } else { // RTL
      if (isLeftSwipe) handlePrev();
      else if (isRightSwipe) handleNext();
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  if (loading) {
    return (
      <div className="w-full max-w-3xl pt-2">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-6 animate-in fade-in-0 zoom-in-95 duration-500 pt-2">
      <div
        className="relative w-full h-[250px] cursor-grab"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {messages.map((item, index) => {
          const isActive = index === currentIndex;
          const isPast = index < currentIndex;
          let transform = "";
          let opacity = 0;
          let zIndex = 0;

          if (isActive) {
            transform = "translateY(0) scale(1)";
            opacity = 1;
            zIndex = messages.length;
          } else if (isPast) {
            transform = `translateY(0px) scale(${1 + (currentIndex - index) * 0.05})`;
            opacity = 0;
            zIndex = messages.length - index;
          } else { // isFuture
            const offset = index - currentIndex;
            transform = `translateY(${offset * 10}px) scale(${1 - offset * 0.05})`;
            opacity = 1;
            zIndex = messages.length - offset;
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
          <ArrowRight className="h-6 w-6 rtl:rotate-180" />
          <span className="sr-only">{dictionary.home.previous}</span>
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
          <ArrowLeft className="h-6 w-6 rtl:rotate-180" />
          <span className="sr-only">{dictionary.home.next}</span>
        </Button>
      </div>
      
      <div className="mt-4">
        <Button onClick={handleSummarizeBook} disabled={isSummaryLoading}>
          {isSummaryLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <BookOpen className="h-4 w-4" />
          )}
          <span>{dictionary.home.summarizeBook}</span>
        </Button>
      </div>

      <Dialog open={isSummaryDialogOpen} onOpenChange={setIsSummaryDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl text-center">
              {isSummaryLoading ? dictionary.home.loadingSummary : summary?.title}
            </DialogTitle>
            {!isSummaryLoading && summary && (
                <DialogDescription className="text-center">
                    {dictionary.home.summaryBy}{summary.author}
                </DialogDescription>
            )}
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] p-4">
            {isSummaryLoading ? (
                <div className="space-y-4">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                     <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none text-right leading-relaxed whitespace-pre-wrap">
                    {summary?.summary}
                </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
