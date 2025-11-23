"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";
import SettingsPanel from "./settings-panel";
import HabitSetup from "./habit-setup";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { NoteTaker } from "./note-taker";
import MotivationalMessage from "./motivational-message";

const tabsConfig = [
  {
    id: "home",
    title: "الرئيسية",
    icon: Sparkles,
    component: MotivationalMessage,
  },
  {
    id: "habit",
    title: "العادة",
    icon: Flame,
    component: HabitSetup,
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
    component: NoteTaker,
  },
  {
    id: "settings",
    title: "الإعدادات",
    icon: Settings,
    component: SettingsPanel,
  },
];

const ComingSoonContent = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <p className="text-lg text-foreground/70 mt-4">المحتوى قادم قريباً...</p>
    </div>
  );
};

export default function MainTabs() {
  return (
    <Tabs defaultValue="home" className="w-full max-w-3xl">
      <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 h-auto">
        {tabsConfig.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="flex flex-col gap-1.5 h-16">
            <tab.icon className="h-6 w-6" />
            <span className="text-xs truncate">{tab.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsConfig.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-4">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/20 shadow-lg min-h-[calc(100vh-200px)]">
            {tab.component ? (
              <tab.component />
            ) : (
              <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent">
                  <CardContent className="flex flex-col gap-6 p-0">
                  {tab.image && (
                      <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <Image
                          src={tab.image.imageUrl}
                          alt={tab.image.description || ''}
                          fill
                          className="object-cover"
                          data-ai-hint={tab.image.imageHint}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                          <h2 className="font-headline text-3xl text-white shadow-md">{tab.title}</h2>
                      </div>
                      </div>
                  )}
                  <div className="p-6 pt-0">
                      <ComingSoonContent title={tab.title} />
                  </div>
                  </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
