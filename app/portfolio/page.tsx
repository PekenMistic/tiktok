// app/portfolio/page.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid, List, Heart, Share2, Download, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Weddings", "Portraits", "Events", "Corporate", "Fashion"]

const portfolioItems = [
  {
    id: 1,
    category: "Weddings",
    src: "/female.jpg",
    title: "Elegant Garden Wedding",
    description: "A beautiful outdoor ceremony captured in golden hour light",
    date: "2024-01-15",
    featured: true,
    likes: 24,
    tags: ["outdoor", "golden-hour", "romantic"]
  },
  {
    id: 2,
    category: "Portraits",
    src: "/avatar.jpg",
    title: "Corporate Executive Portrait",
    description: "Professional headshot with dramatic lighting",
    date: "2024-01-10",
    featured: false,
    likes: 18,
    tags: ["professional", "studio", "business"]
  },
  {
    id: 3,
    category: "Events",
    src: "/placeholder.svg?height=400&width=600",
    title: "Annual Charity Gala",
    description: "Capturing the elegance and emotion of a charity fundraiser",
    date: "2024-01-08",
    featured: true,
    likes: 32,
    tags: ["event", "formal", "charity"]
  },
  {
    id: 4,
    category: "Weddings",
    src: "/placeholder.svg?height=400&width=600",
    title: "Beach Wedding Ceremony",
    description: "Intimate beachside vows with ocean backdrop",
    date: "2024-01-05",
    featured: false,
    likes: 45,
    tags: ["beach", "intimate", "sunset"]
  },
  {
    id: 5,
    category: "Portraits",
    src: "/placeholder.svg?height=400&width=600",
    title: "Family Portrait Session",
    description: "Multi-generational family capturing love and connection",
    date: "2024-01-03",
    featured: true,
    likes: 28,
    tags: ["family", "generations", "love"]
  },
  {
    id: 6,
    category: "Corporate",
    src: "/placeholder.svg?height=400&width=600",
    title: "Tech Conference 2024",
    description: "Dynamic event photography capturing innovation",
    date: "2024-01-01",
    featured: false,
    likes: 15,
    tags: ["tech", "conference", "innovation"]
  },
  {
    id: 7,
    category: "Fashion",
    src: "/placeholder.svg?height=400&width=600",
    title: "Urban Fashion Shoot",
    description: "Street style photography with urban backdrop",
    date: "2023-12-28",
    featured: true,
    likes: 38,
    tags: ["fashion", "urban", "street-style"]
  },
  {
    id: 8,
    category: "Weddings",
    src: "/placeholder.svg?height=400&width=600",
    title: "Rustic Barn Wedding",
    description: "Country charm with vintage elegance",
    date: "2023-12-25",
    featured: false,
    likes: 22,
    tags: ["rustic", "barn", "vintage"]
  },
  {
    id: 9,
    category: "Events",
    src: "/placeholder.svg?height=400&width=600",
    title: "New Year's Eve Celebration",
    description: "Capturing the excitement and joy of celebration",
    date: "2023-12-31",
    featured: false,
    likes: 19,
    tags: ["celebration", "party", "joy"]
  }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [sortBy] = useState<"date" | "likes" | "title">("date")

  useEffect(() => {
    filterAndSortItems()
  }, [selectedCategory, searchQuery, showFeaturedOnly, sortBy])

  const filterAndSortItems = () => {
    const filtered = portfolioItems.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesFeatured = !showFeaturedOnly || item.featured

      return matchesCategory && matchesSearch && matchesFeatured
    })

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "likes":
          return b.likes - a.likes
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    setFilteredItems(filtered)
  }

  const handleImageSelect = (index: number) => {
    setSelectedImage(index)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredItems.length - 1)
    } else {
      setSelectedImage(selectedImage < filteredItems.length - 1 ? selectedImage + 1 : 0)
    }
  }

  const toggleLike = (itemId: number) => {
    // In a real app, this would update the backend
    console.log(`Liked item ${itemId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-charcoal-50 to-white dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-luxury-charcoal-900 via-luxury-charcoal-800 to-luxury-charcoal-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-luxury-gold-400/20 to-luxury-teal-400/20 rounded-full blur-3xl animate-luxury-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-luxury-teal-400/20 to-luxury-gold-400/20 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold-100/10 text-luxury-gold-300 rounded-full text-sm font-medium border border-luxury-gold-400/20 mb-6">
            <Search className="w-4 h-4" />
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Visual <span className="gradient-text-luxury">Masterpieces</span>
          </h1>
          <p className="text-xl md:text-2xl text-luxury-charcoal-200 max-w-3xl mx-auto">
            Explore our collection of captivating moments and artistic vision that tells your unique story
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>

              <Button
                variant={showFeaturedOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              >
                <Filter className="w-4 h-4 mr-1" />
                Featured
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{filteredItems.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Images</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredItems.filter(item => item.featured).length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Featured</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{new Set(filteredItems.map(item => item.category)).size}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{filteredItems.reduce((sum, item) => sum + item.likes, 0)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Likes</div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square cursor-pointer" onClick={() => handleImageSelect(index)}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.featured && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {item.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(item.id)
                            }}
                            className="text-white hover:text-red-400"
                          >
                            <Heart className="w-4 h-4" />
                            <span className="ml-1 text-xs">{item.likes}</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => e.stopPropagation()}
                            className="text-white hover:text-blue-400"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0 cursor-pointer" onClick={() => handleImageSelect(index)}>
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        {item.featured && (
                          <Badge className="bg-yellow-500 hover:bg-yellow-600">Featured</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="outline">{item.category}</Badge>
                          {item.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{item.date}</span>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold mb-2">No images found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Image Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] p-0">
            {selectedImage !== null && filteredItems[selectedImage] && (
              <div className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={filteredItems[selectedImage].src}
                    alt={filteredItems[selectedImage].title}
                    fill
                    className="object-contain"
                  />

                  {/* Navigation Buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Image Info */}
                <div className="p-6 bg-white dark:bg-gray-800">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{filteredItems[selectedImage].title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{filteredItems[selectedImage].description}</p>
                      <div className="flex gap-2 mb-3">
                        <Badge>{filteredItems[selectedImage].category}</Badge>
                        {filteredItems[selectedImage].tags.map(tag => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4 mr-1" />
                        {filteredItems[selectedImage].likes}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedImage + 1} of {filteredItems.length} • {filteredItems[selectedImage].date}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
