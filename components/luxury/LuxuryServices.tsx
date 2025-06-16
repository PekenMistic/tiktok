"use client";

import React from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { Camera, Heart, Users, Building, Star, ArrowRight, Check } from &apos;lucide-react&apos;;
import { EnhancedButton } from &apos;@/components/ui/enhanced-button&apos;;
import { useDatabase } from &apos;@/lib/database-context&apos;;
import Link from &apos;next/link&apos;;
import Image from &apos;next/image&apos;;

const LuxuryServices = () => {
  const { services, loading, error } = useDatabase();

  const serviceIcons = {
    Wedding: Heart,
    Portrait: Camera,
    Family: Users,
    Corporate: Building,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-luxury-charcoal-50 to-white dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-32 h-8 bg-luxury-charcoal-200 dark:bg-luxury-charcoal-700 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-12 bg-luxury-charcoal-200 dark:bg-luxury-charcoal-700 rounded-2xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-luxury-charcoal-900 rounded-3xl p-8 shadow-luxury animate-pulse">
                <div className="w-full h-48 bg-luxury-charcoal-200 dark:bg-luxury-charcoal-700 rounded-2xl mb-6"></div>
                <div className="w-24 h-6 bg-luxury-charcoal-200 dark:bg-luxury-charcoal-700 rounded-full mb-4"></div>
                <div className="w-full h-4 bg-luxury-charcoal-200 dark:bg-luxury-charcoal-700 rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-luxury-charcoal-200 dark:bg-luxury-charcoal-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gradient-to-br from-luxury-charcoal-50 to-white dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
            <p className="text-red-600 dark:text-red-400">Error loading services: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-charcoal-50 to-white dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-luxury-gold-400/10 to-luxury-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-luxury-teal-400/10 to-luxury-gold-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold-100 dark:bg-luxury-gold-900/20 text-luxury-gold-700 dark:text-luxury-gold-300 rounded-full text-sm font-medium border border-luxury-gold-200 dark:border-luxury-gold-800 mb-6">
            <Camera className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-luxury-charcoal-900 dark:text-luxury-charcoal-100">Luxury Photography</span>
            <br />
            <span className="gradient-text-luxury">Experiences</span>
          </h2>
          
          <p className="text-xl text-luxury-charcoal-600 dark:text-luxury-charcoal-300 max-w-3xl mx-auto leading-relaxed">
            From intimate portraits to grand celebrations, we craft visual stories that capture the essence of your most precious moments with unparalleled artistry and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300">No services available at the moment.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.category as keyof typeof serviceIcons] || Camera;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-luxury-charcoal-900 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-700 border border-luxury-charcoal-200/50 dark:border-luxury-charcoal-800/50 hover:border-luxury-gold-300/50 dark:hover:border-luxury-gold-700/50">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.imageUrl || "/placeholder.svg?height=300&width=400"}
                        alt={service.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal-900/60 via-transparent to-transparent"></div>
                      
                      {/* Service Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-luxury-charcoal-900/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-luxury">
                        <IconComponent className="w-6 h-6 text-luxury-gold-600 dark:text-luxury-gold-400" />
                      </div>
                      
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4 bg-luxury-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-display font-bold text-luxury-charcoal-900 dark:text-luxury-charcoal-100 group-hover:text-luxury-gold-600 dark:group-hover:text-luxury-gold-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-luxury-gold-600 dark:text-luxury-gold-400">
                            {service.priceFrom ? `From $${service.priceFrom}` : &apos;Contact for pricing&apos;}
                          </div>
                          <div className="text-sm text-luxury-charcoal-500 dark:text-luxury-charcoal-400">
                            {service.duration || &apos;Varies&apos;}
                          </div>
                        </div>
                      </div>

                      <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300 mb-6 leading-relaxed">
                        {service.description || &apos;Professional photography service tailored to your needs.&apos;}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {(service.features || []).slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-gradient-to-br from-luxury-gold-500 to-luxury-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-luxury-charcoal-600 dark:text-luxury-charcoal-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        <Link href="/book">
                          <EnhancedButton
                            className="w-full bg-gradient-to-r from-luxury-charcoal-900 to-luxury-charcoal-800 hover:from-luxury-charcoal-800 hover:to-luxury-charcoal-700 text-white shadow-luxury hover:shadow-glow transition-all duration-300"
                            animate
                          >
                            Book Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </EnhancedButton>
                        </Link>
                        <Link href={`/services#${service.id}`}>
                          <EnhancedButton
                            variant="outline"
                            className="w-full border-luxury-charcoal-300 dark:border-luxury-charcoal-700 text-luxury-charcoal-700 dark:text-luxury-charcoal-300 hover:bg-luxury-charcoal-50 dark:hover:bg-luxury-charcoal-800"
                          >
                            Learn More
                          </EnhancedButton>
                        </Link>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-500/5 to-luxury-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-luxury-gold-50 to-luxury-teal-50 dark:from-luxury-gold-900/10 dark:to-luxury-teal-900/10 rounded-3xl p-8 border border-luxury-gold-200/50 dark:border-luxury-gold-800/50">
            <h3 className="text-2xl font-display font-bold text-luxury-charcoal-900 dark:text-luxury-charcoal-100 mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300 mb-6 max-w-2xl mx-auto">
              Every story is unique. Let&apos;s create a personalized photography experience that perfectly captures your vision and exceeds your expectations.
            </p>
            <Link href="/contact">
              <EnhancedButton
                variant="accent"
                size="lg"
                className="bg-gradient-to-r from-luxury-gold-500 to-luxury-teal-500 hover:from-luxury-gold-600 hover:to-luxury-teal-600 text-white shadow-luxury-lg hover:shadow-glow-lg px-8 py-4"
                animate
                glow
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </EnhancedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryServices;
