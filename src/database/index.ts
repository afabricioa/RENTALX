import { createConnection, getConnectionOptions } from "typeorm";
console.log("Arq database")

interface IOptions {
    host: string;
}
getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'database_ignite'

    createConnection({
        ...options
    });
});

//npm run typeorm migration:create src/database/migrations/CreateCategories
//npm run typeorm migration:run
//npm run typeorm migration:revert