import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepositories: ISpecificationsRepository){
    }
    async execute({name, description}: IRequest): Promise<void>{
        const specificationExiste = await this.specificationRepositories.findByName(name);

        if(specificationExiste){
            throw new Error("Especificação já existe!");
        }
        
        await this.specificationRepositories.create({name, description});
    }

}

export { CreateSpecificationUseCase }