// app/blog/page.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Hero from "@/components/Hero"
import Search from "@/components/Search"

const blogPosts = [
  {
    slug: "10-tips-for-perfect-wedding-photos",
    title: "10 Tips for Perfect Wedding Photos",
    description: "Learn how to capture the most beautiful moments on your special day.",
    date: "2023-05-15",
  },
  {
    slug: "the-art-of-portrait-photography",
    title: "The Art of Portrait Photography",
    description: "Discover techniques to bring out the best in your portrait subjects.",
    date: "2023-06-02",
  },
  {
    slug: "mastering-low-light-photography",
    title: "Mastering Low Light Photography",
    description: "Tips and tricks for capturing stunning images in challenging lighting conditions.",
    date: "2023-06-20",
  },
  {
    slug: "essential-gear-for-professional-photographers",
    title: "Essential Gear for Professional Photographers",
    description: "A comprehensive guide to the equipment every pro photographer needs.",
    date: "2023-07-08",
  },
]

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.description.toLowerCase().includes(lowercaseQuery)
    )
    setFilteredPosts(filtered)
  }

  return (
    <div>
      <Hero
        title="About Elegant Captures"
        subtitle="Discover the passion and expertise behind our lens"
        ctaText="View Our Portfolio"
        ctaLink="/portfolio"
        backgroundImage="/images/photo.jpg?height=800&width=1920"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Search onSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center mt-8">No blog posts found. Try a different search term.</p>
        )}
      </div>
    </div>
  )
}