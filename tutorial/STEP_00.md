[previous step](../README.md) | [next step](STEP_01.md)

---

# Chapter 1: Getting started

## Get the code

Clone this repo:

```bash
git@github.com:mandarini/ai-ng-docs-starter.git
```

and install the dependencies:

```bash
npm i
```

## API Keys

You will need API keys for development. The reason is that we will be using Supabase to store our embeddings, and OpenAI to generate them. Then, we will need to post our queries to the OpenAI API to get completions.

### Your .env files

Rename your `.env.sample` files to just `.env`. You can find these files here:

- [apps/ai-api/.env.sample](apps/ai-api/.env.sample)
- [apps/ai-chat/.env.sample](apps/ai-chat/.env.sample)
- [tools/embeddings/.env.sample](tools/embeddings/.env.sample)

### For OpenAI

Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) and create a new key. Then paste it in your `.env` files as `OPENAI_KEY`.

### For Supabase

- Go to [https://supabase.com/](https://supabase.com/) and create a new account if you don't have one.
- Go to [https://supabase.com/dashboard/projects](https://supabase.com/dashboard/projects) and create a new project.
- Copy the API keys and the project URL from the project settings and paste them in your `.env` files in the relevant positions.

---

[previous step](../README.md) | [next step](STEP_01.md)
