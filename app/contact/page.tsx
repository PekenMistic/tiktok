// app/contact/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and well get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>You can also reach us through the following channels:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Panggung Sandiwara,Sidorejo Kebonsari Madiun, Indonesia</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone/Wa</h3>
                <p>(62) 85732474034</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>panggungsandiwara589@gmail.com.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}