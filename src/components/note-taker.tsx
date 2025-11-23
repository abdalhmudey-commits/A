"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";

export function NoteTaker() {
  const [note, setNote] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const savedNote = localStorage.getItem("empower-note");
      if (savedNote) {
        setNote(savedNote);
      }
    } catch (error) {
      console.error("Could not read from localStorage", error);
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem("empower-note", note);
        if (note) {
          setIsSaved(true);
          const savedTimeout = setTimeout(() => setIsSaved(false), 2000);
          return () => clearTimeout(savedTimeout);
        }
      } catch (error) {
        console.error("Could not write to localStorage", error);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [note]);

  return (
    <Card className="w-full overflow-hidden border-border bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          تدوين الملاحظات
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>اكتب أفكارك، أهدافك، أو أي شيء يلهمك هنا.</p>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="ابدأ الكتابة..."
          className="min-h-[200px] border-accent/50 bg-background/50 focus-visible:ring-accent"
          dir="auto"
        />
        {isSaved && (
          <p className="text-sm text-muted-foreground animate-in fade-in">
            تم الحفظ.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
