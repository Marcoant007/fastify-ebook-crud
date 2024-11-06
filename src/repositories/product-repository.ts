import { PrismaClient } from '@prisma/client';
import { Product } from '../entities/product';

const prisma = new PrismaClient();

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    return await prisma.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return await prisma.product.findUnique({ where: { id } });
  }

  async create(data: Product): Promise<Product> {
    return await prisma.product.create({ data });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    return await prisma.product.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}