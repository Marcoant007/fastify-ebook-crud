import Fastify from 'fastify';

const server = Fastify({ logger: true });
const port = 3333;

server.get('/test', async (request, reply) => {
    return { message: 'Rota de teste funcionando corretamente!' };
});

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