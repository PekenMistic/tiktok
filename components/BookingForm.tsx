// components/BookingForm.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const services = [
  "Wedding Photography",
  "Portrait Session",
  "Event Coverage",
  "Family Photography",
  "Commercial Photography",
]

export default function BookingForm() {
  const [date, setDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" required />
      </div>
      <div>
        <Label htmlFor="service">Service</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Preferred Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="message">Additional Information</Label>
        <Textarea id="message" />
      </div>
      <Button type="submit">Book Session</Button>
    </form>
  )
}