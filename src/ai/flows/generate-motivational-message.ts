'use server';

/**
 * @fileOverview Generates a motivational message using GenAI.
 *
 * - generateMotivationalMessage - A function that returns a motivational message.
 * - MotivationalMessageOutput - The return type for the generateMotivationalMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MotivationalMessageSchema = z.object({
  message: z.string().describe('رسالة تحفيزية أو اقتباس حكيم. يجب أن تكون فريدة وملهمة.'),
  author: z.string().optional().describe('مؤلف الاقتباس، إن كان معروفًا. وإلا، "غير معروف".')
});

const MotivationalMessagesOutputSchema = z.object({
  messages: z.array(MotivationalMessageSchema).describe("مجموعة من 5 رسائل تحفيزية أو اقتباسات حكيمة فريدة.")
});
export type MotivationalMessagesOutput = z.infer<typeof MotivationalMessagesOutputSchema>;

export async function generateMotivationalMessages(): Promise<MotivationalMessagesOutput> {
  return generateMotivationalMessageFlow({});
}

const prompt = ai.definePrompt({
  name: 'motivationalMessagePrompt',
  output: {schema: MotivationalMessagesOutputSchema},
  prompt: `أنت مساعد ذكاء اصطناعي متخصص في تقديم التحفيز والحكمة باللغة العربية. قم بإنشاء قائمة من 5 رسائل أو اقتباسات فريدة وملهمة وموجزة. يجب أن تشجع هذه الرسائل المستخدمين على تحقيق أهدافهم والحفاظ على نظرة إيجابية. لكل اقتباس له مؤلف معروف، قم بتضمين اسم المؤلف. وإلا، اضبط المؤلف على "غير معروف". تأكد من أن المحتوى متنوع وراقٍ.`,
});

const generateMotivationalMessageFlow = ai.defineFlow(
  {
    name: 'generateMotivationalMessageFlow',
    outputSchema: MotivationalMessagesOutputSchema,
  },
  async () => {
    const {output} = await ai.generate({
      model: 'googleai/gemini-1.5-pro-latest',
      prompt: prompt.prompt,
      output: { schema: MotivationalMessagesOutputSchema },
    });
    return output!;
  }
);
