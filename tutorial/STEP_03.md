[previous step](STEP_02.md) | [next step](STEP_04.md)

---

# Chapter 4: Communicating with OpenAI

In this section of the workshop, we'll dive into the Nest.js application that interacts with OpenAI's API to enhance your Angular documentation with AI-driven search capabilities. We'll focus on the [app.service.ts](../apps/ai-api/src/app/app.service.ts) file, which is the heart of our application, handling the logic for processing user queries and fetching relevant documentation sections.

## Understanding the Structure

Take a moment to explore the provided scaffolded files. We have the following key files you'll be working with:

- [app.controller.ts](../apps/ai-api/src/app/app.controller.ts): Controls the request and response lifecycle.
- [app.module.ts](../apps/ai-api/src/app/app.module.ts): The root module of the application where services are registered.
- [app.service.ts](../apps/ai-api/src/app/app.service.ts): Contains the core logic for processing queries and interacting with OpenAI.
- [chat-functions.ts](../apps/ai-api/src/app/utils/chat-functions.ts): Helper functions for creating embeddings and generating responses.
- [utils.ts](../apps/ai-api/src/app/utils/utils.ts): Utility functions that might be helpful during development.

## Fill in the gaps

### `createQueryEmbedding`

This file ([app.service.ts](../apps/ai-api/src/app/app.service.ts)) is the core of our workshop.

First, let's implement the `createQueryEmbedding` function, which will generate an embedding for a user's search query using OpenAI's API. Find this function in the [chat-functions.ts](../apps/ai-api/src/app/utils/chat-functions.ts) and using the [OpenAI API documentation](https://platform.openai.com/docs/api-reference/embeddings/create) try to get back an embedding (an array of numbers!).

If you're stuck, you can find the finished code in the [completed repository](https://github.com/mandarini/ai-ng-docs).

### `searchDocumentation`

Use the generated embedding to find the most relevant sections of the Angular documentation. Implement a query to Supabase.

Remember in the first step that we created a table with the documentation running a SQL query script? That SQL template also contained a PostgreSQL function, which will be used to search for the most relevant documentation sections based on the user's query.

Go back to your Supabase's project dashboard, to the SQL Editor section, and take a look at the "OpenAI Vector Search" query. Find the `match_page_sections` function and try to understand how it works.

#### Understanding the `match_page_sections` Function

This PostgreSQL function is a key component of our AI-enhanced search system. It allows us to find the most relevant sections of the Angular documentation based on the similarity to a user's search query. Here's how it works:

- **Input Parameters**: The function takes four main inputs:

  - An embedding vector representing the user's query.
  - A match threshold that sets the minimum similarity score for a section to be considered relevant.
  - A match count, which limits the number of returned sections.
  - A minimum content length to ensure only substantial sections are considered.

- **Process**: It compares the query's embedding to the embeddings of various documentation sections stored in our database. The function calculates the similarity between the embeddings using a method similar to the dot product, which is fast and efficient.

- **Output**: It returns details about the most similar sections, including their IDs, headings, content, and how closely they match the query (similarity score).

This function is crucial for delivering a smart search experience that goes beyond simple keyword matching, allowing users to find the most relevant documentation sections based on the semantic meaning of their queries.

#### Calling the function

Now that we have our `match_page_sections` function, and we know how it works, we can call it from our Nest.js application. You can take a look at the Supabase documentation on how to [call a Postgres function](https://supabase.com/docs/reference/javascript/rpc). Find the `searchDocumentation` function in [chat-functions.ts](../apps/ai-api/src/app/utils/chat-functions.ts) file and implement the call to the `match_page_sections` function.

### `createChatMessages`

This function combines the user's query with the fetched documentation sections. This will be our final prompt for OpenAI's Chat Completion API.

Take a note how we are adding a `system` message and a `user` message. The `system` message must contain the general, high level instructions for our assistant. At the top of the [chat-functions.ts](../apps/ai-api/src/app/utils/chat-functions.ts) file you fill find the empty `PROMPT` const. Try to write a system prompt that will guide GPT to generate a response that will be helpful for the user.

### Finally, chat with OpenAI

In [app.service.ts](../apps/ai-api/src/app/app.service.ts) call the completions API. You can use the [OpenAI API documentation](https://platform.openai.com/docs/api-reference/chat/) to help you.

Then, look at the return object. Extract from the return object only the final message and return it.

If you're stuck, you can find the finished code in the [completed repository](https://github.com/mandarini/ai-ng-docs).

---

[previous step](STEP_02.md) | [next step](STEP_04.md)
