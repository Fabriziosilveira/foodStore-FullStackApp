import { Product } from "@prisma/client";
import { prisma } from "../db/prismaClient";
import { ProductCreate, ProductRepository } from '../interfaces/products.interface';

class ProductRepositoryPrisma implements ProductRepository {

    async create(data: ProductCreate): Promise<Product> {
        const result = await prisma.product.create({
            data: {
                id: data.id,
                name: data.name,
                price: data.price
            }

        });
        return result;
    }

    async createProducts() {
        const products: ProductCreate[] = [
            { id: 'e5e28e31-7377-44df-ab5f-9cd28c9e166c', name: 'Simple Burger', price: 31.0 },
            { id: 'e5e28e31-7377-44df-ab6f-9cd28c9e167c', name: 'Grand Cheddar', price: 42.0 },
            { id: 'e5e28e31-7377-44df-ab7f-9cd28c9e168c', name: 'Grand Rib', price: 47.0 },
            { id: 'e5e28e31-7377-44df-ab8f-9cd28c9e169c', name: 'Grand Coalho', price: 37.0 },
            { id: 'e5e28e31-7377-44df-ab9f-9cd28c9e170c', name: 'Tasty Bacon', price: 38.0 },
            { id: 'e5e28e31-7377-44df-ab0f-9cd28c9e171c', name: 'Grand Pepperoni', price: 37.0 },
        ];

        for (const product of products) {
            await this.create(product);
        }
    }

    async isEmpty(): Promise<boolean> {
        const count = await prisma.product.count();
        return count === 0;
    }
}

export { ProductRepositoryPrisma };
