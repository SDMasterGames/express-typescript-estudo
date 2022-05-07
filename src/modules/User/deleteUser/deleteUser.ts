import { IUserRepo } from "../../../repository/IUserRepo";

export class deleteUser {
  constructor(private IUserRepo: IUserRepo) {}
  async execute(id: string) {
    if (!id) {
      throw new Error("Id is required");
    }
    const user = await this.IUserRepo.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    const result = await this.IUserRepo.deleteById(id);
    return result;
  }
}
