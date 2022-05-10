import { User } from "@prisma/client";

export interface ICreateUserRequestDTO
  extends Partial<Pick<User, "name" | "email" | "avatar_url">> {}
