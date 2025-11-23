"use client";

import {
  BookOpen,
  LayoutGrid,
  Settings,
  Sparkles,
  Sunrise,
  Sunset,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsPanel from "./settings-panel";
import HabitSetup from "./habit-setup";
import MotivationalMessage from "./motivational-message";
import MorningRemembrances from "./morning-remembrances";
import EveningRemembrances from "./evening-remembrances";

const tabsConfig = [
  {
    id: "home",
    title: "الرئيسية",
    icon: Sparkles,
    component: MotivationalMessage,
  },
  {
    id: "habits",
    title: "العادات",
    icon: LayoutGrid,
    component: HabitSetup,
  },
  {
    id: "morning-remembrances",
    title: "أذكار الصباح",
    icon: Sunrise,
    component: MorningRemembrances,
  },
  {
    id: "evening-remembrances",
    title: "أذكار المساء",
    icon: Sunset,
    component: EveningRemembrances,
  },
  {
    id: "settings",
    title: "الإعدادات",
    icon: Settings,
    component: SettingsPanel,
  },
];

export default function MainTabs() {
  return (
    <Tabs defaultValue="home" className="w-full max-w-3xl">
      <TabsList className="grid w-full grid-cols-5 h-auto">
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
             <p>قادم قريبا</p>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
