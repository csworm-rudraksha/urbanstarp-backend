import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  sku: string;
  name: string;
  description: string;
  price: number;
  category: 'clothes' | 'accessories';
  subCategory?: string;
  image: string;
  stock: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  sku: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['clothes', 'accessories']
  },
  subCategory: {
    type: String,
    enum: ['leather-belts', 'leather-office-bags', 'women-purse', 'mens-wallet']
  },
  image: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model<IProduct>('Product', productSchema); 