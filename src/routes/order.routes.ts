// routes/orderRoutes.ts
import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function orderRoutes(app: FastifyInstance) {
    app.post('/orders/add', async (request, reply) => {
        const { userEmail, productId } = request.body;

        try {
            // Verificar se o usuário existe
            const user = await prisma.user.findUnique({
                where: { email: userEmail },
            });

            if (!user) {
                reply.status(404).send({ error: 'User not found' });
                return;
            }

            // Verificar se já existe uma ordem aberta para o usuário
            let order = await prisma.orders.findFirst({
                where: {
                    orderMail: userEmail,
                    // Adicione qualquer condição adicional, como verificar se a ordem não está finalizada
                },
            });

            if (!order) {
                // Criar uma nova ordem se não existir
                order = await prisma.orders.create({
                    data: {
                        orderMail: userEmail,
                        amount: 1,
                        OrderProduct: {
                            create: {
                                productId: productId,
                            },
                        },
                    },
                });
            } else {
                // Atualizar a ordem existente
                await prisma.orders.update({
                    where: { id: order.id },
                    data: {
                        amount: {
                            increment: 1,
                        },
                        OrderProduct: {
                            create: {
                                productId: productId,
                            },
                        },
                    },
                });
            }

            reply.send({ message: 'Product added to order' });
        } catch (error) {
            reply.status(500).send({ error: 'Failed to add product to order' });
        }
    });
}
