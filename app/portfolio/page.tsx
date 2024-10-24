// app/portfolio/page.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Hero from "@/components/Hero"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Search from "@/components/Search"

const categories = ["All", "Weddings", "Portraits", "Events"]

const portfolioItems = [
  { category: "Weddings", src: "/female.jpg?height=400&width=600", title: "Sarah " },
  { category: "Portraits", src: "/placeholder.svg?height=400&width=600", title: "Corporate Headshot - Jane Doe" },
  { category: "Events", src: "/avatar.jpg?height=400&width=600", title: "Annual Charity Gala" },
  { category: "Weddings", src: "/placeholder.svg?height=400&width=600", title: "Beach Wedding Ceremony" },
  { category: "Portraits", src: "/placeholder.svg?height=400&width=600", title: "Family Portrait - The Smiths" },
  { category: "Events", src: "/placeholder.svg?height=400&width=600", title: "Tech Conference 2023" },
  { category: "Weddings", src: "/placeholder.svg?height=400&width=600", title: "Rustic Barn Wedding" },
  { category: "Portraits", src: "/placeholder.svg?height=400&width=600", title: "Graduation Photoshoot" },
  { category: "Events", src: "/placeholder.svg?height=400&width=600", title: "New Year's Eve Party" },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterItems(category)
  }

  const filterItems = (category: string, searchQuery: string = "") => {
    const lowercaseQuery = searchQuery.toLowerCase()
    const filtered = portfolioItems.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        item.title.toLowerCase().includes(lowercaseQuery)
    )
    setFilteredItems(filtered)
  }

  const handleSearch = (query: string) => {
    filterItems(selectedCategory, query)
  }

  return (
    <div>
      <Hero
        title="Our Portfolio"
        subtitle="Explore our collection of captivating moments"
        ctaText="View Our Portfolio"
        ctaLink="/contact"
        backgroundImage="/images/photo.jpg?height=800&width=1920"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Search onSearch={handleSearch} />
        </div>
        <Tabs defaultValue="All" className="w-full" onValueChange={handleCategoryChange}>
          <TabsList className="grid w-full grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div className="relative aspect-[3/2] cursor-pointer group">
                      <Image
                        src={item.src}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                        <p className="text-white text-center p-4">{item.title}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />
                    <p className="text-center mt-4 text-lg font-semibold">{item.title}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        {filteredItems.length === 0 && (
          <p className="text-center mt-8">No portfolio items found. Try a different search term or category.</p>
        )}
      </div>
    </div>
  )
}