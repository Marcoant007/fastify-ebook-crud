import { FastifyReply, FastifyRequest } from 'fastify';
import { Product } from '../entities/product';
import { ProductUseCase } from '../usecases/product-usecase';

export class ProductController {
  private productUseCase = new ProductUseCase();

  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const products = await this.productUseCase.getAll();
    reply.send(products);
  }

  async getById(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
    const product = await this.productUseCase.getById(request.params.id);
    reply.send(product);
  }

  async create(request: FastifyRequest<{ Body: Product }>, reply: FastifyReply) {
    const product = await this.productUseCase.create(request.body);
    reply.send(product);
  }

  async update(request: FastifyRequest<{ Params: { id: number }; Body: Partial<Product> }>, reply: FastifyReply) {
    const product = await this.productUseCase.update(request.params.id, request.body);
    reply.send(product);
  }

  async delete(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
    await this.productUseCase.delete(request.params.id);
    reply.send({ message: 'Product deleted' });
  }
}
