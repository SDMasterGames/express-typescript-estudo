import { Request, Response } from "express";
import { updateUser } from "./updateUser";

export class updateUserController {
  constructor(private useCase: updateUser) {}
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { ...data } = req.body;
      const user = await this.useCase.execute({ id, ...data });
      return res.status(200).send(user);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while updating user",
      });
    }
  }
}
