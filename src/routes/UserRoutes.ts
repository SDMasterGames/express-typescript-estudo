import { Request, Response, Router } from "express";
class Controller {
  public path = "/test";
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
  }
  get = (req: Request, res: Response) => {
    res.send("ta funcionando");
  };
}

export default new Controller();
