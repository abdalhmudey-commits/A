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
  message: z.string().describe('A motivational message or a wise quote. Should be unique and inspiring.'),
  author: z.string().optional().describe('The author of the quote, if known. Otherwise, "Unknown".')
});

const MotivationalMessagesOutputSchema = z.object({
  messages: z.array(MotivationalMessageSchema).describe("An array of 5 unique motivational messages or wise quotes.")
});
export type MotivationalMessagesOutput = z.infer<typeof MotivationalMessagesOutputSchema>;

export async function generateMotivationalMessages(): Promise<MotivationalMessagesOutput> {
  return generateMotivationalMessageFlow({});
}

const prompt = ai.definePrompt({
  name: 'motivationalMessagePrompt',
  output: {schema: MotivationalMessagesOutputSchema},
  prompt: `You are an AI assistant designed to provide motivation and wisdom. Generate a list of 5 unique, inspiring, and concise messages or quotes. These should encourage users to achieve their goals and maintain a positive outlook. For each quote with a known author, include the author's name. Otherwise, set the author to "Unknown". Ensure the content is diverse and uplifting.`,
});

const generateMotivationalMessageFlow = ai.defineFlow(
  {
    name: 'generateMotivationalMessageFlow',
    outputSchema: MotivationalMessagesOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
