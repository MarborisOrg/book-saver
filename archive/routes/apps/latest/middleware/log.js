export const logMiddleware = (req, res, next) => {
    const startTime = Date.now();
    log.info({
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        timestamp: new Date().toISOString(),
    });
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        log.info({
            message: 'Response sent',
            statusCode: res.statusCode,
            duration: `${duration}ms`,
            timestamp: new Date().toISOString(),
        });
    });
    next();
};
