"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Heart, Star, Play, Sparkles, Award, Users } from "lucide-react";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { Meteors } from "@/components/aceternity/Meteors";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Container } from "@/components/layout/Container";

const EnhancedHero = () => {
  const words = "Capture Your Precious Moments with Artistic Vision and Professional Excellence";

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Heart },
    { number: "1000+", label: "Photos Taken", icon: Camera },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Events Covered", icon: Users },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <Meteors number={30} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-xl"
        >
          <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
          <span className="text-white font-medium">Professional Photography Services</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-6xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight"
        >
          Capture Your
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Precious Moments
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 text-gray-300">
            with Elegance
          </span>
        </motion.h1>

        {/* Subtitle with Text Generate Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mb-12"
        >
          <TextGenerateEffect
            words={words}
            className="text-xl text-gray-200 md:text-2xl lg:text-3xl leading-relaxed"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mb-20"
        >
          <Link href="/portfolio">
            <EnhancedButton
              variant="gradient"
              size="xl"
              icon={<Star className="w-6 h-6" />}
              iconPosition="left"
              glow
              animate
            >
              View Our Portfolio
            </EnhancedButton>
          </Link>

          <Link href="/contact">
            <EnhancedButton
              variant="glass"
              size="xl"
              icon={<Heart className="w-6 h-6" />}
              iconPosition="left"
              animate
            >
              Book Your Session
            </EnhancedButton>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Play className="w-6 h-6 ml-1" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-white"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default EnhancedHero;
