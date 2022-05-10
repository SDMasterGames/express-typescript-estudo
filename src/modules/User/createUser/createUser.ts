import { IUserRepo } from "../../../repository/IUserRepo";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class createUser {
  constructor(private IUserRepo: IUserRepo) {}

  async execute({ name, email, avatar_url }: ICreateUserRequestDTO) {
    if (!name || !email) {
      throw new Error("Missing required fields");
    }

    const user = await this.IUserRepo.create({
      email,
      name,
      avatar_url,
    });
    return user;
  }
}
