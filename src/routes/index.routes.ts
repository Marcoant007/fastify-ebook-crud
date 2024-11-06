import { FastifyInstance } from 'fastify';
import productRoutes from './product-routes';
import categoryRoutes from './category-routes';

export default async function routes(fastify: FastifyInstance) {
  fastify.register(productRoutes, { prefix: '/products' });

  fastify.register(categoryRoutes, { prefix: '/categories' });
}

