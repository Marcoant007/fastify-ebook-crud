import { FastifyInstance } from 'fastify';
import { CategoryController } from '../controllers/category-controller';

export async function categoryRoutes(server: FastifyInstance) {
  const categoryController = new CategoryController();

  server.get('/categories', categoryController.getAll.bind(categoryController));
  server.get('/categories/:id', categoryController.getById.bind(categoryController));
  server.post('/categories', categoryController.create.bind(categoryController));
  server.put('/categories/:id', categoryController.update.bind(categoryController));
  server.delete('/categories/:id', categoryController.delete.bind(categoryController));
}