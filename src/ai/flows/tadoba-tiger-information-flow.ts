'use server';
/**
 * @fileOverview A Genkit flow for generating comprehensive and engaging information about Tadoba's tiger population.
 *
 * - tadobaTigerInformation - A function to retrieve detailed information about Tadoba tigers.
 * - TadobaTigerInformationInput - The input type for the tadobaTigerInformation function.
 * - TadobaTigerInformationOutput - The return type for the tadobaTigerInformation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TadobaTigerInformationInputSchema = z.object({
  query: z.string().optional().describe('An optional specific query about Tadoba tigers. If empty, general comprehensive information will be provided.'),
});
export type TadobaTigerInformationInput = z.infer<typeof TadobaTigerInformationInputSchema>;

const TadobaTigerInformationOutputSchema = z.object({
  title: z.string().describe('A catchy title for the Tadoba tiger information.'),
  sections: z.array(
    z.object({
      heading: z.string().describe('The heading for a section of information.'),
      content: z.string().describe('The detailed content for this section.'),
    })
  ).describe('An array of sections, each with a heading and detailed content about Tadoba tigers.'),
  callToAction: z.string().optional().describe('An optional call to action or concluding remark, e.g., "Plan your visit now!"'),
});
export type TadobaTigerInformationOutput = z.infer<typeof TadobaTigerInformationOutputSchema>;

export async function tadobaTigerInformation(input: TadobaTigerInformationInput): Promise<TadobaTigerInformationOutput> {
  return tadobaTigerInformationFlow(input);
}

const tadobaTigerInformationPrompt = ai.definePrompt({
  name: 'tadobaTigerInformationPrompt',
  input: { schema: TadobaTigerInformationInputSchema },
  output: { schema: TadobaTigerInformationOutputSchema },
  prompt: `You are an expert wildlife guide and conservationist specializing in the Tadoba Andhari Tiger Reserve in India. Your goal is to provide comprehensive, engaging, and accurate information about Tadoba's tiger population and their characteristics.

The user is planning a trip or is currently visiting Tadoba and wants to enhance their understanding of the wildlife sanctuary.

{{#if query}}
The user has a specific question: "{{{query}}}". Please answer this query thoroughly, providing detailed information about the Tadoba tigers relevant to their question. Structure your answer into logical sections with headings.
{{else}}
Provide a comprehensive overview of Tadoba's tigers, including general facts, their unique characteristics, habitat, conservation efforts, and interesting behaviors or facts. Structure this information into several engaging sections with clear headings.
{{/if}}

Ensure the tone is informative and captivating, suitable for a visitor eager to learn about these magnificent animals.`,
});

const tadobaTigerInformationFlow = ai.defineFlow(
  {
    name: 'tadobaTigerInformationFlow',
    inputSchema: TadobaTigerInformationInputSchema,
    outputSchema: TadobaTigerInformationOutputSchema,
  },
  async (input) => {
    const { output } = await tadobaTigerInformationPrompt(input);
    if (!output) {
      throw new Error('Failed to generate Tadoba tiger information.');
    }
    return output;
  }
);
