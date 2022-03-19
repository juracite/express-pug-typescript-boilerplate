import { config } from "dotenv-flow";
config();
import { CommonRoutesConfig } from "../index";
import { Application, NextFunction, Request, Response } from "express";

// Interface
// @TODO : Implement interfaces

export class IndexRoutes extends CommonRoutesConfig {
    constructor(app: Application) {
        super(app, "IndexRoutes");
    }

    configureRoutes(): Application {
        this.app
            .route("/")
            /**
             * @param  {Request} req All information about the request
             * @param  {Response} res All information to send to the origin
             * @param  {NextFunction} next Pass to the next step (POST, PUT, GET ...)
             * @description Middleware launched before each calls of this route, verify and return error or pass to the next function by method type
             */
            .all((req: Request, res: Response, next: NextFunction) => {
                next();
            })
            .get((req: Request, res: Response) => {
                res.render('index');
            })
            .post((req: Request, res: Response) => {
                res.status(200).send(`POST sample route called`);
            })
            .put((req: Request, res: Response) => {
                res.status(200).send(`PUT sample route called`);
            })
            .patch((req: Request, res: Response) => {
                res.status(200).send(`PATCH sample route called`);
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send(`DELETE sample route called`);
            });

        return this.app;
    }
}

export class ProfileRoutes extends CommonRoutesConfig {
    constructor(app: Application) {
        super(app, "ProfileRoutes");
    }

    configureRoutes(): Application {
        this.app
            .route("/profile")
            /**
             * @param  {Request} req All information about the request
             * @param  {Response} res All information to send to the origin
             * @param  {NextFunction} next Pass to the next step (POST, PUT, GET ...)
             * @description Middleware launched before each calls of this route, verify and return error or pass to the next function by method type
             */
            .all((req: Request, res: Response, next: NextFunction) => {
                next();
            })
            .get((req: Request, res: Response) => {
                res.status(200).send(`GET sample route called`);
            })
            .post((req: Request, res: Response) => {
                res.status(200).send(`POST sample route called`);
            })
            .put((req: Request, res: Response) => {
                res.status(200).send(`PUT sample route called`);
            })
            .patch((req: Request, res: Response) => {
                res.status(200).send(`PATCH sample route called`);
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send(`DELETE sample route called`);
            });

        return this.app;
    }
}
