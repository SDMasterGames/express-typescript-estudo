import { IUserRepo } from "../../../repository/IUserRepo";
import { IUpdateUserRequestDTO } from "./updateUserDTO";

export class updateUser {
  constructor(private IUserRepo: IUserRepo) {}

  async execute({ id, ...data }: IUpdateUserRequestDTO) {
    const userExists = await this.IUserRepo.findById(id);

    if (!userExists) {
      throw new Error("User not found");
    }

    const user = await this.IUserRepo.findByIdAndUpdate(id, data);
    return user;
  }
}
