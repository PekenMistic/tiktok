// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import AnimatedSection from "@/components/AnimatedSection"

export default function Home() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Newlywed",
      content: "Elegant Captures made our wedding day unforgettable. The photos are simply stunning!",
    },
    {
      name: "Jane Smith",
      role: "Corporate Event Planner",
      content: "Professional, creative, and reliable. They captured our event perfectly.",
    },
    {
      name: "Alex Johnson",
      role: "Family Portrait Client",
      content: "Amazing attention to detail. Our family portraits are treasured memories now.",
    },
    {
      name: "John Doe",
      role: "Newlywed",
      content: "Elegant Captures made our wedding day unforgettable. The photos are simply stunning!",
    },
    {
      name: "Jane Smith",
      role: "Corporate Event Planner",
      content: "Professional, creative, and reliable. They captured our event perfectly.",
    },
    {
      name: "Alex Johnson",
      role: "Family Portrait Client",
      content: "Amazing attention to detail. Our family portraits are treasured memories now.",
    },
  ]

  const faqs = [
    {
      question: "What types of photography do you offer?",
      answer: "We offer a wide range of photography services including weddings, portraits, corporate events, and more. Check our Services page for a full list.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-6 months in advance for weddings and 2-4 weeks for other sessions. However, feel free to contact us for last-minute availability.",
    },
    {
      question: "Do you offer photo printing services?",
      answer: "Yes, we offer high-quality photo printing services. You can order prints directly through your online gallery after your session.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans can change. Please refer to our Terms & Conditions page for detailed information about our cancellation and rescheduling policies.",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AnimatedSection>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative rounded-full top-4">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-lg overflow-hidden">
            <Image
              src="/avatar.jpg" // Pastikan untuk mengganti dengan path gambar Anda
              alt="Photography background"
              layout="fill"
              objectFit="cover"
              className="brightness-50" // Ini akan membuat gambar sedikit lebih gelap
              priority
            />
          </div>
          
          {/* Overlay gradient untuk memastikan teks tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-black/30 z-10" />

          {/* Content */}
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Capture Your Moments with Elegance
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Professional photography services for weddings, portraits, events, and more.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/portfolio">
                  <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
                    View Portfolio
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Wedding Photography", "Portrait Sessions", "Event Coverage"].map((service) => (
                <Card key={service}>
                  <CardHeader>
                    <CardTitle>{service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Professional {service.toLowerCase()} tailored to your needs.</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
            <Testimonials testimonials={testimonials} />
          </div>
        </section>
      </AnimatedSection>
      

      <AnimatedSection>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <FAQ faqs={faqs} />
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}