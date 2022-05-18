import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/databaseConfig";

//DTO - data transfer object

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository;

    constructor() {
        console.log("teste")
        try{
            this.repository = AppDataSource.getRepository(Category);
        }catch(error){
            console.log(error)
        }
    }

    // public static getInstance(): CategoriesRepository {
    //     //verifica se tem uma instance já criada, se não retorna a atual
    //     if(!CategoriesRepository.INSTANCE){
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }

    //     return this.INSTANCE
    // }

    async create({name, description} : ICreateCategoryDTO): Promise<void> {
        const categoryExiste = await this.repository.findOneBy({name});

        if(categoryExiste){
            throw new Error("Categoria já existe!");
            //return response.status(400).json({error: "Categoria já cadastrada!"});
        }
        const category = this.repository.create({
            description,
            name
        });

        try {
            await this.repository.save(category);        
        } catch (error) {
            console.log(error)
        }
    }

    async list(): Promise<Category[]>{
        const categories = await this.repository.find();

        return categories;
    }

    async findByName(name: string): Promise<Category> {
        //Select * from categories where name = 'name' limit 1
        const category = await this.repository.findOneBy({name})

        return category;
    }
}

export { CategoriesRepository };