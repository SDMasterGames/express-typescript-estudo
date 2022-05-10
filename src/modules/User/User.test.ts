import { IUserRepo } from "../../repository/IUserRepo";
import { createUser } from "./createUser/createUser";
import { deleteUser } from "./deleteUser/deleteUser";
import { listUser } from "./listUser/listUser";
import { updateUser } from "./updateUser/updateUser";
import { UserTest, UserTestRepo } from "../../../__tests__/UserTestRepo";

const UserRepository = new UserTestRepo();

const CreateUser = new createUser(UserRepository);
const DeleteUser = new deleteUser(UserRepository);
const ListUser = new listUser(UserRepository);
const UpdateUser = new updateUser(UserRepository);

describe("Modules - User", () => {
  describe("Create User", () => {
    it("Criação de usuario com sucesso.", async () => {
      await expect(
        CreateUser.execute({
          name: "Dale",
          email: "Saudades Dela",
        })
      ).resolves.not.toThrow();
    });

    it("Falha na ausencia de nome", async () => {
      await expect(
        CreateUser.execute({
          email: "email",
        })
      ).rejects.toThrow();
    });
    it("Falha na ausencia de email", async () => {
      await expect(
        CreateUser.execute({
          name: "name",
        })
      ).rejects.toThrow();
    });
  });

  describe("Delete User", () => {
    it("Deletando um usuario com sucesso.", async () => {
      await expect(DeleteUser.execute("1")).resolves.not.toThrow();
    });

    it("Falha na ausensia de um id.", async () => {
      await expect(DeleteUser.execute("")).rejects.toThrow();
    });

    it("Falha na ausensia de um user.", async () => {
      await expect(DeleteUser.execute("2")).rejects.toThrow();
    });
  });

  describe("List User", () => {
    it("Listando usuarios com sucesso.", async () => {
      await expect(ListUser.execute()).resolves.not.toThrow();
    });
  });

  describe("Update User", () => {
    it("Atualizando um usuario com sucesso.", async () => {
      await expect(
        UpdateUser.execute({
          id: "1",
          avatar_url: "avatar_url",
        })
      ).resolves.not.toThrow();
    });
    it("Falha na ausensia de um user.", async () => {
      await expect(
        UpdateUser.execute({
          id: "2",
          avatar_url: "avatar_url",
        })
      ).rejects.toThrow();
    });
  });
});
