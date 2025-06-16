const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://rst_owner:npg_iwVZleU93EjS@ep-floral-king-a1lh4ej5-pooler.ap-southeast-1.aws.neon.tech/rst?sslmode=require";

async function seedDatabase() {
  const sql = neon(DATABASE_URL);

  try {
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await sql`DELETE FROM reviews`;
    await sql`DELETE FROM messages`;
    await sql`DELETE FROM bookings`;
    await sql`DELETE FROM portfolio_items`;
    await sql`DELETE FROM services`;
    console.log('✅ Cleared existing data');

    // Insert services
    const services = [
      {
        name: 'Wedding Photography',
        description: 'Complete wedding day coverage with professional editing and online gallery',
        price_from: 2500.00,
        duration: '8-12 hours',
        features: ['Full day coverage', 'Engagement session', 'Online gallery', 'Print release', 'Professional editing'],
        category: 'Wedding',
        image_url: '/placeholder.svg?height=300&width=400',
        popular: true,
        active: true
      },
      {
        name: 'Portrait Session',
        description: 'Professional portrait photography for individuals, couples, or families',
        price_from: 350.00,
        duration: '1-2 hours',
        features: ['Studio or location', 'Wardrobe consultation', 'Retouched images', 'Print options'],
        category: 'Portrait',
        image_url: '/placeholder.svg?height=300&width=400',
        popular: false,
        active: true
      },
      {
        name: 'Family Photography',
        description: 'Beautiful family portraits that capture your loved ones together',
        price_from: 450.00,
        duration: '2-3 hours',
        features: ['Multiple locations', 'All family members', 'Lifestyle shots', 'Digital gallery'],
        category: 'Family',
        image_url: '/placeholder.svg?height=300&width=400',
        popular: false,
        active: true
      },
      {
        name: 'Corporate Events',
        description: 'Professional event photography for business occasions and conferences',
        price_from: 800.00,
        duration: '4-8 hours',
        features: ['Event coverage', 'Team photos', 'Branding focus', 'Quick delivery'],
        category: 'Corporate',
        image_url: '/placeholder.svg?height=300&width=400',
        popular: false,
        active: true
      }
    ];

    for (const service of services) {
      await sql`
        INSERT INTO services (name, description, price_from, duration, features, category, image_url, popular, active)
        VALUES (${service.name}, ${service.description}, ${service.price_from}, ${service.duration}, 
                ${service.features}, ${service.category}, ${service.image_url}, ${service.popular}, ${service.active})
      `;
    }
    console.log('✅ Inserted services');

    // Insert portfolio items
    const portfolioItems = [
      {
        title: 'Elegant Wedding Ceremony',
        description: 'A beautiful outdoor wedding ceremony captured in golden hour light',
        category: 'Wedding',
        image_url: '/placeholder.svg?height=400&width=600',
        featured: true,
        tags: ['wedding', 'outdoor', 'ceremony', 'golden hour']
      },
      {
        title: 'Corporate Headshots',
        description: 'Professional headshots for business executives',
        category: 'Corporate',
        image_url: '/placeholder.svg?height=400&width=600',
        featured: false,
        tags: ['corporate', 'headshots', 'professional', 'business']
      },
      {
        title: 'Family Portrait Session',
        description: 'Joyful family moments captured in a natural setting',
        category: 'Family',
        image_url: '/placeholder.svg?height=400&width=600',
        featured: true,
        tags: ['family', 'portrait', 'natural', 'outdoor']
      },
      {
        title: 'Romantic Engagement Photos',
        description: 'Intimate engagement session in urban setting',
        category: 'Portrait',
        image_url: '/placeholder.svg?height=400&width=600',
        featured: false,
        tags: ['engagement', 'couple', 'urban', 'romantic']
      }
    ];

    for (const item of portfolioItems) {
      await sql`
        INSERT INTO portfolio_items (title, description, category, image_url, featured, tags)
        VALUES (${item.title}, ${item.description}, ${item.category}, ${item.image_url}, 
                ${item.featured}, ${item.tags})
      `;
    }
    console.log('✅ Inserted portfolio items');

    // Insert sample bookings
    const bookings = [
      {
        client_name: 'John & Sarah Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 123-4567',
        event_type: 'Wedding',
        event_date: '2024-06-15',
        event_time: '14:00',
        location: 'Central Park, New York',
        duration: '8 hours',
        price: 2500.00,
        status: 'confirmed',
        notes: 'Outdoor ceremony, reception at nearby venue'
      },
      {
        client_name: 'Tech Corp Inc.',
        email: 'events@techcorp.com',
        phone: '+1 (555) 987-6543',
        event_type: 'Corporate Event',
        event_date: '2024-05-28',
        event_time: '18:00',
        location: 'Downtown Convention Center',
        duration: '4 hours',
        price: 1200.00,
        status: 'pending',
        notes: 'Annual company party, need group photos'
      }
    ];

    for (const booking of bookings) {
      await sql`
        INSERT INTO bookings (client_name, email, phone, event_type, event_date, event_time, 
                             location, duration, price, status, notes)
        VALUES (${booking.client_name}, ${booking.email}, ${booking.phone}, ${booking.event_type},
                ${booking.event_date}, ${booking.event_time}, ${booking.location}, ${booking.duration},
                ${booking.price}, ${booking.status}, ${booking.notes})
      `;
    }
    console.log('✅ Inserted bookings');

    // Insert sample messages
    const messages = [
      {
        name: 'Alice Johnson',
        email: 'alice@email.com',
        phone: '+1 (555) 111-2222',
        subject: 'Wedding Photography Inquiry',
        message: 'Hi, I am interested in your wedding photography services for my upcoming wedding in July. Could you please send me more information about your packages?',
        status: 'unread',
        priority: 'normal'
      },
      {
        name: 'Bob Wilson',
        email: 'bob@email.com',
        subject: 'Portfolio Session',
        message: 'I need professional headshots for my LinkedIn profile. What are your rates for a portrait session?',
        status: 'read',
        priority: 'low'
      }
    ];

    for (const message of messages) {
      await sql`
        INSERT INTO messages (name, email, phone, subject, message, status, priority)
        VALUES (${message.name}, ${message.email}, ${message.phone}, ${message.subject},
                ${message.message}, ${message.status}, ${message.priority})
      `;
    }
    console.log('✅ Inserted messages');

    // Insert sample reviews
    const reviews = [
      {
        client_name: 'Sarah & Michael Johnson',
        email: 'sarah@email.com',
        rating: 5,
        title: 'Amazing Wedding Photography!',
        content: 'Absolutely stunning work! Our wedding photos exceeded all expectations. The team captured every precious moment with such artistry and professionalism.',
        service_type: 'Wedding',
        location: 'Bali, Indonesia',
        image_url: '/placeholder.svg?height=300&width=300',
        featured: true,
        approved: true
      },
      {
        client_name: 'Emily Chen',
        email: 'emily@email.com',
        rating: 5,
        title: 'Professional Portrait Session',
        content: 'The portrait session was amazing! I felt so comfortable and the results were beyond beautiful. Highly recommend for anyone looking for professional photos.',
        service_type: 'Portrait',
        location: 'Jakarta, Indonesia',
        featured: false,
        approved: true
      }
    ];

    for (const review of reviews) {
      await sql`
        INSERT INTO reviews (client_name, email, rating, title, content, service_type, 
                           location, image_url, featured, approved)
        VALUES (${review.client_name}, ${review.email}, ${review.rating}, ${review.title},
                ${review.content}, ${review.service_type}, ${review.location}, ${review.image_url},
                ${review.featured}, ${review.approved})
      `;
    }
    console.log('✅ Inserted reviews');

    console.log('🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

seedDatabase();
