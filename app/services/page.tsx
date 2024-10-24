// app/services/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Wedding Photography",
    description: "Capture your special day with our professional wedding photography services.",
    price: "Starting at $1999",
    features: ["Full day coverage", "Online gallery", "Engagement shoot", "Printed album"],
  },
  {
    title: "Portrait Sessions",
    description: "Individual or family portrait sessions to capture your personality and relationships.",
    price: "Starting at $299",
    features: ["1-hour session", "Multiple locations", "Digital downloads", "Print options available"],
  },
  {
    title: "Event Coverage",
    description: "Professional photography for corporate events, parties, and special occasions.",
    price: "Starting at $599",
    features: ["Flexible hours", "Quick turnaround", "Online gallery", "Commercial licensing available"],
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-bold text-lg mb-4">{service.price}</p>
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, i) => (
                  <li  key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}