import MainTabs from "@/components/main-tabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
        <div className="flex flex-col items-center pt-4 md:pt-6">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4">
             <MainTabs />
          </div>
        </div>
    </main>
  );
}
