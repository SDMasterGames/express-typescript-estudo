import { PrismaUserRepo } from "../../../repository/implements/PrismaUserRepo";
import { createUser } from "./createUser";
import { createUserController } from "./createUserController";

const UserRepository = new PrismaUserRepo();

const CreateUser = new createUser(UserRepository);
const CreateUserController = new createUserController(CreateUser);

export { CreateUserController, CreateUser };
