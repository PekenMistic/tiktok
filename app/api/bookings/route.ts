import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/config';
import { bookings, services } from '@/lib/database/schema';
import { desc, eq, and, gte, lte } from 'drizzle-orm';

// GET - Fetch all bookings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = db.select({
      id: bookings.id,
      clientName: bookings.clientName,
      email: bookings.email,
      phone: bookings.phone,
      eventType: bookings.eventType,
      eventDate: bookings.eventDate,
      eventTime: bookings.eventTime,
      location: bookings.location,
      duration: bookings.duration,
      price: bookings.price,
      status: bookings.status,
      notes: bookings.notes,
      createdAt: bookings.createdAt,
      updatedAt: bookings.updatedAt,
      service: {
        id: services.id,
        name: services.name,
        category: services.category
      }
    })
    .from(bookings)
    .leftJoin(services, eq(bookings.serviceId, services.id));

    const conditions = [];

    if (status && status !== 'all') {
      conditions.push(eq(bookings.status, status));
    }

    if (startDate) {
      conditions.push(gte(bookings.eventDate, startDate));
    }

    if (endDate) {
      conditions.push(lte(bookings.eventDate, endDate));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const bookingList = await query
      .orderBy(desc(bookings.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      success: true,
      data: bookingList,
      total: bookingList.length
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      clientName,
      email,
      phone,
      eventType,
      eventDate,
      eventTime,
      location,
      duration,
      price,
      notes,
      serviceId
    } = body;

    if (!clientName || !email || !eventType || !eventDate) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newBooking = await db.insert(bookings).values({
      clientName,
      email,
      phone,
      eventType,
      eventDate,
      eventTime,
      location,
      duration,
      price: price ? price.toString() : null,
      notes,
      serviceId,
      status: 'pending'
    }).returning();

    return NextResponse.json({
      success: true,
      data: newBooking[0]
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
