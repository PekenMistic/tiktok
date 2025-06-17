import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/config';
import { faqs } from '@/lib/database/schema';
import { eq, asc, and } from 'drizzle-orm';

// GET - Fetch all FAQs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const active = searchParams.get('active');
    const category = searchParams.get('category');

    // Build base query
    let baseQuery = db.select().from(faqs);

    // Apply filters
    const conditions: any[] = [];
    if (active === 'true') {
      conditions.push(eq(faqs.active, true));
    }
    if (category) {
      conditions.push(eq(faqs.category, category));
    }

    // Apply where conditions if any exist
    let finalQuery = baseQuery;
    if (conditions.length === 1) {
      finalQuery = baseQuery.where(conditions[0]);
    } else if (conditions.length > 1) {
      finalQuery = baseQuery.where(and(...conditions));
    }

    const faqList = await finalQuery.orderBy(asc(faqs.order));

    return NextResponse.json({
      success: true,
      data: faqList
    });
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch FAQs' },
      { status: 500 }
    );
  }
}

// POST - Create new FAQ
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      question,
      answer,
      category,
      order,
      active
    } = body;

    if (!question || !answer) {
      return NextResponse.json(
        { success: false, error: 'Question and answer are required' },
        { status: 400 }
      );
    }

    const newFaq = await db.insert(faqs).values({
      question,
      answer,
      category: category || 'General',
      order: order || 0,
      active: active !== false // Default to true
    }).returning();

    return NextResponse.json({
      success: true,
      data: newFaq[0]
    });
  } catch (error) {
    console.error('Error creating FAQ:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create FAQ' },
      { status: 500 }
    );
  }
}
