export const loadRouter = async (app, routePath, basePath) => {
    try {
        const { default: router } = await import(routePath);
        app.use(basePath, router);
    }
    catch (error) {
        log.error(`[route loader] Error loading route from ${routePath}:`, error);
    }
};
