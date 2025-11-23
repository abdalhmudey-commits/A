import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { morningRemembrances } from "@/lib/remembrances-data";
import RemembranceContent from "./remembrance-content";
import { useLanguage } from "@/context/language-context";

export default function MorningRemembrances() {
  const { dictionary } = useLanguage();
  return (
     <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent rounded-none">
        <CardHeader className="p-4 pt-6">
            <CardTitle className="font-headline text-3xl text-foreground">{dictionary.remembrances.morning}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <RemembranceContent remembrances={morningRemembrances} />
        </CardContent>
    </Card>
  )
}
