// app/services/page.tsx
import LuxuryServices from "@/components/luxury/LuxuryServices"
import LuxuryFAQ from "@/components/luxury/LuxuryFAQ"
import LuxuryCTA from "@/components/luxury/LuxuryCTA"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Luxury Services Section */}
      <LuxuryServices />

      {/* Luxury FAQ Section */}
      <LuxuryFAQ />

      {/* Luxury CTA Section */}
      <LuxuryCTA />
    </div>
  )
}
