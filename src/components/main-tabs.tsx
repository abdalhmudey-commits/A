"use client";

import {
  BookOpen,
  LayoutGrid,
  Settings,
  Sparkles,
  NotebookPen,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsPanel from "./settings-panel";
import HabitSetup from "./habit-setup";
import MotivationalMessage from "./motivational-message";
import RemembrancesTabs from "./remembrances-tabs";
import { useLanguage } from "@/context/language-context";
import Onboarding from "./onboarding";
import { NoteTaker } from "./note-taker";

export default function MainTabs() {
  const { dictionary, language } = useLanguage();
  
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
       id: "notes",
      title: dictionary.mainTabs.notes,
      icon: NotebookPen,
      component: NoteTaker,
    },
    {
      id: "settings",
      title: dictionary.mainTabs.settings,
      icon: Settings,
      component: SettingsPanel,
    },
  ];

  // Create a mutable copy for manipulation
  let displayTabs = [...tabsConfig];
  let contentOrder = [...tabsConfig];

  if (language === 'ar') {
    // Reverse the order for RTL display
    displayTabs.reverse();
  }


  return (
    <div className="w-full max-w-3xl relative">
      <Onboarding />
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-5 h-auto">
          {displayTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex flex-col gap-1.5 h-16">
              <tab.icon className="h-6 w-6" />
              <span className="text-xs truncate">{tab.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {contentOrder.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-0">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg border-t-0 rounded-t-none border border-border/20 shadow-lg min-h-[calc(100vh-200px)]">
              {tab.component ? (
                <tab.component />
              ) : (
              <p>Coming Soon</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-muted/30 backdrop-blur-sm flex items-center justify-center text-muted-foreground border-t z-10">
        {dictionary.ads.bannerPlaceholder}
      </div>
    </div>
  );
}
