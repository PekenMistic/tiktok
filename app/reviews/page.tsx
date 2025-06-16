// app/reviews/page.tsx
import SimpleHero from "@/components/SimpleHero"
import Reviews from "@/components/Reviews"
import ReviewForm from "@/components/ReviewForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Absolutely amazing experience! The photos turned out beautifully.",
    date: "2023-07-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great photographer, very professional. Highly recommended!",
    date: "2023-07-10",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment: "Captured our wedding day perfectly. Couldn't be happier!",
    date: "2023-07-05",
  },
]

export default function ReviewsPage() {
  return (
    <div>
      <SimpleHero
        title="Reviews"
        subtitle="See what our clients have to say about their experience"
        ctaText="Book a Session"
        ctaLink="/book"
        backgroundImage="/images/photo.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Recent Reviews</h2>
        <Reviews reviews={reviews} />
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Leave a Review</CardTitle>
            <CardDescription>Share your experience with us</CardDescription>
          </CardHeader>
          <CardContent>
            <ReviewForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
