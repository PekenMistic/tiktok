// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "10-tips-for-perfect-wedding-photos",
    title: "10 Tips for Perfect Wedding Photos",
    date: "2023-05-15",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    slug: "the-art-of-portrait-photography",
    title: "The Art of Portrait Photography",
    date: "2023-06-02",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/placeholder.svg?height=400&width=800",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <Link href="/blog">
        <Button variant="outline">Back to Blog</Button>
      </Link>
    </article>
  )
}