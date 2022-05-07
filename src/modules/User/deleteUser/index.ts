import { PrismaUserRepo } from "../../../repository/implements/PrismaUserRepo";
import { deleteUser } from "./deleteUser";
import { deleteUserController } from "./deleteUserController";

const UserRepository = new PrismaUserRepo();

const DeleteUser = new deleteUser(UserRepository);
const DeleteUserController = new deleteUserController(DeleteUser);

export { DeleteUser, DeleteUserController };
