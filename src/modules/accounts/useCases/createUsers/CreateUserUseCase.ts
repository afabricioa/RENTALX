import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepositories: IUsersRepository
    ){
    }
    async execute({name, username, password, email, driver_license}: ICreateUsersDTO): Promise<void>{
        await this.usersRepositories.create({name, username, password, email, driver_license})
    }
}

export { CreateUserUseCase }