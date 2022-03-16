import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../createSpecification/CreateSpecificationUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationUsecase";


const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(specificationsRepository);

const listSpecificationsController = new ListSpecificationsController(listSpecificationUseCase);

export { listSpecificationsController }