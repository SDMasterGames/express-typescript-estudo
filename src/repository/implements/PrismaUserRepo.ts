import { IUserRepo, IUserRepoCreateData } from "../IUserRepo";
import { prisma } from "../../prisma";
import { Teste } from "@prisma/client";

export class PrismaUserRepo implements IUserRepo {
  async create({ name }: IUserRepoCreateData): Promise<any> {
    return await prisma.teste.create({
      data: {
        name,
      },
    });
  }

  async findById(id: string): Promise<Teste | null> {
    const user = await prisma.teste.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
  async deleteById(id: string): Promise<Teste> {
    const user = await prisma.teste.delete({
      where: {
        id,
      },
    });
    return user;
  }
  async List(): Promise<Teste[]> {
    return await prisma.teste.findMany();
  }
}
