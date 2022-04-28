import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


export default(): ImportCategoryController => {
    const categoriesRepository = new CategoriesRepository(); //padrão SINGLETON pra ter só uma instancia da lista
    const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase);

    return importCategoryController
}

