import cors from 'cors';
import express from 'express';
import { logMiddleware } from '#apps/server/routes/apps/latest/middleware/log';
import { responseSentMiddleware } from '#apps/server/routes/apps/latest/middleware/race/resSentRace';
import { timeoutMiddleware } from '#apps/server/routes/apps/latest/middleware/race/timeRace';
import { corsOptions } from '#apps/server/server.cors.config';
import { helmetConfig } from '#apps/server/server.helmet.config';
export function initApp(app) {
    try {
        app.disable('x-powered-by');
        app.use(express.json());
        app.use(logMiddleware);
        app.use(responseSentMiddleware);
        app.use(helmetConfig());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors(corsOptions));
        app.use(timeoutMiddleware);
    }
    catch (_) {
        assert('error! loading not complete.');
    }
}
