import { FastifyInstance } from 'fastify';
import { CategoryController } from '../controllers/category-controller';

export default async function categoryRoutes(fastify: FastifyInstance) {
  const categoryController = new CategoryController();

  fastify.get('/', categoryController.getAll);
  fastify.get('/:id', categoryController.getById);
  fastify.post('/', categoryController.create);
  fastify.put('/:id', categoryController.update);
  fastify.delete('/:id', categoryController.delete);
}

