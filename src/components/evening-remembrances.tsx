import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { eveningRemembrances } from "@/lib/remembrances-data";
import RemembranceContent from "./remembrance-content";

export default function EveningRemembrances() {
  return (
     <Card className="w-full h-full overflow-hidden border-transparent shadow-none bg-transparent rounded-none">
        <CardHeader className="p-4 pt-6">
            <CardTitle className="font-headline text-3xl text-foreground">أذكار المساء</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <RemembranceContent remembrances={eveningRemembrances} />
        </CardContent>
    </Card>
  )
}
