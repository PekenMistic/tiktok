import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
//import AnimatedSection from "@/components/AnimatedSection"

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
    <main className="flex flex-col w-full">
      {/* Hero Section - Full height and width */}
      <section className="relative w-full min-h-[calc(100vh-4rem)]">

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pt-16">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Capture Your Moments with Elegance
          </h1>
          <p className="max-w-[700px] mt-4 text-gray-200 md:text-xl">
            Professional photography services for weddings, portraits, events, and more.
          </p>
          <div className="flex gap-4 mt-8">
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
      </section>

      {/* Services Section */}
      <section className="w-full py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Wedding Photography", "Portrait Sessions", "Event Coverage"].map((service) => (
              <Card key={service} className="transition-transform hover:-translate-y-1">
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

      {/* Testimonials Section */}
      <section className="w-full py-24 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
            Testimonials
          </h2>
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  )
}
