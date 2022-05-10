import { Request, Response } from "express";
import { createUser } from "./createUser";

export class createUserController {
  constructor(private useCase: createUser) {}

  async handle(req: Request, res: Response) {
    const { name,email,avatar_url } = req.body;
    try {
      const user = await this.useCase.execute({ name,email,avatar_url});
      return res.status(201).send(user);
    } catch (error: any) {
      console.log(error);
      return res.status(400).send({
        error: error.message || "Unknown error",
      });
    }
  }
}
