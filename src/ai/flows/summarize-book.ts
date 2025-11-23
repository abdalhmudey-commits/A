'use server';

/**
 * @fileOverview Summarizes a random self-help book using GenAI.
 *
 * - summarizeBook - A function that returns a summary of a random self-help book.
 * - BookSummaryOutput - The return type for the summarizeBook function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BookSummaryInputSchema = z.object({
  previousTitles: z.array(z.string()).optional().describe("قائمة بعناوين الكتب التي تم تلخيصها بالفعل في هذه الجلسة لتجنب التكرار."),
});
export type BookSummaryInput = z.infer<typeof BookSummaryInputSchema>;


const BookSummaryOutputSchema = z.object({
  title: z.string().describe("عنوان الكتاب الذي تم تلخيصه."),
  author: z.string().describe("مؤلف الكتاب."),
  summary: z.string().describe("ملخص مفصل وممل للكتاب. يجب أن يكون شاملاً ويغطي الأفكار الرئيسية والفصول بطريقة مفيدة للقارئ."),
});
export type BookSummaryOutput = z.infer<typeof BookSummaryOutputSchema>;

export async function summarizeBook(input: BookSummaryInput): Promise<BookSummaryOutput> {
  return summarizeBookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBookPrompt',
  input: {schema: BookSummaryInputSchema},
  output: {schema: BookSummaryOutputSchema},
  prompt: `أنت خبير في تلخيص الكتب ومختص في مجال التنمية البشرية وتطوير الذات.
مهمتك هي اختيار كتاب مشهور ومؤثر بشكل عشوائي في هذا المجال (مثل العادات السبع للناس الأكثر فعالية، قوة الآن، فكر وازدد ثراءً، إلخ) وتقديم ملخص مفصل وممل له.

{{#if previousTitles}}
تجنب تلخيص الكتب التالية التي تم تلخيصها بالفعل في هذه الجلسة:
{{#each previousTitles}}
- {{{this}}}
{{/each}}
{{/if}}

تأكد من أن الملخص ليس مجرد نقاط، بل شرح وافٍ لأفكار الكتاب الرئيسية، وكيف يمكن للقارئ تطبيقها في حياته.
يجب أن تختار كتابًا مختلفًا في كل مرة.`,
});

const summarizeBookFlow = ai.defineFlow(
  {
    name: 'summarizeBookFlow',
    inputSchema: BookSummaryInputSchema,
    outputSchema: BookSummaryOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
