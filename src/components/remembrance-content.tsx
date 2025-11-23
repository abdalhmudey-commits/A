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
  text: string;
  count: number;
  virtue: string;
};

type RemembranceContentProps = {
  remembrances: Remembrance[];
};


export default function RemembranceContent({ remembrances }: RemembranceContentProps) {
  const { dictionary } = useLanguage();
  return (
    <Accordion type="single" collapsible className="w-full">
      {remembrances.map((remembrance) => (
        <AccordionItem value={`item-${remembrance.id}`} key={remembrance.id}>
          <AccordionTrigger className="text-right hover:no-underline">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-2 py-1">{remembrance.count}x</Badge>
              <span className="flex-1">{(remembrance.text).substring(0, 50)}...</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 p-4 bg-muted/50 rounded-md">
              <p className="text-lg leading-relaxed font-body whitespace-pre-wrap">{remembrance.text}</p>
              {remembrance.virtue && (
                <div className="border-t border-border pt-3 mt-3">
                  <p className="text-sm text-muted-foreground font-semibold">{dictionary.remembrances.virtue}:</p>
                  <p className="text-sm text-muted-foreground italic">"{remembrance.virtue}"</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
