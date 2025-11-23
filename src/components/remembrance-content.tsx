"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/language-context";

type Remembrance = {
  id: number;
  arabicText: string;
  translation: string;
  count: number;
  virtue: string;
};

type RemembranceContentProps = {
  remembrances: Remembrance[];
};


export default function RemembranceContent({ remembrances }: RemembranceContentProps) {
  const { dictionary, language } = useLanguage();
  return (
    <Accordion type="single" collapsible className="w-full">
      {remembrances.map((remembrance) => (
        <AccordionItem value={`item-${remembrance.id}`} key={remembrance.id}>
          <AccordionTrigger className="text-start hover:no-underline">
            <div className="flex items-center gap-4 w-full">
              <Badge variant="secondary" className="px-2 py-1">{remembrance.count}x</Badge>
              <span className="flex-1 text-start">{(language === 'ar' ? remembrance.arabicText : remembrance.translation).substring(0, 50)}...</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 p-4 bg-muted/50 rounded-md">
              <p className="text-lg leading-relaxed font-body whitespace-pre-wrap text-right" dir="rtl">{remembrance.arabicText}</p>
              {language !== 'ar' && (
                 <p className="text-base leading-relaxed font-body whitespace-pre-wrap italic opacity-80 text-start">{remembrance.translation}</p>
              )}
              {remembrance.virtue && (
                <div className="border-t border-border pt-3 mt-3">
                  <p className="text-sm text-muted-foreground font-semibold text-start">{dictionary.remembrances.virtue}:</p>
                  <p className="text-sm text-muted-foreground italic text-start">"{remembrance.virtue}"</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
