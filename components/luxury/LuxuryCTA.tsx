"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Star, Heart, Award, Users } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import Link from 'next/link';
import Image from 'next/image';
import { useDatabase } from '@/lib/database-context';

const LuxuryCTA = () => {
  const { stats } = useDatabase();

  // Default stats if no data from database
  const displayStats = [
    {
      icon: Camera,
      value: stats?.totalPortfolioItems ? `${stats.totalPortfolioItems}+` : "500+",
      label: "Moments Captured"
    },
    {
      icon: Award,
      value: "50+",
      label: "Awards Won"
    },
    {
      icon: Users,
      value: stats?.totalBookings ? `${stats.totalBookings}+` : "1000+",
      label: "Happy Clients"
    },
    {
      icon: Star,
      value: stats?.averageRating ? stats.averageRating.toFixed(1) : "5.0",
      label: "Average Rating"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-charcoal-900 via-luxury-charcoal-800 to-luxury-charcoal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-luxury-gold-400/20 to-luxury-teal-400/20 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-luxury-teal-400/20 to-luxury-gold-400/20 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-luxury-gold-400/10 to-luxury-teal-400/10 rounded-full blur-2xl animate-luxury-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(243,167,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(243,167,63,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold-100/10 text-luxury-gold-300 rounded-full text-sm font-medium border border-luxury-gold-400/20"
            >
              <Heart className="w-4 h-4" />
              Ready to Create Magic?
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                <span className="text-white">Let&apos;s Capture Your</span>
                <br />
                <span className="gradient-text-luxury">Perfect Moment</span>
              </h2>
              
              <p className="text-xl text-luxury-charcoal-300 leading-relaxed max-w-2xl">
                Ready to transform your precious memories into stunning visual stories? Our luxury photography services are designed to exceed your expectations and create timeless masterpieces.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {[
                "Professional consultation and planning",
                "High-end equipment and artistic expertise",
                "Fast delivery with premium editing",
                "Lifetime access to your digital gallery"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-luxury-gold-500 to-luxury-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-luxury-charcoal-200">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/book">
                <EnhancedButton
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-luxury-gold-500 to-luxury-teal-500 hover:from-luxury-gold-600 hover:to-luxury-teal-600 text-white shadow-luxury-lg hover:shadow-glow-lg transition-all duration-500 px-8 py-4 text-lg font-semibold"
                  icon={<Camera className="w-5 h-5" />}
                  animate
                  glow
                >
                  Book Your Session
                </EnhancedButton>
              </Link>
              
              <Link href="/contact">
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  className="border-2 border-luxury-charcoal-600 text-luxury-charcoal-300 hover:bg-luxury-gold-500/10 hover:border-luxury-gold-400/50 px-8 py-4 text-lg font-semibold"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  animate
                >
                  Get Custom Quote
                </EnhancedButton>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {displayStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold-100/10 to-luxury-teal-100/10 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-luxury-gold-400/20">
                    <stat.icon className="w-6 h-6 text-luxury-gold-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-luxury-charcoal-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Large Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-2 relative rounded-3xl overflow-hidden shadow-luxury-lg"
              >
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Professional Photography"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal-900/40 via-transparent to-transparent"></div>
              </motion.div>

              {/* Small Images */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-luxury"
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Wedding Photography"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal-900/40 via-transparent to-transparent"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative rounded-3xl overflow-hidden shadow-luxury"
              >
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Portrait Photography"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal-900/40 via-transparent to-transparent"></div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-luxury-charcoal-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-luxury border border-luxury-gold-400/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">Available Today</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -bottom-6 -left-6 bg-luxury-charcoal-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-luxury border border-luxury-gold-400/20"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-luxury-gold-400 to-luxury-teal-400 rounded-full border-2 border-luxury-charcoal-800"></div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">1000+ Clients</div>
                  <div className="text-xs text-luxury-charcoal-400">Trust Our Work</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-luxury-gold-500/20 to-luxury-teal-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-luxury-teal-500/20 to-luxury-gold-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCTA;

