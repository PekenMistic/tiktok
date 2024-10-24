import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "@/components/Hero"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Elegant Captures"
        subtitle="Discover the passion and expertise behind our lens"
        ctaText="View Our Portfolio"
        ctaLink="/portfolio"
        backgroundImage="/images/photo.jpg?height=800&width=1920"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/camera.jpg?height=400&width=400"
              alt="Photographer"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
            Di Elegant Captures, kami percaya bahwa setiap momen adalah sebuah cerita yang menunggu untuk diceritakan. Dengan hasrat kami pada fotografi dan pengalaman bertahun-tahun, kami berusaha untuk mengabadikan esensi momen spesial Anda dengan cara yang paling indah dan autentik.

            </p>
            <p className="text-lg mb-6">
            Tim fotografer terampil kami berspesialisasi dalam beragam gaya fotografi, mulai dari potret pernikahan abadi hingga liputan acara yang dinamis. Kami bangga atas perhatian kami terhadap detail, kreativitas, dan kemampuan untuk membuat klien kami merasa nyaman di depan kamera.
            </p>
            <p className="text-lg">
            Izinkan kami membantu Anda mengabadikan kenangan Anda dalam foto menakjubkan berkualitas tinggi yang akan Anda kenang seumur hidup.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Wedding Photography", description: "Capturing love stories with elegance and emotion" },
            { title: "Portrait Sessions", description: "Bringing out the best in individuals and families" },
            { title: "Event Coverage", description: "Documenting special moments at corporate and social events" },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}