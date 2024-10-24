// components/Testimonials.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  content: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{testimonial.name}</CardTitle>
            <CardDescription>{testimonial.role}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{testimonial.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}