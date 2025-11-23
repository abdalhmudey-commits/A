"use client";

import { Sunrise, Sunset, Bed, Church } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const remembrancesTabs = [
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
    id: 'after-prayer',
    title: 'أذكار بعد الصلاة',
    icon: Church,
    image: PlaceHolderImages.find(img => img.id === 'prayer-remembrance')
  },
  {
    id: 'sleep',
    title: 'أذكار النوم',
    icon: Bed,
    image: PlaceHolderImages.find(img => img.id === 'sleep-remembrance')
  },
];

const ComingSoonContent = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <p className="text-lg text-foreground/70 mt-4">المحتوى قادم قريباً...</p>
    </div>
  );
};

export default function Remembrances() {
  return (
    <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent">
        <CardContent className="p-4 sm:p-6">
            <Tabs defaultValue="morning" className="w-full">
                <TabsList className="grid w-full grid-cols-4 h-auto">
                    {remembrancesTabs.map((tab) => (
                        <TabsTrigger key={tab.id} value={tab.id} className="flex flex-row items-center gap-2 h-12">
                            <tab.icon className="h-5 w-5" />
                            <span className="text-sm truncate">{tab.title}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {remembrancesTabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="mt-4">
                        {tab.image && (
                            <div className="relative h-64 w-full overflow-hidden rounded-lg">
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
                        <div className="p-6 pt-6">
                            <ComingSoonContent title={tab.title} />
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </CardContent>
    </Card>
  );
}
