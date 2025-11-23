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
import RemembrancesTabs from "./remembrances-tabs";
import { useLanguage } from "@/context/language-context";

export default function MainTabs() {
  const { dictionary } = useLanguage();
  
  const tabsConfig = [
    {
      id: "home",
      title: dictionary.mainTabs.home,
      icon: Sparkles,
      component: MotivationalMessage,
    },
    {
      id: "habits",
      title: dictionary.mainTabs.habits,
      icon: LayoutGrid,
      component: HabitSetup,
    },
    {
      id: "remembrances",
      title: dictionary.mainTabs.remembrances,
      icon: BookOpen,
      component: RemembrancesTabs,
    },
    {
      id: "settings",
      title: dictionary.mainTabs.settings,
      icon: Settings,
      component: SettingsPanel,
    },
  ];

  return (
    <Tabs defaultValue="home" className="w-full max-w-3xl">
      <TabsList className="grid w-full grid-cols-4 h-auto">
        {tabsConfig.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="flex flex-col gap-1.5 h-16">
            <tab.icon className="h-6 w-6" />
            <span className="text-xs truncate">{tab.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsConfig.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-0">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border-t-0 rounded-t-none border border-border/20 shadow-lg min-h-[calc(100vh-200px)]">
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
