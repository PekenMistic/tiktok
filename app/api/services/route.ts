import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/config';
import { services } from '@/lib/database/schema';
import { desc, eq, and } from 'drizzle-orm';

// GET - Fetch all services
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const active = searchParams.get('active');
    const popular = searchParams.get('popular');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Build base query
    let baseQuery = db.select().from(services);
    const conditions: any[] = [];

    if (active === 'true') {
      conditions.push(eq(services.active, true));
    }

    if (popular === 'true') {
      conditions.push(eq(services.popular, true));
    }

    if (category && category !== 'all') {
      conditions.push(eq(services.category, category));
    }

    // Apply where conditions if any exist
    let finalQuery = baseQuery;
    if (conditions.length === 1) {
      finalQuery = baseQuery.where(conditions[0]);
    } else if (conditions.length > 1) {
      finalQuery = baseQuery.where(and(...conditions));
    }

    const serviceList = await finalQuery
      .orderBy(desc(services.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      success: true,
      data: serviceList,
      total: serviceList.length
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      priceFrom,
      duration,
      features,
      category,
      imageUrl,
      popular,
      active
    } = body;

    if (!name) {
      return NextResponse.json(
        { success: false, error: 'Service name is required' },
        { status: 400 }
      );
    }

    const newService = await db.insert(services).values({
      name,
      description,
      priceFrom: priceFrom ? priceFrom.toString() : null,
      duration,
      features: features || [],
      category,
      imageUrl,
      popular: popular || false,
      active: active !== false // Default to true
    }).returning();

    return NextResponse.json({
      success: true,
      data: newService[0]
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
