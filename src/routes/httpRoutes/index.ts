import { FastifyInstance } from 'fastify';

import { tasksRoutes } from './todo.routes';

async function appRoutes(fastify: FastifyInstance) {
  fastify.register(tasksRoutes, { prefix: '/tasks' });
};

export { appRoutes };