import { PrismaUserRepo } from "../../../repository/implements/PrismaUserRepo";
import { listUser } from "./listUser";
import { listUserController } from "./listUserController";

const UserRepository = new PrismaUserRepo();

const ListUser = new listUser(UserRepository);

const ListUserController = new listUserController(ListUser);

export { ListUser, ListUserController };
