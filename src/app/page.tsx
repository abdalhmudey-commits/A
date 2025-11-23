import StoryCarousel from "@/components/story-carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 pt-4 md:gap-6 md:pt-6">
        <StoryCarousel />
      </div>
    </main>
  );
}
