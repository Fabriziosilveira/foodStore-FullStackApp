import { User } from "@prisma/client"

export interface UserCreate{
    fullName: string,
    email: string,
    password: string
}

export interface UserValidate{
    email: string,
    password: string
}

export interface UserRepository{
    create(data: UserCreate): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findByEmailAndPassword(email: string, password: string): Promise<User | null>;
    
}