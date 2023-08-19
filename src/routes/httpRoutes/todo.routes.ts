import { FastifyInstance, FastifyPluginOptions } from 'fastify';

async function tasksRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', (request, reply) => {
    // Retorna a lista de todas as tarefas.
  });

  fastify.post('/', (request, reply) => {
    // Cria uma nova tarefa com base nos dados fornecidos.
  });

  fastify.get('/:id', (request, reply) => {
    // Retorna os detalhes de uma tarefa específica com base no ID.
  });

  fastify.put('/:id', (request, reply) => {
    // Atualiza os detalhes de uma tarefa específica com base no ID.
  });

  fastify.delete('/:id', (request, reply) => {
    // Exclui uma tarefa específica com base no ID.
  });
}

export { tasksRoutes };