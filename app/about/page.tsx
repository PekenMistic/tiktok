"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Camera, Award, Users, Heart, Star, CheckCircle, Sparkles } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Grid } from "@/components/layout/Grid"
import { EnhancedCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/enhanced-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import SimpleHero from "@/components/SimpleHero"

export default function AboutPage() {
  const expertise = [
    {
      title: "Wedding Photography",
      description: "Capturing love stories with elegance and emotion",
      icon: Heart,
      color: "from-luxury-gold-500 to-luxury-teal-500"
    },
    {
      title: "Portrait Photography",
      description: "Professional portraits that showcase personality",
      icon: Users,
      color: "from-luxury-teal-500 to-luxury-gold-500"
    },
    {
      title: "Event Photography",
      description: "Documenting special occasions and celebrations",
      icon: Camera,
      color: "from-luxury-charcoal-700 to-luxury-charcoal-600"
    },
  ]

  const achievements = [
    { number: "500+", label: "Happy Clients", icon: Heart },
    { number: "1000+", label: "Photos Delivered", icon: Camera },
    { number: "50+", label: "Events Covered", icon: Award },
    { number: "5+", label: "Years Experience", icon: Star },
  ]

  const values = [
    "Professional Excellence",
    "Creative Vision",
    "Client Satisfaction",
    "Attention to Detail",
    "Timely Delivery",
    "Affordable Pricing"
  ]

  return (
    <div className="min-h-screen">
      <SimpleHero
        title="About Madiun Photography"
        subtitle="Discover the passion and expertise behind our lens"
        ctaText="View Our Portfolio"
        ctaLink="/portfolio"
        backgroundImage="/images/photo.jpg"
      />

      {/* Our Story Section */}
      <Section background="white" size="xl">
        <Container>
          <Grid cols={2} gap="xl" animate>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/camera.jpg"
                  alt="Professional Photographer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">Professional Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-luxury-gold-100 dark:bg-luxury-gold-900/30 rounded-full mb-4">
                  <Camera className="w-4 h-4 mr-2 text-luxury-gold-600 dark:text-luxury-gold-400" />
                  <span className="text-luxury-gold-600 dark:text-luxury-gold-400 text-sm font-medium">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-charcoal-900 dark:text-white">
                  Passionate About
                  <span className="block gradient-text-luxury">
                    Perfect Moments
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-luxury-charcoal-600 dark:text-luxury-charcoal-300 leading-relaxed">
                <p>
                  Welcome to Madiun Photography, where your precious moments are captured with unmatched expertise and dedication. We are a team of professional photographers experienced in immortalizing various special moments in your life.
                </p>
                <p>
                  Our skilled photography team specializes in various photography styles, from timeless wedding portraits to dynamic event coverage. We pride ourselves on our attention to detail, creativity, and ability to make our clients feel comfortable in front of the camera.
                </p>
                <p>
                  Let us help you capture your memories in stunning high-quality photos that you will cherish for a lifetime.
                </p>
              </div>

              <div className="mt-8">
                <EnhancedButton
                  variant="gradient"
                  size="lg"
                  icon={<Star className="w-5 h-5" />}
                  iconPosition="left"
                >
                  View Our Work
                </EnhancedButton>
              </div>
            </motion.div>
          </Grid>
        </Container>
      </Section>

      {/* Achievements Section */}
      <Section background="gradient" size="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <Grid cols={4} gap="lg" animate stagger>
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <EnhancedCard
                  key={achievement.label}
                  variant="glass"
                  hover
                  animate
                  className="text-center"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold-500 to-luxury-teal-500 rounded-full flex items-center justify-center shadow-luxury">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </EnhancedCard>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Expertise Section */}
      <Section background="white" size="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized photography services tailored to your unique needs
            </p>
          </motion.div>

          <Grid cols={3} gap="xl" animate stagger>
            {expertise.map((item) => {
              const IconComponent = item.icon;
              return (
                <EnhancedCard
                  key={item.title}
                  variant="elevated"
                  hover
                  animate
                  className="group text-center"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle size="lg" className="group-hover:text-purple-600 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </EnhancedCard>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Values Section */}
      <Section background="dark" size="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our Values
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <Grid cols={3} gap="lg" animate stagger>
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-white"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg font-medium">{value}</span>
              </motion.div>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <EnhancedButton
              variant="gradient"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
              iconPosition="left"
              glow
            >
              Start Your Journey
            </EnhancedButton>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
