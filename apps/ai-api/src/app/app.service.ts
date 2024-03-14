import { Injectable } from '@nestjs/common';
import { getOpenAI } from './utils/utils';
import OpenAI from 'openai';
import {
  createQueryEmbedding,
  getContextText,
  createChatMessages,
  searchDocumentation,
} from './utils/chat-functions';

const openAiKey = process.env['OPENAI_KEY'];

@Injectable()
export class AppService {
  async processQuery(query: string): Promise<string> {
    const openai = getOpenAI(openAiKey);

    const embedding = await createQueryEmbedding(openai, query);

    const pageSections = await searchDocumentation(embedding);

    const contextText = getContextText(pageSections);

    const { chatMessages } = createChatMessages([], query, contextText);

    const response: OpenAI.Chat.Completions.ChatCompletion =
     // Call the completions API here
     // https://platform.openai.com/docs/api-reference/chat/create

    // And extract the response text, so that we can return it to our client
    // const responseText = 

    return responseText;
  }
}
