[previous step](STEP_04.md) | [next step](STEP_06.md)

---

# Chapter 6: Next Steps - Enhancing Our AI-Powered Documentation Assistant

Congratulations on reaching this point in our workshop! You've successfully integrated AI functionalities into your documentation!

While what we've built is powerful, there's always room for improvement and expansion. Here are some exciting next steps to consider:

1. Evolving into a Chat Interface
   **Current State**: Right now, our application operates on a query-response basis, where users ask a question and receive an answer without any context of previous interactions.

   **Next Step**: To create a more engaging and informative experience, consider transforming this system into a full-fledged chat interface. This would involve:

   - Storing the history of messages in the `messages` array in our Node.js application.
   - Pass the entire message thread to the OpenAI API for contextually rich responses.

2. Implementing Streaming Responses
   **Enhanced UX**: Streaming responses, where the answer appears as if it's being typed in real-time, can significantly enhance user engagement by mimicking a natural conversation.

   **Implementation**: This feature requires adjustments in how responses are received and displayed on the front-end, but also in the way we request the chat completion from OpenAI in our Nest.js application, and how we return the responses to the front-end. During our workshop, we set the `stream` option to `false`. You can read more in the [documentation of the OpenAI API](https://platform.openai.com/docs/api-reference/chat/create#chat-create-stream). If we were to implement streaming, of course `stream` would be set to true, and the response would be handled differently.

3. Exploring OpenAI's Assistants API
   **New Opportunities**: OpenAI's Assistants API, currently in beta, offers tailored functionalities for building knowledge base assistants. It simplifies managing conversational contexts and threads, potentially reducing the complexity of maintaining chat histories.

   **Consideration**: While promising, it's important to note that the Assistants API is still in beta and lacks certain features like streaming. Keep an eye on its development for future integration possibilities. You can read more in [my blog post](https://pakotinia.medium.com/openais-assistants-api-a-hands-on-demo-110a861cf2d0).

4. Leveraging GPT with Direct Document Upload
   **Pro Features**: Uploading documentation directly to ChatGPT for processing is a feature available to Pro users. This approach simplifies embedding generation but requires reliance on external hosting and lacks flexibility in updating content.

   **Our Solution's Advantage**: Our current setup, with embeddings generated and stored locally or in a cloud database, offers greater control over content updates. Consider setting up a GitHub action to automate the regeneration of embeddings, ensuring your assistant remains up-to-date with the latest documentation.

---

[previous step](STEP_04.md) | [next step](STEP_06.md)
