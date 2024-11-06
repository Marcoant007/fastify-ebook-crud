import { PrismaClient } from '@prisma/client';
import { Category } from '../entities/category';

const prisma = new PrismaClient();

export class CategoryRepository {
  async findAll(): Promise<Category[]> {
    return await prisma.category.findMany();
  }

  async findById(id: number): Promise<Category | null> {
    return await prisma.category.findUnique({ where: { id } });
  }

  async create(data: Category): Promise<Category> {
    return await prisma.category.create({ data });
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    return await prisma.category.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.category.delete({ where: { id } });
  }
}
