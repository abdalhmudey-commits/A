"use client";

import MainTabs from "@/components/main-tabs";
import { Toaster } from "@/components/ui/toaster";

export default function AppContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-background overflow-hidden">
        <div className="flex flex-col items-center pt-4 md:pt-6">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4">
            <MainTabs />
            {children}
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}
