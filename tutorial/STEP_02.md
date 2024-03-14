[previous step](STEP_01.md) | [next step](STEP_03.md)

---

# Chapter 3: Understanding the embeddings code

_Most of this code is taken from the [Supabase Vector search with Next.js and OpenAI](https://github.com/supabase-community/nextjs-openai-doc-search/blob/main/lib/generate-embeddings.ts) code example._

Let's take a look at the code that generates the embeddings for our documents: [tools/embeddings/src/lib/embeddings.ts](../tools/embeddings/src/lib/embeddings.ts).

What this code does is the following:

- Splits each markdown file into sections, based on the markdown headings.
- Creates an embedding for each section using the text-embedding-ada-002 model from openai.
- Saves the section embedding on Supabase.

## Detailed breakdown

### Processing Markdown

The core of the script is to process markdown files into smaller, searchable sections. This involves reading markdown files, splitting them by headings, and generating a unique slug for each section:

```typescript
export function splitTreeBy(tree: any, predicate: (node: any) => boolean) { ... }
export function processMdForSearch(content: string): ProcessedMd { ... }
```

- The `splitTreeBy` function divides a markdown document into sections based on headings.
- `processMdForSearch` takes markdown content, splits it into sections, and generates metadata (like slugs) for each section.

### Generating Embeddings

For each section, we generate an embedding using OpenAI's `text-embedding-ada-002` model. This embedding is then stored alongside the section content in Supabase:

```typescript
class MarkdownEmbeddingSource extends BaseEmbeddingSource { ... }
export async function generateEmbeddings() { ... }
```

- `MarkdownEmbeddingSource` is a class representing a source of embeddings (in our case, markdown files).
- The `generateEmbeddings` function iterates over all markdown files, generates embeddings for each section, and stores these embeddings in Supabase.

### Storing the results

#### Only updating what's changed

Throughout the process, we perform checks to ensure only updated or new sections are processed, minimizing unnecessary computation.

```typescript
if (existingPage?.checksum === checksum) { ... }
```

We use checksums to identify changes in the documentation, ensuring that we only regenerate embeddings for updated sections.

### Sending data to the database

```typescript
const { error: insertPageSectionError } = await supabaseClient
  .from('nods_page_section')
  .insert({
    page_id: page.id,
    slug,
    heading,
    content,
    token_count: embeddingResponse.usage.total_tokens,
    embedding: responseData.embedding,
  })
  .select()
  .limit(1)
  .single();
```

## Conclusion

By the end of this process, we have a system that can read through our Angular documentation, break it down into manageable sections, generate meaningful embeddings for each section, and store these embeddings for quick retrieval. This setup forms the backbone of our AI-enhanced documentation search, allowing us to provide more relevant and useful search results to our users.

---

[previous step](STEP_01.md) | [next step](STEP_03.md)
