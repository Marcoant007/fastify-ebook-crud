import { FastifyInstance } from 'fastify';
import { ProductController } from '../controllers/product-controller';

export default async function productRoutes(fastify: FastifyInstance) {
  const productController = new ProductController();

  fastify.get('/', productController.getAll);
  fastify.get('/:id', productController.getById);
  fastify.post('/', productController.create);
  fastify.put('/:id', productController.update);
  fastify.delete('/:id', productController.delete);
}

