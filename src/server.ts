import Fastify from 'fastify';
import { productRoutes } from './routes/product-routes';
import { categoryRoutes } from './routes/category-routes';

const server = Fastify({ logger: true });
const port = 3335;

server.register(productRoutes);
server.register(categoryRoutes);

const start = async () => {
  try {
    await server.listen({ port });
    console.log(`Server is running in ${port} 🚀`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();