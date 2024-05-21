import { FastifyInstance, fastify } from "fastify";

const app: FastifyInstance = fastify({logger: true});

app.listen({port: 3000}, () => console.log("Servidor rodando na porta 3000"))

