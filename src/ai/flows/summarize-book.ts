"use server";

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
  summary: z.string().describe("ملخص مفصل وشامل للكتاب. يجب أن يغطي الأفكار الرئيسية والفصول بطريقة مفيدة للقارئ."),
});
export type BookSummaryOutput = z.infer<typeof BookSummaryOutputSchema>;

export async function summarizeBook(input: BookSummaryInput): Promise<BookSummaryOutput> {
  return summarizeBookFlow(input);
}

const summarizeBookFlow = ai.defineFlow(
  {
    name: 'summarizeBookFlow',
    inputSchema: BookSummaryInputSchema,
    outputSchema: BookSummaryOutputSchema,
  },
  async (input) => {
    
    const prompt = `أنت خبير موسوعي في تلخيص الكتب. مهمتك هي اختيار كتاب مشهور ومؤثر بشكل عشوائي وتقديم ملخص مفصل وشامل له.

**خطوات التنفيذ:**
1.  **اختر مجالًا عشوائيًا** من القائمة الواسعة التالية: التاريخ، السير الذاتية، العلم (الفيزياء، الأحياء, الفلك)، الفلسفة، الأدب العالمي (روايات، شعر، مسرحيات)، تطوير الذات، علم النفس، الاقتصاد، الكتب الفكرية، الكتب الدينية (باستثناء القرآن الكريم).
2.  **اختر كتابًا مشهورًا ومؤثرًا** من المجال الذي اخترته. يجب أن يكون الاختيار متنوعًا قدر الإمكان.
3.  قدم ملخصًا مفصلاً وشاملاً للكتاب. يجب أن يكون الملخص عميقًا ويشرح الأفكار الرئيسية، البنية، والدروس المستفادة بطريقة تفيد القارئ.

**قاعدة مهمة جدًا: يُمنع منعاً باتاً اختيار أو تلخيص القرآن الكريم.**

${input.previousTitles && input.previousTitles.length > 0 ? `
تجنب تلخيص الكتب التالية التي تم تلخيصها بالفعل في هذه الجلسة:
${input.previousTitles.map(t => `- ${t}`).join('\n')}
` : ''}

تأكد من أن الملخص ليس مجرد نقاط، بل شرح وافٍ لأفكار الكتاب الرئيسية، وكيف يمكن للقارئ الاستفادة منه.
يجب أن تختار كتابًا مختلفًا في كل مرة، وتستكشف مجالات مختلفة لتقديم تجربة غنية للمستخدم.`;

    const {output} = await ai.generate({
        model: 'gemini-1.5-flash-latest',
        prompt: prompt,
        output: {
            schema: BookSummaryOutputSchema,
        }
    });

    return output!;
  }
);
