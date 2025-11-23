import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { morningRemembrances } from "@/lib/remembrances-data";
import RemembranceContent from "./remembrance-content";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export default function MorningRemembrances() {
  const image = PlaceHolderImages.find(img => img.id === 'morning-remembrance');

  return (
     <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent">
        <CardHeader className="p-4">
          {image && (
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <CardTitle className="font-headline text-3xl text-white shadow-md">أذكار الصباح</CardTitle>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <RemembranceContent remembrances={morningRemembrances} />
        </CardContent>
    </Card>
  )
}
