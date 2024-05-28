import { FastifyInstance } from "fastify";
import { ProductUseCase } from "../useCases/products.usecase";
import { ProductCreate } from "../interfaces/products.interface";

export async function productsRoutes(fastify: FastifyInstance) {
    const productUseCase = new ProductUseCase();

    //Product Create Route
    fastify.post<{Body: ProductCreate}>('/products', async (req, reply) => {
        try {
            await productUseCase.createProductsIfTableIsEmpty();
            reply.status(201);
        } catch (error) {
            reply.status(500);
        }
    });
}