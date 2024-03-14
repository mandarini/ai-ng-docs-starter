# Angular AI Docs Workshop - ng-conf 2024

## The workshop

Clone this repo:

```bash
git@github.com:mandarini/ai-ng-docs-starter.git
```

Read the `info` section below, it contains useful links, and what you need to get started.

Then, go to the [Tutorial](tutorial/STEP_00.md) page to start the workshop!

## Info

### Tools used

- [OpenAI API](https://platform.openai.com/docs/api-reference) (embeddings and chat completions)
- [Supabase](https://supabase.com/) (database and [vector](https://supabase.com/vector) search)
- [Nx](https://nx.dev/)

### Credit

Inspired by: [supabase-community/nextjs-openai-doc-search](https://github.com/supabase-community/nextjs-openai-doc-search)

Most code adjusted from [Nx](https://github.com/nrwl/nx), specifically from:

- [create-embeddings/src/main.mts](https://github.com/nrwl/nx/blob/master/tools/documentation/create-embeddings/src/main.mts)
- [api/query-ai-handler.ts](https://github.com/nrwl/nx/blob/master/nx-dev/nx-dev/pages/api/query-ai-handler.ts)

### What you need

You need **API keys** for OpenAI and Supabase. So, you need to fill in the following env vars:

- OPENAI_KEY
- SUPABASE_SERVICE_ROLE_KEY
- PUBLIC_SUPABASE_URL

### Full final version of the code

You can find a complete version of the code in this repo: https://github.com/mandarini/ai-ng-docs

## Useful links

- [Nx Docs AI assistant](https://blog.nrwl.io/nx-docs-ai-assistant-433d238e45d4)
- [OpenAI - GPT Guide](https://platform.openai.com/docs/guides/gpt)
- [OpenAI - What are embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings)
- [OpenAI - Chat reference](https://platform.openai.com/docs/api-reference/chat)
- [OpenAI API Node lib GitHub](https://github.com/openai/openai-node)
- [OpenAI API Node lib reference](https://platform.openai.com/docs/libraries/node-js-library)
- [Supabase vector search guide](https://supabase.com/docs/guides/ai/examples/nextjs-vector-search)
- [Assistants API blog post](https://pakotinia.medium.com/openais-assistants-api-a-hands-on-demo-110a861cf2d0)

Here is the [Nx AI Assistant](https://nx.dev/ai-chat) which this repo replicates (the functionality of).
