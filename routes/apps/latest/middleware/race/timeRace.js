export const timeoutMiddleware = (_req, res, next) => {
    const timeout = 3000;
    const timer = setTimeout(() => {
        res.status(503).send('Request timed out!');
    }, timeout);
    res.on('finish', () => {
        clearTimeout(timer);
    });
    next();
};
