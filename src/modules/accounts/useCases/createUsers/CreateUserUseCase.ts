import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUsersDTO } from "../../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepositories: IUsersRepository
    ){
    }
    async execute({name, password, email, driver_license}: ICreateUsersDTO): Promise<void>{
        const usuarioExiste = this.usersRepositories.findByEmail(email);
        
        const passwordHash = await hash(password, 8);
        console.log(passwordHash)
        await this.usersRepositories.create({
            name, 
            password: passwordHash, 
            email, 
            driver_license})
    }
}

export { CreateUserUseCase }