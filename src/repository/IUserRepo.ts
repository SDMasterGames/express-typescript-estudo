import { Teste } from "@prisma/client";
export interface IUserRepoCreateData {
  name: string;
}
export interface IUserRepo {
  create(data: IUserRepoCreateData): Promise<any>;
  findById(id: string): Promise<Teste | null>;
  List(): Promise<Teste[]>;
  deleteById(id: string): Promise<Teste>;
}
