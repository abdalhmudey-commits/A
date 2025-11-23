"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  BookMarked,
  Flame,
  NotebookPen,
  Sunrise,
  Sunset,
  Settings,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { Textarea } from "./ui/textarea";
import SettingsPanel from "./settings-panel";
import MotivationalMessage from "./motivational-message";

const ComingSoonContent = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <h2 className="font-headline text-3xl text-primary-foreground/90">{title}</h2>
        <p className="text-lg text-foreground/70 mt-4">المحتوى قادم قريباً...</p>
    </div>
  )
}

const storiesConfig = [
  {
    id: "habit",
    title: "العادة",
    icon: Flame,
    image: PlaceHolderImages.find((img) => img.id === "habit-story"),
  },
  {
    id: "summary",
    title: "ملخص كتاب",
    icon: BookMarked,
    image: PlaceHolderImages.find((img) => img.id === "book-summary"),
  },
  {
    id: "morning",
    title: "اذكار الصباح",
    icon: Sunrise,
    image: PlaceHolderImages.find((img) => img.id === "morning-remembrance"),
  },
  {
    id: "evening",
    title: "اذكار المساء",
    icon: Sunset,
    image: PlaceHolderImages.find((img) => img.id === "evening-remembrance"),
  },
  {
    id: "notes",
    title: "تدوين",
    icon: NotebookPen,
  },
  {
    id: "settings",
    title: "الإعدادات",
    icon: Settings,
  },
  {
    id: "motivation",
    title: "رسالة تحفيزية",
    icon: Sparkles,
  },
];

function NoteTaker() {
  const [note, setNote] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const image = PlaceHolderImages.find((img) => img.id === "note-taking");

  useEffect(() => {
    try {
      const savedNote = localStorage.getItem("empower-note");
      if (savedNote) {
        setNote(savedNote);
      }
    } catch (error) {
      console.error("Could not read from localStorage", error);
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem("empower-note", note);
        if (note) {
          setIsSaved(true);
          const savedTimeout = setTimeout(() => setIsSaved(false), 2000);
          return () => clearTimeout(savedTimeout);
        }
      } catch (error) {
        console.error("Could not write to localStorage", error);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [note]);

  return (
    <Card className="w-full overflow-hidden border-accent/20 bg-accent/10">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          تدوين الملاحظات
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <p>اكتب أفكارك، أهدافك، أو أي شيء يلهمك هنا.</p>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="ابدأ الكتابة..."
          className="min-h-[200px] border-accent/50 bg-background/50 focus-visible:ring-accent"
          dir="auto"
        />
        {isSaved && (
          <p className="text-sm text-muted-foreground animate-in fade-in">
            تم الحفظ.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function MotivationalStory() {
    return (
        <Card className="w-full overflow-hidden border-transparent shadow-none bg-transparent flex flex-col items-center justify-center h-full">
            <CardHeader className="items-center">
                <CardTitle className="font-headline text-3xl text-primary-foreground/90">
                رسالة اليوم
                </CardTitle>
            </CardHeader>
            <CardContent className="flex w-full flex-col gap-6 items-center justify-center text-center">
                 <MotivationalMessage />
            </CardContent>
        </Card>
    )
}


export default function StoryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleIndicatorClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="pb-4 flex justify-center gap-4 overflow-x-auto">
        {storiesConfig.map((story, index) => (
          <button
            key={story.id}
            onClick={() => handleIndicatorClick(index)}
            className="group flex flex-col items-center gap-2 flex-shrink-0"
          >
            <div
              className={`p-2 rounded-full transition-colors ${
                current === index ? "bg-accent" : "bg-primary/20"
              }`}
            >
              <div className="bg-background rounded-full p-3">
                <story.icon
                  className={`h-12 w-12 transition-colors ${
                    current === index
                      ? "text-accent-foreground"
                      : "text-foreground/60"
                  }`}
                />
              </div>
            </div>
            <span
              className={`text-base sm:text-lg transition-colors ${
                current === index ? "text-accent-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              {story.title}
            </span>
          </button>
        ))}
      </div>
      <Carousel setApi={setApi} className="w-full" dir="rtl">
        <CarouselContent>
          {storiesConfig.map((story) => (
            <CarouselItem key={story.id}>
              {story.id === "notes" ? (
                <NoteTaker />
              ) : story.id === "settings" ? (
                <SettingsPanel />
              ) : story.id === 'motivation' ? (
                <MotivationalStory />
              ) : (
                <Card className="w-full overflow-hidden border-transparent shadow-none bg-transparent">
                  <CardContent className="flex flex-col gap-6 p-0">
                    {story.image && (
                       <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={story.image.imageUrl}
                          alt={story.image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={story.image.imageHint}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                         <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                           <h2 className="font-headline text-3xl text-white shadow-md">{story.title}</h2>
                         </div>
                       </div>
                    )}
                     <div className="p-6">
                       <ComingSoonContent title={story.title} />
                     </div>
                  </CardContent>
                </Card>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
