import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepositories: ISpecificationsRepository){

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