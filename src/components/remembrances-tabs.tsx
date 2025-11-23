"use client";

import { Sunrise, Sunset } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MorningRemembrances from "./morning-remembrances";
import EveningRemembrances from "./evening-remembrances";

export default function RemembrancesTabs() {
  return (
    <Tabs defaultValue="morning" className="w-full">
      <TabsList className="grid w-full grid-cols-2 rounded-none h-14">
        <TabsTrigger value="morning" className="gap-2 text-base rounded-none">
          <Sunrise className="h-5 w-5" />
          أذكار الصباح
        </TabsTrigger>
        <TabsTrigger value="evening" className="gap-2 text-base rounded-none">
          <Sunset className="h-5 w-5" />
          أذكار المساء
        </TabsTrigger>
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
