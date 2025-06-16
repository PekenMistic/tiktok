import LuxuryBlog from '@/components/luxury/LuxuryBlog';
import { generateMetadata } from "@/lib/seo-config"

export const metadata = generateMetadata({
  title: "Photography Blog - Tips, Trends & Inspiration",
  description: "Discover photography tips, wedding trends, portrait techniques, and behind-the-scenes stories from Madiun Photography. Expert insights for your special moments.",
  url: "/blog",
})

// Blog posts are now managed through the database via LuxuryBlog component

export default function BlogPage() {
  return <LuxuryBlog />;
}
