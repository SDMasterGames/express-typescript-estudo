import { Request, Response } from "express";
import { deleteUser } from "./deleteUser";

export class deleteUserController {
  constructor(private useCase: deleteUser) {}
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await this.useCase.execute(id);
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
}
