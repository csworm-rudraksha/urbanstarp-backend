export declare const sampleProducts: ({
    sku: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    stock: number;
    isActive: boolean;
    subCategory?: undefined;
} | {
    sku: string;
    name: string;
    description: string;
    price: number;
    category: string;
    subCategory: string;
    image: string;
    stock: number;
    isActive: boolean;
})[];
export declare const sampleUsers: {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}[];
export declare const seedDatabase: () => Promise<void>;
//# sourceMappingURL=sampleData.d.ts.map