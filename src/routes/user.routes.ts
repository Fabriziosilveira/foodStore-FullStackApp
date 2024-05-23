import { FastifyInstance } from 'fastify';
import { UserUseCase } from '../useCases/user.usecase';
import { UserCreate } from '../interfaces/user.interface';

export async function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCase();

    fastify.post<{Body: UserCreate}>('/register', async (req, reply) => {      
        // Register Route
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

    fastify.post<{ Body: { email: string, password: string } }>('/login', async (req, reply) => {       
        // Login Route
        const { email, password } = req.body;
        try {
            const user = await userUseCase.validateUser(email, password);
            return reply.send(user);
        } catch (error) {
            reply.send(error);
        }
    });
}