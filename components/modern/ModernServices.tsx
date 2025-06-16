"use client"

import { motion } from "framer-motion"
import { Camera, Hearts, Building, Baby, Sparkles, ArrowRight, Check, Star } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useDatabase } from "@/lib/database-context"

const services = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description: "Capture your special day with our comprehensive wedding photography packages",
    features: ["Full day coverage", "Engagement session", "Online gallery", "Print release"],
    price: "From $2,500",
    duration: "8-12 hours",
    image: "/images/wedding.svg",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    popular: true
  },
  {
    id: "portrait",
    title: "Portrait Sessions",
    description: "Professional portraits that showcase your personality and style",
    features: ["Studio or location", "Wardrobe consultation", "Retouched images", "Print options"],
    price: "From $350",
    duration: "1-2 hours",
    image: "/images/portrait.svg",
    icon: Camera,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    popular: false
  },
  {
    id: "family",
    title: "Family Photography",
    description: "Beautiful family portraits that capture your loved ones together",
    features: ["Multiple locations", "All family members", "Lifestyle shots", "Digital gallery"],
    price: "From $450",
    duration: "2-3 hours",
    image: "/placeholder.svg",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    popular: false
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional event photography for your business occasions",
    features: ["Event coverage", "Team photos", "Branding focus", "Quick delivery"],
    price: "From $800",
    duration: "4-8 hours",
    image: "/images/event.svg",
    icon: Building,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    popular: false
  },
  {
    id: "maternity",
    title: "Maternity & Newborn",
    description: "Tender moments captured during this special time in your life",
    features: ["Maternity session", "Newborn safety", "Props included", "Family shots"],
    price: "From $550",
    duration: "2-4 hours",
    image: "/placeholder.svg",
    icon: Baby,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    popular: false
  },
  {
    id: "special",
    title: "Special Occasions",
    description: "Birthdays, anniversaries, and other milestone celebrations",
    features: ["Custom planning", "Themed shoots", "Multiple outfits", "Creative concepts"],
    price: "From $400",
    duration: "2-3 hours",
    image: "/placeholder.svg",
    icon: Sparkles,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    popular: false
  }
]

export default function ModernServices() {
  const { services } = useDatabase()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From intimate portraits to grand celebrations, we offer comprehensive photography services 
            tailored to capture your most precious moments with artistic excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 dark:text-red-400">Error loading services: {error}</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-300">No services available at the moment.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
            const IconComponent = Camera // Default icon since service.icon doesn&apos;t exist
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-soft hover:shadow-large transition-all duration-500 border border-gray-100 dark:border-gray-700 ${
                  service.popular ? &apos;ring-2 ring-purple-500/20&apos; : &apos;&apos;
                }`}>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10" />
                    <Image
                      src={service.imageUrl || "/placeholder.svg?height=200&width=400"}
                      alt={service.name}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {service.priceFrom ? `From $${service.priceFrom}` : &apos;Contact for pricing&apos;}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {service.duration || &apos;Varies&apos;}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description || &apos;Professional photography service tailored to your needs.&apos;}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {(service.features || []).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Link href="/book" className="flex-1">
                        <EnhancedButton
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300"
                          animate
                        >
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </EnhancedButton>
                      </Link>
                      <Link href={`/services#${service.id}`}>
                        <EnhancedButton
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          Learn More
                        </EnhancedButton>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
                </div>
              </motion.div>
            )
          })}
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Every event is unique. Let&apos;s discuss your specific needs and create a custom photography package that perfectly fits your vision and budget.
            </p>
            <Link href="/contact">
              <EnhancedButton
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                animate
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </EnhancedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

