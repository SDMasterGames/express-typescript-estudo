import { User } from "@prisma/client";

export interface ICreateUserRequestDTO extends Pick<User, "name" | "email" | "avatar_url"> {}
