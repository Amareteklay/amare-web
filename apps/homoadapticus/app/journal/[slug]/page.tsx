import { notFound } from "next/navigation";
import { MDXComponents } from "@amare-web/ui/components/MDXComponents";

interface PageProps {
  params: { slug: string };
}

async function getContent(slug: string) {
  try {
    const mod = await import(`../../content/${slug}.mdx`);
    return mod;
  } catch {
    return null;
  }
}

export default async function JournalPage({ params }: PageProps) {
  const content = await getContent(params.slug);

  if (!content) {
    notFound();
  }

  const { default: Content, metadata } = content;

  return (
    <article>
      {metadata?.title && <h1>{metadata.title}</h1>}
      <Content components={MDXComponents} />
    </article>
  );
}
