'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [review, setReview] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, rating, review }),
      })

      if (response.ok) {
        toast({
          title: "Review Submitted",
          description: "Thank you for your feedback!",
        })
        setName("")
        setEmail("")
        setRating(0)
        setReview("")
      } else {
        throw new Error('Failed to submit review')
      }
    } catch (error: unknown) {  // Mengganti `any` dengan `unknown`
      if (error instanceof Error) {
        console.error("Error:", error.message)  // Menangani error jika itu objek `Error`
      }
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <Label>Rating</Label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-6 w-6 cursor-pointer ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="review">Review</Label>
        <Textarea 
          id="review" 
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
          required 
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  )
}
