import { User } from "@prisma/client";
import { IUserRepo, IUserRepoCreateData } from "../src/repository/IUserRepo";

export const UserTest = {
  id: "1",
  name: "name",
  avatar_url: "avatar_url",
  email: "email",
  created_at: new Date(),
  updated_at: new Date(),
};
export class UserTestRepo implements IUserRepo {
  create(data: IUserRepoCreateData): Promise<any> {
    return new Promise((resolve) => {
      resolve(UserTest);
    });
  }
  deleteById(id: string): Promise<User> {
    return new Promise((resolve) => {
      resolve(UserTest);
    });
  }
  findById(id: string): Promise<User | null> {
    return new Promise((resolve, rejects) => {
      resolve(UserTest.id === id ? UserTest : null);
    });
  }
  findByIdAndUpdate(id: string, data: Partial<User>): Promise<User> {
    return new Promise((resolve) => {
      resolve({ ...UserTest, ...data });
    });
  }
  list(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve([UserTest]);
    });
  }
}
