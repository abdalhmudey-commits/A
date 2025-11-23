'use server';

/**
 * @fileOverview Summarizes a random self-help book using GenAI.
 *
 * - summarizeBook - A function that returns a summary of a random self-help book.
 * - BookSummaryOutput - The return type for the summarizeBook function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BookSummaryOutputSchema = z.object({
  title: z.string().describe("عنوان الكتاب الذي تم تلخيصه."),
  author: z.string().describe("مؤلف الكتاب."),
  summary: z.string().describe("ملخص مفصل وممل للكتاب. يجب أن يكون شاملاً ويغطي الأفكار الرئيسية والفصول بطريقة مفيدة للقارئ."),
});
export type BookSummaryOutput = z.infer<typeof BookSummaryOutputSchema>;

export async function summarizeBook(): Promise<BookSummaryOutput> {
  return summarizeBookFlow({});
}

const prompt = ai.definePrompt({
  name: 'summarizeBookPrompt',
  output: {schema: BookSummaryOutputSchema},
  prompt: `أنت خبير في تلخيص الكتب ومختص في مجال التنمية البشرية وتطوير الذات.
مهمتك هي اختيار كتاب مشهور ومؤثر بشكل عشوائي في هذا المجال (مثل العادات السبع للناس الأكثر فعالية، قوة الآن، فكر وازدد ثراءً، إلخ) وتقديم ملخص مفصل وممل له.
تأكد من أن الملخص ليس مجرد نقاط، بل شرح وافٍ لأفكار الكتاب الرئيسية، وكيف يمكن للقارئ تطبيقها في حياته.
حاول في كل مرة اختيار كتاب مختلف عن المرة السابقة.`,
});

const summarizeBookFlow = ai.defineFlow(
  {
    name: 'summarizeBookFlow',
    outputSchema: BookSummaryOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
