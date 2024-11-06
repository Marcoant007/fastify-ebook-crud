import { ProductRepository } from '../repositories/product-repository';
import { Product } from '../entities/product';

export class ProductUseCase {
  private productRepository = new ProductRepository();

  async getAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async getById(id: number): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }

  async create(data: Product): Promise<Product> {
    return await this.productRepository.create(data);
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return await this.productRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}