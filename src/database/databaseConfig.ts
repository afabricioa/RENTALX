import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "oracle",
    host: "localhost",
    username: "system",
    password: "ravtec",
    port: 1521,
    serviceName: "2fadbbf464c14a0c9c8d18febd989db3",
    connectString: "dev",
    synchronize: true,
    logging: false,
    entities: ["src/modules/**/entities/**/*.ts"],
    migrations: ["src/database/migrations/**/*.ts"],
    subscribers: [],
})


//npm run typeorm migration:create src/database/migrations/CreateCategories
//npm run typeorm migration:run
//npm run typeorm migration:revert
//npx typeorm migration:create -n nomeMigration
//npx ts-node-dev ./node_modules/typeorm/cli migration:run -d ./src/da
//npx ts-node-dev ./node_modules/typeorm/cli migration:run -d ./src/database/databaseConfig