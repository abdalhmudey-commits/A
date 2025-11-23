'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/generate-motivational-message.ts';
import '@/ai/flows/summarize-book.ts';
