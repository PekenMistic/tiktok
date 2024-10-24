// app/book/page.tsx
import Hero from "@/components/Hero"
import BookingForm from "@/components/BookingForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookPage() {
  return (
    <div>
      <Hero
        title="About Elegant Captures"
        subtitle="Let's capture your special moments together"
        ctaText="View Our Portfolio"
        ctaLink="/portfolio"
        backgroundImage="/images/photo.jpg?height=800&width=1920"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Book Your Photography Session</CardTitle>
              <CardDescription>Fill out the form below to schedule your session</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm />
            </CardContent>
          </Card>
          <div>
            <h2 className="text-2xl font-bold mb-4">Mengapa Memilih Kami?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Tim fotografer profesional dengan pengalaman lebih dari 10 tahun</li>
              <li>Sesi pemotretan yang disesuaikan dengan kebutuhan unik Anda</li>
              <li>Peralatan fotografi kelas atas dan teknik editing terkini</li>
              <li>Pilihan jadwal yang fleksibel untuk kenyamanan Anda</li>
              <li>Jaminan kepuasan 100% atau uang kembali</li>
              <li>Pendekatan kreatif untuk menghasilkan foto-foto yang memukau</li>
              <li>Harga transparan tanpa biaya tersembunyi</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Apa yang Anda Dapatkan</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Konsultasi awal gratis untuk memahami visi dan harapan Anda</li>
              <li>Sesi pemotretan profesional di lokasi pilihan Anda</li>
              <li>Seleksi dan pengeditan cermat untuk hasil terbaik</li>
              <li>Galeri online eksklusif untuk kemudahan melihat dan berbagi</li>
              <li>File digital resolusi tinggi dan opsi cetak berkualitas</li>
              <li>Penyimpanan aman foto-foto Anda selama 1 tahun</li>
              <li>Diskon khusus untuk sesi pemotretan berikutnya</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}