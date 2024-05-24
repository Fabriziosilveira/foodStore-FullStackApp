import { FastifyInstance, fastify } from "fastify";
import { userRoutes } from './routes/user.routes';
import fastifyCors from '@fastify/cors';

const app: FastifyInstance = fastify();

app.register(fastifyCors, {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization']
});

app.register(userRoutes, {
    prefix: '/users',
});

app.register(userRoutes, {
    prefix: '/login',
})

app.listen({ port: 3100 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando na porta ${address}`);
});