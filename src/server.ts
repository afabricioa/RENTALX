import express from "express";
import swaggerUi from 'swagger-ui-express';

import { router } from "./routes";

import swaggerFile from './swagger.json';
import "reflect-metadata";

import "./database"

const app = express();

//use é para poder aceitar json no body
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3030, () => console.log("Server is Running in port 3030"));