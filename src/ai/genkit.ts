import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {gemini25Flash} from 'genkitx-google-genai';

export const ai = genkit({
  plugins: [googleAI({
    apiVersion: 'v1beta'
  })],
  model: gemini25Flash,
});
