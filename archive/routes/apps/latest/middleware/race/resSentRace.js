export const responseSentMiddleware = (_req, res, next) => {
    const originalSend = res.send.bind(res);
    const originalJson = res.json.bind(res);
    res.send = function (...args) {
        if (!res.headersSent) {
            return originalSend(...args);
        }
        else {
            log.warn('Attempted to send response after headers were sent.');
            return res;
        }
    };
    res.json = function (...args) {
        if (!res.headersSent) {
            return originalJson(...args);
        }
        else {
            log.warn('Attempted to send JSON response after headers were sent.');
            return res;
        }
    };
    next();
};
