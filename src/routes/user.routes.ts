import { FastifyInstance } from 'fastify';
import { UserUseCase } from '../useCases/user.usecase';
import { UserCreate } from '../interfaces/user.interface';

export async function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCase();
    fastify.post<{Body: UserCreate}>('/', async (req, reply) => {      // Sigin Route
        const { fullName, email, password } = req.body
        try {
            const data = await userUseCase.create({
                fullName,
                email,
                password
            });

            return reply.send(data);
        } catch (error) {
            reply.send(error)
        }
    });

    fastify.get('/', (req, reply) => {                           // Counsult Account
        reply.send({ hello: 'world' });
    })
}