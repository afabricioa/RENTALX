import "reflect-metadata";
import express from "express";
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import "./database";

import "./shared/container";

import { router } from "./routes";
import swaggerFile from './swagger.json';

const app = express();

//use é para poder aceitar json no body
app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3030, () => console.log("Server is Running in port 3030"));