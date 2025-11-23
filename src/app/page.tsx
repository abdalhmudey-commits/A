import StoryCarousel from "@/components/story-carousel";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 md:gap-12 md:py-20">
        <h1 className="text-4xl font-headline text-primary md:text-5xl lg:text-6xl">
          ترك العادات السيئة
        </h1>
        {/* <MotivationalMessage /> */}
        <StoryCarousel />
      </div>
    </main>
  );
}
