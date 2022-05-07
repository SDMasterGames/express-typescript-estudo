import { IUserRepo } from "../../../repository/IUserRepo";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class createUser {
  constructor(private IUserRepo: IUserRepo) {}

  async execute(data: ICreateUserRequestDTO) {
    const { name } = data;
    if (!name) {
      throw new Error("Name is required");
    }

    const user = await this.IUserRepo.create({ name });
    return user;
  }
}
