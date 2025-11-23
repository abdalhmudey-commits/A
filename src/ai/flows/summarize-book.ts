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
تجنب تلخيص الكتب التالية التي تم تلخيصها بالفعل في هذه الجlesa:
${input.previousTitles.map(t => `- ${t}`).join('\n')}
` : ''}

تأكد من أن الملخص ليس مجرد نقاط، بل شرح وافٍ لأفكار الكتاب الرئيسية، وكيف يمكن للقارئ الاستفادة منه.
يجب أن تختار كتابًا مختلفًا في كل مرة، وتستكشف مجالات مختلفة لتقديم تجربة غنية للمستخدم.`;
    
    try {
        const {output} = await ai.generate({
            model: 'gemini-pro',
            prompt: prompt,
            output: {
                schema: BookSummaryOutputSchema,
            }
        });

        return output!;
    } catch (error) {
        console.error("Failed to summarize book:", error);
        // Fallback data in Arabic, as per original setup
        return {
            title: "العادات السبع للناس الأكثر فعالية",
            author: "ستيفن كوفي",
            summary: `يقدم هذا الكتاب نموذجًا شاملاً لتحقيق الفعالية الشخصية والتنظيمية. يركز كوفي على سبع عادات أساسية يجب على الأفراد تبنيها لتحقيق النجاح الحقيقي:\n\n1.  **كن مبادراً:** تحمل مسؤولية حياتك وركز على ما يمكنك التحكم فيه.\n2.  **ابدأ والغاية في ذهنك:** حدد رؤيتك وأهدافك طويلة المدى لتوجيه قراراتك.\n3.  **ابدأ بالأهم قبل المهم:** رتب أولوياتك بناءً على الأهمية وليس فقط الإلحاح.\n4.  **تفكير الفوز/الفوز:** اسعَ دائمًا إلى حلول تعود بالنفع على جميع الأطراف.\n5.  **اسعَ أولاً أن تفهم، ثم أن تُفهم:** استمع جيدًا للآخرين قبل أن تعبر عن وجهة نظرك.\n6.  **التكاتف:** اعمل بشكل تعاوني لتحقيق نتائج أفضل مما يمكن تحقيقه بشكل فردي.\n7.  **اشحذ المنشار:** استثمر في تجديد طاقتك الجسدية والعقلية والروحية والعاطفية باستمرار.\n\n(ملاحظة: هذا ملخص افتراضي يظهر بسبب مشكلة في مفتاح Google AI API. يرجى التأكد من صحة المفتاح وتفعيله لعرض ملخصات حقيقية.)`
        };
    }
  }
);
