import { Application } from 'express';
import { IndexRoutes, ProfileRoutes } from "../routes";
import { CommonRoutesConfig } from "../";

const routes: CommonRoutesConfig[] = [];

export default (app: Application) : void => {
    routes.push(
        new IndexRoutes(app),
        new ProfileRoutes(app),
    );
}

export {
    routes,
}
