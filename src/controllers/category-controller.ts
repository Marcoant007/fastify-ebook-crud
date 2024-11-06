import { FastifyReply, FastifyRequest } from 'fastify';
import { Category } from '../entities/category';
import { CategoryUseCase } from '../usecases/category-usecase';

export class CategoryController {
  private categoryUseCase = new CategoryUseCase();

  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const categories = await this.categoryUseCase.getAll();
    reply.send(categories);
  }

  async getById(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
    const category = await this.categoryUseCase.getById(request.params.id);
    reply.send(category);
  }

  async create(request: FastifyRequest<{ Body: Category }>, reply: FastifyReply) {
    const category = await this.categoryUseCase.create(request.body);
    reply.send(category);
  }

  async update(request: FastifyRequest<{ Params: { id: number }; Body: Partial<Category> }>, reply: FastifyReply) {
    const category = await this.categoryUseCase.update(request.params.id, request.body);
    reply.send(category);
  }

  async delete(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
    await this.categoryUseCase.delete(request.params.id);
    reply.send({ message: 'Category deleted' });
  }
}
