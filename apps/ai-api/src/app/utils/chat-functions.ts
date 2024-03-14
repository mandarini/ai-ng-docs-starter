// TAKEN FROM: https://github.com/nrwl/nx/tree/master/nx-dev/util-ai/src/lib

import OpenAI from 'openai';
import { ChatItem, PageSection, getSupabaseClient } from './utils';
import { SupabaseClient } from '@supabase/supabase-js';
import GPT3Tokenizer from 'gpt3-tokenizer';

const supabaseUrl = process.env['PUBLIC_SUPABASE_URL'];
const supabaseServiceKey = process.env['SUPABASE_SERVICE_ROLE_KEY'];

// Write a System message here, for the system role 
const PROMPT = `
${`

`
  .replace(/\s+/g, ' ')
  .trim()}
`;


export function createChatMessages(
  messages: ChatItem[],
  query: string,
  contextText: string
): { chatMessages: ChatItem[] } {
  const finalQuery = `
You will be provided sections of the Angular documentation in markdown format, use those to answer my question. 
Only provide the answer. Start replying with the answer directly.

Sections:
${contextText}

Question: """
${query}
"""

Answer as markdown (including related code snippets if available):
    `;

  messages = [
    { role: 'system', content: PROMPT },
    { role: 'user', content: finalQuery },
  ];

  return { chatMessages: messages };
}

export async function createQueryEmbedding(
  openai: OpenAI,
  query: string
): Promise<number[]> {
  // const embeddingResponse: OpenAI.Embeddings.CreateEmbeddingResponse =

  // Let's take a look at the OpenAI API Docs:
  // https://platform.openai.com/docs/api-reference/embeddings/create

  // return embedding;
}

export async function searchDocumentation(
  embedding: number[]
): Promise<PageSection[]> {

  const supabaseClient: SupabaseClient<any, 'public', any> = getSupabaseClient(
    supabaseUrl,
    supabaseServiceKey
  );

  const { error: matchError, data: pageSections } =
  // Call the Postgres function here
  // https://supabase.com/docs/reference/javascript/rpc

  if (matchError) {
    console.log('matchError', matchError);
    throw new Error('Failed to match page sections');
  }


  // What if there are no page sections?
  // ...

  return pageSections;
}

export function getContextText(pageSections: PageSection[]): string {
  // Here, we are using the GPT3Tokenizer to encode the content of the pageSections
  // so that we can count how many tokens we have used so far.
  // We will stop when we reach 2500 tokens.

  const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
  let tokenCount = 0;
  let contextText = '';

  for (let i = 0; i < (pageSections as PageSection[]).length; i++) {
    const pageSection: PageSection = pageSections[i];
    const content = pageSection.content;
    const encoded = tokenizer.encode(content);
    tokenCount += encoded.text.length;

    if (tokenCount >= 2500) {
      break;
    }

    // Here, we are removing any extra whitespace and adding a horizontal rule
    // to separate the different sections.
    contextText += `${content.trim()}\n---\n`;
  }

  return contextText;
}
