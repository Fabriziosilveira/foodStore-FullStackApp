import { User } from "@prisma/client";
import { prisma } from "../db/prismaClient";
import { UserCreate, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository{

    async create(data: UserCreate): Promise<User> {
        const result =  await prisma.user.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                password: data.password
            }

        });
        return result;
    }

    async findByEmail(email: string): Promise<User | null>{
        const result = await prisma.user.findFirst({
            where:{
                email,
            }                
        });

        return result || null;
    }

}

export { UserRepositoryPrisma };