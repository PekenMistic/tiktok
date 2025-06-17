import { db } from './config';
import { blogPosts, faqs, settings, services, portfolioItems, reviews } from './schema';

export async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Seed Services
    console.log('📸 Seeding services...');
    await db.insert(services).values([
      {
        name: 'Wedding Photography',
        description: 'Capture your special day with our luxury wedding photography service. From intimate ceremonies to grand celebrations, we document every precious moment with artistic excellence.',
        priceFrom: '2500.00',
        duration: '8-12 hours',
        features: [
          'Pre-wedding consultation',
          'Full day coverage',
          'Professional editing',
          'Online gallery',
          'Print release',
          'Engagement session included'
        ],
        category: 'Wedding',
        imageUrl: '/images/services/wedding.jpg',
        popular: true,
        active: true
      },
      {
        name: 'Portrait Photography',
        description: 'Professional portrait sessions that capture your personality and essence. Perfect for individuals, couples, families, and professional headshots.',
        priceFrom: '350.00',
        duration: '1-2 hours',
        features: [
          'Professional consultation',
          'Studio or location shoot',
          'Expert retouching',
          'High-resolution images',
          'Print options available'
        ],
        category: 'Portrait',
        imageUrl: '/images/services/portrait.jpg',
        popular: true,
        active: true
      },
      {
        name: 'Event Photography',
        description: 'Document your corporate events, parties, and special occasions with professional event photography that captures the energy and emotion.',
        priceFrom: '800.00',
        duration: '4-8 hours',
        features: [
          'Event coverage',
          'Candid moments',
          'Group photos',
          'Fast delivery',
          'Digital gallery'
        ],
        category: 'Event',
        imageUrl: '/images/services/event.jpg',
        popular: false,
        active: true
      },
      {
        name: 'Commercial Photography',
        description: 'Elevate your brand with professional commercial photography. Perfect for products, corporate headshots, and marketing materials.',
        priceFrom: '500.00',
        duration: '2-4 hours',
        features: [
          'Brand consultation',
          'Professional lighting',
          'Product photography',
          'Commercial license',
          'Multiple formats'
        ],
        category: 'Commercial',
        imageUrl: '/images/services/commercial.jpg',
        popular: false,
        active: true
      }
    ]).onConflictDoNothing();

    // Seed Blog Posts
    console.log('📝 Seeding blog posts...');
    await db.insert(blogPosts).values([
      {
        title: 'Wedding Photography Trends 2024: Capturing Timeless Moments',
        excerpt: 'Discover the latest trends in wedding photography that are defining 2024, from candid storytelling to artistic compositions.',
        content: 'Wedding photography continues to evolve, with 2024 bringing fresh perspectives and innovative techniques. This year, we\'re seeing a shift towards more authentic, candid moments that tell the real story of your special day...',
        author: 'Madiun Photography Team',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'Wedding',
        tags: ['wedding', 'trends', '2024', 'photography'],
        image: '/images/blog/wedding-tips.jpg',
        featured: true,
        published: true,
        views: 1250,
        likes: 89
      },
      {
        title: 'The Art of Portrait Photography: Tips for Stunning Results',
        excerpt: 'Learn professional techniques for creating compelling portraits that capture personality and emotion.',
        content: 'Portrait photography is about more than just taking a picture – it\'s about capturing the essence of a person. In this comprehensive guide, we\'ll share professional techniques...',
        author: 'Madiun Photography Team',
        date: '2024-01-10',
        readTime: '6 min read',
        category: 'Portrait',
        tags: ['portrait', 'tips', 'lighting', 'composition'],
        image: '/images/photo.jpg',
        featured: false,
        published: true,
        views: 890,
        likes: 67
      },
      {
        title: 'Event Photography: Capturing the Energy and Emotion',
        excerpt: 'Master the art of event photography with these professional tips for documenting special occasions.',
        content: 'Event photography requires a unique set of skills to capture the energy, emotion, and important moments of any gathering. Whether it\'s a corporate event or celebration...',
        author: 'Madiun Photography Team',
        date: '2024-01-05',
        readTime: '5 min read',
        category: 'Event',
        tags: ['event', 'photography', 'tips', 'candid'],
        image: '/images/camera.jpg',
        featured: false,
        published: true,
        views: 654,
        likes: 45
      }
    ]).onConflictDoNothing();

    // Seed FAQs
    console.log('❓ Seeding FAQs...');
    await db.insert(faqs).values([
      {
        question: 'What photography services do you offer?',
        answer: 'We specialize in luxury photography services including weddings, portraits, family sessions, corporate events, and commercial photography. Each service is tailored to capture your unique story with artistic excellence and professional quality.',
        category: 'Services',
        order: 1,
        active: true
      },
      {
        question: 'How much do your photography packages cost?',
        answer: 'Our photography packages start from $350 for portrait sessions and $2,500 for wedding coverage. We offer customized packages to fit your specific needs and budget. Contact us for a detailed quote based on your requirements.',
        category: 'Pricing',
        order: 2,
        active: true
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 3-6 months in advance, especially for weddings and special events. However, we understand that sometimes you need photography services on shorter notice, so please reach out and we\'ll do our best to accommodate your timeline.',
        category: 'Booking',
        order: 3,
        active: true
      },
      {
        question: 'What is included in your photography packages?',
        answer: 'Our packages typically include pre-session consultation, professional photography session, expert photo editing, high-resolution digital gallery, and print release. Wedding packages also include engagement sessions and extended coverage options.',
        category: 'General',
        order: 4,
        active: true
      },
      {
        question: 'How long does it take to receive my photos?',
        answer: 'For portrait and family sessions, you\'ll receive your edited photos within 1-2 weeks. Wedding galleries are typically delivered within 4-6 weeks. We provide sneak peeks within 48-72 hours for all sessions.',
        category: 'General',
        order: 5,
        active: true
      },
      {
        question: 'Do you travel for photography sessions?',
        answer: 'Yes! We love to travel and capture beautiful moments in stunning locations. We serve the Madiun area and surrounding regions. For destination sessions, travel fees may apply depending on the location and duration.',
        category: 'Services',
        order: 6,
        active: true
      }
    ]).onConflictDoNothing();

    // Seed Settings
    console.log('⚙️ Seeding settings...');
    await db.insert(settings).values([
      { key: 'site_title', value: '"Madiun Photography - Luxury Photography Studio"' },
      { key: 'site_description', value: '"Professional photography services for weddings, portraits, and events in Madiun. Capturing life\'s most precious moments with artistic excellence."' },
      { key: 'business_name', value: '"Madiun Photography"' },
      { key: 'business_tagline', value: '"Capturing Life\'s Most Precious Moments"' },
      { key: 'contact_email', value: '"info@madiunphotography.com"' },
      { key: 'contact_phone', value: '"+62 123 456 7890"' },
      { key: 'contact_address', value: '"Jl. Photography Street No. 123, Madiun, East Java, Indonesia"' },
      { key: 'social_instagram', value: '"https://instagram.com/madiunphotography"' },
      { key: 'social_facebook', value: '"https://facebook.com/madiunphotography"' },
      { key: 'booking_enabled', value: 'true' },
      { key: 'booking_advance_days', value: '30' },
      { key: 'theme_primary_color', value: '"#8B5CF6"' },
      { key: 'theme_secondary_color', value: '"#F59E0B"' }
    ]).onConflictDoNothing();

    // Seed Portfolio Items
    console.log('🖼️ Seeding portfolio items...');
    await db.insert(portfolioItems).values([
      {
        title: 'Elegant Wedding Ceremony',
        description: 'A beautiful outdoor wedding ceremony captured in golden hour light.',
        imageUrl: '/images/portfolio/wedding-1.jpg',
        category: 'Wedding',
        featured: true,
        tags: ['wedding', 'outdoor', 'ceremony', 'golden hour']
      },
      {
        title: 'Professional Portrait Session',
        description: 'Corporate headshot with professional lighting and composition.',
        imageUrl: '/images/portfolio/portrait-1.jpg',
        category: 'Portrait',
        featured: true,
        tags: ['portrait', 'professional', 'headshot', 'corporate']
      },
      {
        title: 'Family Celebration',
        description: 'Joyful family gathering captured with natural expressions.',
        imageUrl: '/images/portfolio/family-1.jpg',
        category: 'Family',
        featured: false,
        tags: ['family', 'celebration', 'natural', 'joy']
      },
      {
        title: 'Corporate Event Coverage',
        description: 'Professional event photography for corporate gathering.',
        imageUrl: '/images/portfolio/event-1.jpg',
        category: 'Event',
        featured: false,
        tags: ['corporate', 'event', 'professional', 'business']
      }
    ]).onConflictDoNothing();

    // Seed Reviews
    console.log('⭐ Seeding reviews...');
    await db.insert(reviews).values([
      {
        clientName: 'Sarah & Michael Johnson',
        email: 'sarah@email.com',
        rating: 5,
        title: 'Amazing Wedding Photography!',
        content: 'Absolutely stunning work! Our wedding photos exceeded all expectations. The team captured every precious moment with such artistry and professionalism.',
        serviceType: 'Wedding',
        location: 'Bali, Indonesia',
        imageUrl: '/images/testimonials/sarah-michael.jpg',
        featured: true,
        approved: true,
        createdAt: new Date('2024-01-15'),
      },
      {
        clientName: 'Emily Chen',
        email: 'emily@email.com',
        rating: 5,
        title: 'Perfect Portrait Session',
        content: 'The portrait session was amazing! I felt so comfortable and the results were beyond beautiful. Highly recommend for anyone looking for professional photos.',
        serviceType: 'Portrait',
        location: 'Jakarta, Indonesia',
        imageUrl: '/images/testimonials/emily-chen.jpg',
        featured: false,
        approved: true,
        createdAt: new Date('2024-01-20'),
      },
      {
        clientName: 'David & Lisa Rodriguez',
        email: 'david@email.com',
        rating: 5,
        title: 'Beautiful Family Photos',
        content: 'Our family photoshoot was incredible! The photographer was so patient with our kids and captured the most beautiful moments. We love every single photo.',
        serviceType: 'Family',
        location: 'Surabaya, Indonesia',
        imageUrl: '/images/testimonials/rodriguez-family.jpg',
        featured: true,
        approved: true,
        createdAt: new Date('2024-02-01'),
      },
      {
        clientName: 'Amanda Thompson',
        email: 'amanda@email.com',
        rating: 5,
        title: 'Magical Maternity Session',
        content: 'The maternity photos are absolutely gorgeous! Such a special experience and the results are breathtaking. Thank you for capturing this precious time.',
        serviceType: 'Maternity',
        location: 'Yogyakarta, Indonesia',
        imageUrl: '/images/testimonials/amanda-maternity.jpg',
        featured: false,
        approved: true,
        createdAt: new Date('2024-02-10'),
      },
      {
        clientName: 'Corporate Events Inc.',
        email: 'events@corporate.com',
        rating: 5,
        title: 'Professional Event Coverage',
        content: 'Outstanding professional service for our corporate event. The team was unobtrusive yet captured every important moment perfectly. Highly professional.',
        serviceType: 'Corporate',
        location: 'Jakarta, Indonesia',
        imageUrl: '/images/testimonials/corporate-event.jpg',
        featured: false,
        approved: true,
        createdAt: new Date('2024-02-15'),
      },
    ]).onConflictDoNothing();

    console.log('✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}
