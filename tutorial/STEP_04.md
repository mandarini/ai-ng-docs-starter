[previous step](STEP_03.md) | [next step](STEP_05.md)

---

# Chapter 5: The Angular app

In our Angular app, we are just making a call to our API and displaying the result.

## The QueryService

Take a look at our [query.service.ts](../apps/ai-chat/src/app/query.service.ts).

The QueryService is designed to facilitate communication with our Nest.js back-end. It's responsible for sending user queries and handling the responses. Here's a quick breakdown of its main features:

### Sending Queries

The service uses Angular's `HttpClient` to make HTTP POST requests to the back-end. Each request carries the user's query as part of the request body. We have set up a proxy for our Nest.js app, so that our API lives under the same port as our Angular app.

When a query is sent, the service returns an Observable that our component can subscribe to.

### Managing Loading State

The service handles the loading state, allowing the UI to provide feedback to the user while waiting for a response.

### Error Handling

The service includes error handling mechanisms to deal with any issues that might occur during the communication with the back-end. This ensures that the application remains robust and user-friendly, even when unexpected errors occur.

## The component

Take a look at our [app.component.html](../apps/ai-chat/src/app/app.component.html). You can see that we just have an input field and a box where we display the response. And a loading spinner.

In the next section, we are going to discuss next steps!

---

[previous step](STEP_03.md) | [next step](STEP_05.md)
