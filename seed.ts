import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedDatabase } from './src/utils/sampleData';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://<db_username>:CSworm123@cluster0.a3kfa.mongodb.net/urban-strap?retryWrites=true&w=majority&appName=Cluster0';

async function main() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    await seedDatabase();

    console.log('Seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

main(); 