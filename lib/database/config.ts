import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Fallback untuk development jika DATABASE_URL tidak ada
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://rst_owner:npg_iwVZleU93EjS@ep-floral-king-a1lh4ej5-pooler.ap-southeast-1.aws.neon.tech/rst?sslmode=require";

if (!DATABASE_URL) {
  console.warn('DATABASE_URL is not defined, using fallback');
}

const sql = neon(DATABASE_URL);
export const db = drizzle(sql, { schema });

export type Database = typeof db;
