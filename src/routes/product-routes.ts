import { FastifyInstance } from 'fastify';
import { ProductController } from '../controllers/product-controller';

export async function productRoutes(server: FastifyInstance) {
  const productController = new ProductController();

  server.get('/products', productController.getAll.bind(productController));
  server.get('/products/:id', productController.getById.bind(productController));
  server.post('/products', productController.create.bind(productController));
  server.put('/products/:id', productController.update.bind(productController));
  server.delete('/products/:id', productController.delete.bind(productController));
}