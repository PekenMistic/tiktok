"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hearts, Award, Zap, Star, ArrowRight, CheckCircle } from "lucide-react";

import { EnhancedButton } from "@/components/ui/enhanced-button";
import { EnhancedCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/enhanced-card";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import Image from "next/image";

const EnhancedServices = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with artistic vision and professional expertise. From intimate ceremonies to grand celebrations.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      features: ["Full day coverage", "Engagement session", "Online gallery", "Print packages"],
      image: "/images/wedding.svg",
      price: "Starting from $1,500"
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that showcase your personality and style. Perfect for individuals, families, and professionals.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: ["Studio & outdoor", "Wardrobe consultation", "Retouching included", "Multiple poses"],
      image: "/images/portrait.svg",
      price: "Starting from $300"
    },
    {
      title: "Event Coverage",
      description: "Document your corporate events, parties, and special occasions with professional photography services.",
      icon: Award,
      color: "from-purple-500 to-indigo-500",
      features: ["Live event coverage", "Candid moments", "Group photos", "Same-day delivery"],
      image: "/images/event.svg",
      price: "Starting from $800"
    }
  ];

  return (
    <Section background="gradient" size="xl">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-8 shadow-lg"
          >
            <Zap className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Our Services</span>
          </motion.div>

          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 leading-tight">
            What We
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional photography services tailored to capture your most precious moments with artistic vision and technical excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <Grid cols={3} gap="xl" animate stagger>
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <EnhancedCard
                key={service.title}
                variant="elevated"
                hover
                animate
                className="group overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-64 mb-6 -mx-6 -mt-6 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-gray-900">{service.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle size="lg" className="group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <EnhancedButton
                      variant="ghost"
                      size="md"
                      className="flex-1"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Learn More
                    </EnhancedButton>

                    <EnhancedButton
                      variant="gradient"
                      size="md"
                      className="flex-1"
                      icon={<Star className="w-4 h-4" />}
                      iconPosition="left"
                      glow
                    >
                      Book Now
                    </EnhancedButton>
                  </div>
                </CardFooter>
              </EnhancedCard>
            );
          })}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-200/20">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Need a Custom Package?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Every moment is unique. Let&apos;s create a personalized photography package that perfectly fits your vision and budget.
            </p>
            <EnhancedButton
              variant="gradient"
              size="lg"
              icon={<Camera className="w-5 h-5" />}
              iconPosition="left"
              glow
            >
              Get Custom Quote
            </EnhancedButton>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default EnhancedServices;

