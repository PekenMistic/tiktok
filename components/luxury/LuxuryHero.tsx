"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Users, Star, ArrowRight, Play } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import Link from 'next/link';
import Image from 'next/image';

const LuxuryHero = () => {
  const stats = [
    { icon: Camera, value: "500+", label: "Captured Moments" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Star, value: "5.0", label: "Average Rating" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-charcoal-50 via-white to-luxury-gold-50 dark:from-luxury-charcoal-900 dark:via-luxury-charcoal-800 dark:to-luxury-charcoal-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-luxury-gold-400/20 to-luxury-teal-400/20 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-luxury-teal-400/20 to-luxury-gold-400/20 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-luxury-charcoal-400/10 to-luxury-gold-400/10 rounded-full blur-2xl animate-luxury-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(28,25,23,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(28,25,23,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold-100 dark:bg-luxury-gold-900/20 text-luxury-gold-700 dark:text-luxury-gold-300 rounded-full text-sm font-medium border border-luxury-gold-200 dark:border-luxury-gold-800"
            >
              <Award className="w-4 h-4" />
              Award-Winning Photography Studio
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-luxury-charcoal-900 dark:text-luxury-charcoal-100">Capturing</span>
                <br />
                <span className="gradient-text-luxury">Timeless</span>
                <br />
                <span className="text-luxury-charcoal-900 dark:text-luxury-charcoal-100">Moments</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-luxury-charcoal-600 dark:text-luxury-charcoal-300 leading-relaxed max-w-2xl">
                Transform your precious memories into stunning visual stories with our luxury photography services. Every frame tells a story, every moment becomes eternal.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/book">
                <EnhancedButton
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-luxury-charcoal-900 to-luxury-charcoal-800 hover:from-luxury-charcoal-800 hover:to-luxury-charcoal-700 text-white shadow-luxury-lg hover:shadow-glow transition-all duration-500 px-8 py-4 text-lg font-semibold"
                  icon={<Camera className="w-5 h-5" />}
                  animate
                  glow
                >
                  Book Your Session
                </EnhancedButton>
              </Link>
              
              <Link href="/portfolio">
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  className="border-2 border-luxury-charcoal-300 dark:border-luxury-charcoal-700 text-luxury-charcoal-700 dark:text-luxury-charcoal-300 hover:bg-luxury-charcoal-50 dark:hover:bg-luxury-charcoal-800 px-8 py-4 text-lg font-semibold"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  animate
                >
                  View Portfolio
                </EnhancedButton>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold-100 to-luxury-teal-100 dark:from-luxury-gold-900/20 dark:to-luxury-teal-900/20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-luxury">
                    <stat.icon className="w-6 h-6 text-luxury-gold-600 dark:text-luxury-gold-400" />
                  </div>
                  <div className="text-2xl font-bold text-luxury-charcoal-900 dark:text-luxury-charcoal-100">{stat.value}</div>
                  <div className="text-sm text-luxury-charcoal-600 dark:text-luxury-charcoal-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional Photography"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal-900/20 via-transparent to-transparent"></div>
                
                {/* Play Button for Video */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-luxury-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-110 group">
                    <Play className="w-8 h-8 text-luxury-charcoal-900 ml-1 group-hover:text-luxury-gold-600 transition-colors duration-300" />
                  </button>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-luxury-charcoal-900 rounded-2xl p-4 shadow-luxury border border-luxury-charcoal-200/50 dark:border-luxury-charcoal-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-luxury-charcoal-700 dark:text-luxury-charcoal-300">Available Today</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-luxury-charcoal-900 rounded-2xl p-4 shadow-luxury border border-luxury-charcoal-200/50 dark:border-luxury-charcoal-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-luxury-gold-400 to-luxury-teal-400 rounded-full border-2 border-white dark:border-luxury-charcoal-900"></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-luxury-charcoal-900 dark:text-luxury-charcoal-100">1000+ Clients</div>
                    <div className="text-xs text-luxury-charcoal-600 dark:text-luxury-charcoal-400">Trust Our Work</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-luxury-charcoal-600 dark:text-luxury-charcoal-400 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-luxury-charcoal-300 dark:border-luxury-charcoal-700 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-luxury-gold-500 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LuxuryHero;
