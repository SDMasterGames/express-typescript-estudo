import { IUserRepo, IUserRepoCreateData } from "../IUserRepo";
import { prisma } from "../../database/prisma";
import { User } from "@prisma/client";

export class PrismaUserRepo implements IUserRepo {
  async create({ name, email,avatar_url }: IUserRepoCreateData): Promise<any> {
    return await prisma.user.create({
      data: {
        name,
        email,
        avatar_url
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
  async deleteById(id: string): Promise<User> {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }
  async list(): Promise<User[]> {
    return await prisma.user.findMany();
  }
  async findByIdAndUpdate(id: string, data: Partial<User>): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return user;
  }
}
