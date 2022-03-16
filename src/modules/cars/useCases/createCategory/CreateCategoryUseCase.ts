import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [] - definir o tipo de retorno
 * [x] - alterar o retorno de erro
 * [] - acessar o repositorio
 */

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    execute({name, description} : IRequest): void {
        const categoryExiste = this.categoriesRepository.findByName(name);

        if(categoryExiste){
            throw new Error("Categoria já existe!");
            //return response.status(400).json({error: "Categoria já cadastrada!"});
        }

        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }