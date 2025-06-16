import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/config';
import { reviews } from '@/lib/database/schema';
import { desc, eq, and, gte } from 'drizzle-orm';

// GET - Fetch all reviews
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const approved = searchParams.get('approved');
    const featured = searchParams.get('featured');
    const serviceType = searchParams.get('serviceType');
    const minRating = searchParams.get('minRating');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = db.select().from(reviews);
    const conditions = [];

    if (approved === 'true') {
      conditions.push(eq(reviews.approved, true));
    } else if (approved === 'false') {
      conditions.push(eq(reviews.approved, false));
    }

    if (featured === 'true') {
      conditions.push(eq(reviews.featured, true));
    }

    if (serviceType && serviceType !== 'all') {
      conditions.push(eq(reviews.serviceType, serviceType));
    }

    if (minRating) {
      conditions.push(gte(reviews.rating, parseInt(minRating)));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const reviewList = await query
      .orderBy(desc(reviews.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      success: true,
      data: reviewList,
      total: reviewList.length
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

// POST - Create new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      clientName,
      email,
      rating,
      title,
      content,
      serviceType,
      location,
      imageUrl,
      videoUrl,
      bookingId
    } = body;

    if (!clientName || !content || !rating) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const newReview = await db.insert(reviews).values({
      clientName,
      email,
      rating,
      title,
      content,
      serviceType,
      location,
      imageUrl,
      videoUrl,
      bookingId,
      approved: false,
      featured: false
    }).returning();

    return NextResponse.json({
      success: true,
      data: newReview[0]
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create review' },
      { status: 500 }
    );
  }
}
