"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/aceternity/InfiniteMovingCards";
import { Star, Quote } from "lucide-react";
import { useDatabase } from "@/lib/database-context";

const EnhancedTestimonials = () => {
  const { reviews } = useDatabase();

  // Filter approved reviews for testimonials
  const approvedReviews = reviews.filter(review => review.approved);

  // Convert database reviews to testimonials format
  const databaseTestimonials = approvedReviews.map(review => ({
    quote: review.content,
    name: review.clientName,
    title: `${review.serviceType} Client`,
  }));

  // Fallback testimonials if no database data
  const fallbackTestimonials = [
    {
      quote: "Madiun Photography made our wedding day absolutely magical. Every moment was captured with such artistry and emotion. The photos tell our love story perfectly!",
      name: "Sarah & Michael Johnson",
      title: "Wedding Clients",
    },
    {
      quote: "Professional, creative, and incredibly talented. Our corporate event photos exceeded all expectations. The team was unobtrusive yet captured every important moment.",
      name: "David Chen",
      title: "Corporate Event Manager",
    },
    {
      quote: "The family portrait session was amazing! They made our kids feel comfortable and the results are stunning. We'll treasure these photos forever.",
      name: "Emily Rodriguez",
      title: "Family Portrait Client",
    },
  ];

  const testimonials = databaseTestimonials.length > 0 ? databaseTestimonials : fallbackTestimonials;

  const clientLogos = [
    { name: "Elegant Venues", logo: "🏛️" },
    { name: "Dream Weddings", logo: "💒" },
    { name: "Corporate Events Co", logo: "🏢" },
    { name: "Family First", logo: "👨‍👩‍👧‍👦" },
    { name: "Portrait Studio", logo: "📸" },
    { name: "Event Planners", logo: "🎉" },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Quote className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4 text-white">
            What Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our amazing clients have to say about their experience with us.
          </p>
        </motion.div>

        {/* Star Rating Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-gray-300">from 200+ reviews</span>
          </div>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="mb-8"
          />
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-8">Trusted by Amazing Clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-2xl">{client.logo}</span>
                <span className="text-sm font-medium">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your Story?</h3>
            <p className="text-gray-300 mb-6">Join hundreds of satisfied clients and let us capture your precious moments.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Book Your Session Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;

