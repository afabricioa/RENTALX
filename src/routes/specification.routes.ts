import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

const specificationsRepository = SpecificationsRepository.getInstance();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
})

specificationRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
})
export { specificationRoutes };