import { PrismaUserRepo } from "../../../repository/implements/PrismaUserRepo";
import { updateUser } from "./updateUser";
import { updateUserController } from "./updateUserController";

const UserRepository = new PrismaUserRepo();

const UpdateUser = new updateUser(UserRepository);

const UpdateUserController = new updateUserController(UpdateUser);

export { UpdateUserController, UpdateUser };
