import MotivationalMessage from "@/components/motivational-message";
import StoryTabs from "@/components/story-tabs";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-20">
        <h1 className="text-4xl font-headline text-primary md:text-5xl lg:text-6xl">
          Empower
        </h1>
        <MotivationalMessage />
        <StoryTabs />
      </div>
    </main>
  );
}
