import { IUserRepo } from "../../../repository/IUserRepo";

export class listUser {
  constructor(private IUserRepo: IUserRepo) {}
  async execute() {
    const users = await this.IUserRepo.list();
    return users;
  }
}
