import { AppDataSource } from "./databaseConfig"

AppDataSource.initialize().then(async () => {
    console.log("Iniciando Oracle")
}).catch(error => console.log("error: ", error))


//npm run typeorm migration:create src/database/migrations/CreateCategories
//npm run typeorm migration:run
//npm run typeorm migration:revert
//npx typeorm migration:create -n nomeMigration