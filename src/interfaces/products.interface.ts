import { Product } from "@prisma/client"

export interface ProductCreate{
    id: string,
    price: number,
    name: string
}


export interface ProductRepository{
    create(data: ProductCreate): Promise<Product>;
    isEmpty(): Promise<boolean>;
    createProducts(): Promise<void>;
}