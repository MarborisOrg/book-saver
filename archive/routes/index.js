import { AllApps } from './apps/a.js';
import { loadRoutes } from './modules/misc/apps-routes.js';
export default async function (app) {
    try {
        await loadRoutes(app, AllApps);
    }
    catch (_) {
        log.info('error! loading not complete.');
    }
}
