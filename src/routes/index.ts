import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/categories", categoriesRoutes); //se colocar o path aqui todas as rotas criadas no categories vão reconhecer como o path /categories
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };