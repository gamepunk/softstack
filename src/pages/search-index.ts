import { getCollection } from 'astro:content';

export async function GET() {
  const all = await getCollection('software', ({ data }) => !data.draft && data.type === 'gui');
  const index = all.map(e => ({
    name: e.data.name,
    slug: e.id,
    tagline: e.data.tagline,
    category: e.data.category,
    platforms: e.data.platforms,
    price: e.data.price,
    featured: e.data.featured,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' }
  });
}
