#!/usr/bin/env tsx

import { seedDatabase } from '../lib/database/seed-data';

async function main() {
  try {
    console.log('🚀 Starting database seeding process...');
    await seedDatabase();
    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('💥 Database seeding failed:', error);
    process.exit(1);
  }
}

main();
