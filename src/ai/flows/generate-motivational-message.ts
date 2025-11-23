'use server';

/**
 * @fileOverview Generates a motivational message using GenAI.
 *
 * - generateMotivationalMessage - A function that returns a motivational message.
 * - MotivationalMessageOutput - The return type for the generateMotivationalMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MotivationalMessageOutputSchema = z.object({
  message: z.string().describe('A motivational message.'),
});
export type MotivationalMessageOutput = z.infer<typeof MotivationalMessageOutputSchema>;

export async function generateMotivationalMessage(): Promise<MotivationalMessageOutput> {
  return generateMotivationalMessageFlow({});
}

const prompt = ai.definePrompt({
  name: 'motivationalMessagePrompt',
  output: {schema: MotivationalMessageOutputSchema},
  prompt: `You are an AI assistant designed to provide motivational messages to users. Generate a single, inspiring and concise message that encourages the user to achieve their goals and maintain a positive outlook on their day. The message should be no more than 20 words.`,
});

const generateMotivationalMessageFlow = ai.defineFlow(
  {
    name: 'generateMotivationalMessageFlow',
    outputSchema: MotivationalMessageOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
