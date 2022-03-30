import fs from 'fs';
import {parse} from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory{
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            //recebe um arquivo e cria uma stream de leitura
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            //cria um parseFile que tem como delimitador padrão a ','
            const parseFile = parse();

            //.pipe pega a linha do que foi lido e joga para outro lugar(função, arquivo, lista) pro parseFile
            stream.pipe(parseFile);

            parseFile.on("data",async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description
                })
            })
            .on("end", () => {
                fs.promises.unlink(file.path);
                resolve(categories);
            })
            .on("error", (err) =>{
                reject(err);
            });
        });
    }

    /*
    *   para que o retorno seja possível é preciso que a função do load seja uma 
    *   promise que espere o array ser preenchido para poder enviar
    */
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        
        //map precisa ser async para percorrer corretamente.
        categories.map(async (categoria) => {
            const { name, description } = categoria;

            const existeCategoria = this.categoriesRepository.findByName(name);

            if(existeCategoria){
                throw new Error("Categoria " + existeCategoria.name  + " já está cadastrada no sistema!")
            }else{
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }