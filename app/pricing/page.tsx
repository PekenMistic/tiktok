// app/pricing/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SimpleHero from "@/components/SimpleHero"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: "$499",
    description: "Perfect for small events and portrait sessions",
    features: [
      "2-hour photo session",
      "50 edited digital photos",
      "Online gallery",
      "Print release",
    ],
  },
  {
    name: "Standard",
    price: "$999",
    description: "Ideal for weddings and larger events",
    features: [
      "6-hour photo session",
      "200 edited digital photos",
      "Online gallery",
      "Print release",
      "One 11x14 print",
    ],
  },
  {
    name: "Premium",
    price: "$1999",
    description: "Our most comprehensive package",
    features: [
      "Full-day photo session",
      "500 edited digital photos",
      "Online gallery",
      "Print release",
      "Two 16x20 prints",
      "Custom photo album",
    ],
  },
]

export default function PricingPage() {
  return (
    <div>
      <SimpleHero
        title="Our Pricing"
        subtitle="Choose the perfect package for your photography needs"
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="/images/photo.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
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
    </div>
  )
}
