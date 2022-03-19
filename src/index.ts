import { Application } from 'express';

export abstract class CommonRoutesConfig {
    app: Application;
    _name: string;

    protected constructor(app: Application, name: string) {
        this.app = app;
        this._name = name;
        this.configureRoutes();
    }

    get name() : string {
        return this._name;
    }

    abstract configureRoutes() : Application;
}
