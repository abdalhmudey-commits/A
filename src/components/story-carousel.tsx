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

const storiesConfig = [
  {
    id: "habit",
    title: "العادة",
    icon: Flame,
    image: PlaceHolderImages.find((img) => img.id === "habit-story"),
    content: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`,
  },
  {
    id: "summary",
    title: "ملخص كتاب",
    icon: BookMarked,
    image: PlaceHolderImages.find((img) => img.id === "book-summary"),
    content: `ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.`,
  },
  {
    id: "morning",
    title: "اذكار الصباح",
    icon: Sunrise,
    image: PlaceHolderImages.find((img) => img.id === "morning-remembrance"),
    content: `"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ." هذا النص هو مثال يمكن استبداله لاحقًا بمحتوى كامل لأذكار الصباح. يتيح لك التطبيق مساحة لتصفح الأذكار والتأمل في معانيها لبداية يوم مليء بالبركة والسكينة.`,
  },
  {
    id: "evening",
    title: "اذكار المساء",
    icon: Sunset,
    image: PlaceHolderImages.find((img) => img.id === "evening-remembrance"),
    content: `"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ." يوفر هذا القسم مساحة لعرض أذكار المساء كاملة. يمكنك قراءتها هنا لختام يومك بذكر الله وشكره، طالبًا منه العفو والمغفرة. المحتوى الحالي هو مجرد مثال وسيتم استبداله.`,
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
        <Card className="w-full overflow-hidden border-transparent shadow-none bg-transparent flex flex-col items-center justify-center h-full pt-10">
            <CardHeader className="items-center">
                <CardTitle className="font-headline text-3xl text-primary-foreground/90">
                رسالة اليوم
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 items-center justify-center text-center">
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
    <div className="w-full max-w-3xl">
      <div className="pb-4 flex justify-center gap-2 overflow-x-auto">
        {storiesConfig.map((story, index) => (
          <button
            key={story.id}
            onClick={() => handleIndicatorClick(index)}
            className="group flex flex-col items-center gap-1.5 flex-shrink-0"
          >
            <div
              className={`p-1 rounded-full transition-colors ${
                current === index ? "bg-accent" : "bg-primary/20"
              }`}
            >
              <div className="bg-background rounded-full p-1">
                <story.icon
                  className={`h-5 w-5 transition-colors ${
                    current === index
                      ? "text-accent-foreground"
                      : "text-foreground/60"
                  }`}
                />
              </div>
            </div>
            <span
              className={`text-xs sm:text-sm transition-colors ${
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
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary-foreground/90">
                      {story.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    {story.image && (
                      <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={story.image.imageUrl}
                          alt={story.image.description}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          data-ai-hint={story.image.imageHint}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <p className="text-lg leading-relaxed text-foreground/80">
                      {story.content}
                    </p>
                  </CardContent>
                </Card>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-4 -top-10 left-auto md:right-auto md:left-4" />
        <CarouselNext className="left-4 -top-10 right-auto md:left-auto md:right-4" />
      </Carousel>
    </div>
  );
}
