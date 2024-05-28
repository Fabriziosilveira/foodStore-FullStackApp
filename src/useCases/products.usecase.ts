import { ProductRepositoryPrisma } from '../repositories/products.repository';
import { ProductRepository } from './../interfaces/products.interface';

export class ProductUseCase {
    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepositoryPrisma();
    }

    async createProductsIfTableIsEmpty(): Promise<void> {
        const isEmpty = await this.productRepository.isEmpty();
        if (isEmpty) {
            await this.productRepository.createProducts();
        }
    }
}

