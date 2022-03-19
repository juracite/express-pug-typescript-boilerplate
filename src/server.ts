import fs from "fs";
import util from "util";
import stripAnsi from "strip-ansi";
import helmet from "helmet";
import favicon from "serve-favicon";
import cors from "cors";
import debug from "debug";
import {HttpError} from 'http-errors';
import express, {Application, NextFunction, Request, Response} from 'express';
import path from 'path';
import logger from 'morgan';
import initializeRoutes from './config/routes';
import { isGitLabCI } from './helpers/gitlabCI';

import { corsOptions, helmetOptions } from "./config";

const app: Application = express();

const logFile = !isGitLabCI() ? fs.createWriteStream("logs/debug.log", { flags: "a" }) : { write: () => false};

// noinspection JSValidateJSDoc
/**
 * @param  {Array<unknown>} args are the arguments passed to the log function from the "debug" library
 * @description Override the log() function to be able to log into different log files.
 */
function log(...args: unknown[]) {
    if(isGitLabCI()) return;
    logFile.write(
        '[' + (new Date()).toISOString().replace(/T/, ' ').replace(/\..+/, '') +
        '] NODEJS : ' +
        stripAnsi(args.toString()) + "\n");

    return process.stderr.write(util.format(...args) + "\n");
}

log('Server initialization');

debug.log = log;

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.set("twig options", {
    strict_variables: true,
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));

// HTTP Security
app.use(helmet.contentSecurityPolicy(helmetOptions));

app.use(cors(corsOptions));
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

initializeRoutes(app);

// catch 404 and forward to error handler
app.use((_req: Request, res: Response) => {
    res.redirect('/');
    // next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.locals = {
        labelApp: "Sample App",
    };
    next();
});

export { app };
