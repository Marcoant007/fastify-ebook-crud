import { CategoryRepository } from '../repositories/category-repository';
import { Category } from '../entities/category';

export class CategoryUseCase {
  private categoryRepository = new CategoryRepository();

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  async getById(id: number): Promise<Category | null> {
    return await this.categoryRepository.findById(id);
  }

  async create(data: Category): Promise<Category> {
    return await this.categoryRepository.create(data);
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    return await this.categoryRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}