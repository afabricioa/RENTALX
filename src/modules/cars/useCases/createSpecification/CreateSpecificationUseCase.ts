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
    execute({name, description}: IRequest): void{
        const specificationExiste = this.specificationRepositories.findByName(name);

        if(specificationExiste){
            throw new Error("Especificação já existe!");
        }
        
        return this.specificationRepositories.create({name, description});
    }

}

export { CreateSpecificationUseCase }