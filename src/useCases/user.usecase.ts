import { UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase{
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({fullName, email, password}: UserCreate): Promise<UserCreate>{
        const verifyIfUserExists = await this.userRepository.findByEmail(email);
        if(verifyIfUserExists){
            throw new Error("Usuário já cadastrado");
            
        }

        const result = await this.userRepository.create({ fullName, email, password});

        return result;
    }
}

export { UserUseCase }