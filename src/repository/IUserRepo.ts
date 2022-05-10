import { User } from "@prisma/client";
export interface IUserRepoCreateData
  extends Pick<User, "name" | "email" | "avatar_url"> {}
export interface IUserRepo {
  create(data: IUserRepoCreateData): Promise<any>;
  findById(id: string): Promise<User | null>;
  list(): Promise<User[]>;
  deleteById(id: string): Promise<User>;

  findByIdAndUpdate(id: string, data: Partial<User>): Promise<User>;
}
