"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, Play, ChevronLeft, ChevronRight, Heart, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useDatabase } from "@/lib/database-context"

// Hardcoded testimonials array removed - now using database reviews

export default function ModernTestimonials() {
  const { reviews, loading, error } = useDatabase()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Wedding", "Portrait", "Family", "Corporate", "Maternity"]

  // Filter approved reviews only
  const approvedReviews = reviews.filter(review => review.approved)

  const filteredTestimonials = selectedCategory === "All"
    ? approvedReviews
    : approvedReviews.filter(t => t.serviceType === selectedCategory)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const currentTestimonial = filteredTestimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20">
            Client Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from our amazing clients about their photography experience with us.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/30 mx-auto"></div>
              <p className="mt-4 text-white/70">Loading testimonials...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400">Error loading testimonials: {error}</p>
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70">No testimonials available for this category.</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {currentTestimonial && (
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content Side */}
                <div className="space-y-8">
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-purple-400/30" />
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-100 relative z-10">
                      "                                            {currentTestimonial.content}"
                    </blockquote>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-gray-300">
                      {currentTestimonial.rating || 5}.0 out of 5
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={currentTestimonial.imageUrl || "/placeholder.svg?height=60&width=60"}
                        alt={currentTestimonial.clientName}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-purple-400/30"
                      />
                      {currentTestimonial.featured && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3 text-yellow-900" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">
                        {currentTestimonial.clientName}
                      </h4>
                      <p className="text-purple-300 text-sm">
                        {currentTestimonial.serviceType || 'Client'}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {currentTestimonial.location || 'Location not specified'}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-200 border-purple-400/30">
                    <Camera className="w-3 h-3 mr-1" />
                    {currentTestimonial.serviceType || 'Photography'} Photography
                  </Badge>
                </div>

                {/* Visual Side */}
                <div className="relative">
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10">
                    <Image
                      src="/images/testimonial-placeholder.jpg"
                      alt={`${currentTestimonial.clientName} testimonial`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Video Play Button */}
                    {currentTestimonial.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Button
                          size="lg"
                          className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 ml-1" />
                        </Button>
                      </div>
                    )}

                    {/* Featured Badge */}
                    {currentTestimonial.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-yellow-900">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl" />
                </div>
              </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-white/30 text-white hover:bg-white/10"
              disabled={filteredTestimonials.length <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-400 to-pink-400"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-white/30 text-white hover:bg-white/10"
              disabled={filteredTestimonials.length <= 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Happy Clients", icon: Heart },
            { number: "5.0", label: "Average Rating", icon: Star },
            { number: "98%", label: "Satisfaction Rate", icon: Camera }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
