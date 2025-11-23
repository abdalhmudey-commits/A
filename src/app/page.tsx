import StoryCarousel from "@/components/story-carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 pt-8 md:gap-12 md:pt-12">
        <StoryCarousel />
      </div>
    </main>
  );
}
