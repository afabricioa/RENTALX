import { inject, injectable } from "tsyringe";
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

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) {

    }

    async execute({name, description} : IRequest): Promise<void> {
        const categoryExiste = await this.categoriesRepository.findByName(name);

        if(categoryExiste){
            throw new Error("Categoria já existe!");
            //return response.status(400).json({error: "Categoria já cadastrada!"});
        }

        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }