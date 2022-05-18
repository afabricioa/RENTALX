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
        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }