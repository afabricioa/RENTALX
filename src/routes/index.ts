import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes); //se colocar o path aqui todas as rotas criadas no categories vão reconhecer como o path /categories
router.use("/specifications", specificationRoutes);

export { router };