import { Request, Response } from "express";
import { listUser } from "./listUser";

export class listUserController {
  constructor(private useCase: listUser) {}
  async handle(req: Request, res: Response) {
    try {
      const response = await this.useCase.execute();
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unknown error",
      });
    }
  }
}
