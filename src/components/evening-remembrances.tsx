"use client";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import RemembranceContent from "./remembrance-content";
import { useLanguage } from "@/context/language-context";

export default function EveningRemembrances() {
  const { dictionary } = useLanguage();
  return (
     <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent rounded-none">
        <CardHeader className="p-4 pt-6">
            <CardTitle className="font-headline text-3xl text-foreground">{dictionary.remembrances.evening}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <RemembranceContent remembrances={dictionary.remembrancesData.eveningRemembrances} />
        </CardContent>
    </Card>
  )
}
