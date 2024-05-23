import { UserValidate } from './interfaces/user.interface';
import { FastifyInstance, fastify } from "fastify";
import { userRoutes } from './routes/user.routes';

const app: FastifyInstance = fastify();

app.register(userRoutes, {
    prefix: '/users',
});

app.register(userRoutes, {
    prefix: '/login',
})

app.listen({port: 3100}, () => {
    console.log("Servidor rodando na porta 3100")
})

