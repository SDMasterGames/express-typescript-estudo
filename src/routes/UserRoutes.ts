import { Request, Response, Router } from "express";
import { CreateUserController } from "../modules/User/createUser";
import { DeleteUserController } from "../modules/User/deleteUser";
import { ListUserController } from "../modules/User/listUser";
class Controller {
  public path = "/user";
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
    this.router.post(this.path, this.post);
    this.router.delete(`${this.path}/:id`, this.delete);
  }
  get = async (req: Request, res: Response) => {
    await ListUserController.handle(req, res);
    return;
  };
  post = async (req: Request, res: Response) => {
    await CreateUserController.handle(req, res);
    return;
  };
  delete = async (req: Request, res: Response) => {
    await DeleteUserController.handle(req, res);
    return;
  };
}

export default new Controller();
