import { User } from "@prisma/client"

export interface UserCreate{
    fullName: string,
    email: string,
    password: string
}

export interface UserRepository{
    create(data: UserCreate): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    
}