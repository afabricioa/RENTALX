import { response } from "express";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }
    execute({name, description}: IRequest): void{
        const specificationExiste = this.specificationsRepository.findByName(name);

        if(specificationExiste){
            throw new Error("Especificação já existe!");
        }
        
        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService }