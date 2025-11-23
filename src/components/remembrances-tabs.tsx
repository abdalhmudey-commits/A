"use client";

import { Sunrise, Sunset } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MorningRemembrances from "./morning-remembrances";
import EveningRemembrances from "./evening-remembrances";
import { useLanguage } from "@/context/language-context";

export default function RemembrancesTabs() {
  const { dictionary, language } = useLanguage();

  const tabs = [
    <TabsTrigger key="evening" value="evening" className="gap-2 text-base rounded-none">
      <Sunset className="h-5 w-5" />
      {dictionary.remembrances.evening}
    </TabsTrigger>,
    <TabsTrigger key="morning" value="morning" className="gap-2 text-base rounded-none">
      <Sunrise className="h-5 w-5" />
      {dictionary.remembrances.morning}
    </TabsTrigger>
  ];
  
  if (language === 'ar') {
    tabs.reverse();
  }


  return (
    <Tabs defaultValue="morning" className="w-full">
      <TabsList className="grid w-full grid-cols-2 rounded-none h-14">
        {tabs}
      </TabsList>
      <TabsContent value="morning">
        <MorningRemembrances />
      </TabsContent>
      <TabsContent value="evening">
        <EveningRemembrances />
      </TabsContent>
    </Tabs>
  );
}
