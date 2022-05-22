import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/databaseConfig";
import { ICreateUsersDTO } from "../../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>
    
    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }
    async create({name, username, password, email, driver_license}): Promise<void>{
        const created_at = new Date();
        const user = this.repository.create({
            name, 
            username, 
            password, 
            email, 
            driver_license,
            created_at
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };