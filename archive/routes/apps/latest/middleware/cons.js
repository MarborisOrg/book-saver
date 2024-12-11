const blockIpMsg = 'permission denied';
const checkIP = (req, res, next) => {
    const clientIP = req.ip;
    if (clientIP && $.env.config.ALLOWED_IPS.includes(clientIP)) {
        next();
    }
    else {
        const ip = req.headers['x-forwarded-for']
            ? Array.isArray(req.headers['x-forwarded-for'])
                ? req.headers['x-forwarded-for'][0]
                : req.headers['x-forwarded-for']
            : req.socket.remoteAddress;
        if (!ip) {
            res.status(403).send(blockIpMsg);
            return;
        }
        const clientIP = ip.includes(':') ? ip.split(':').slice(-1)[0] : ip;
        if (clientIP && $.env.config.ALLOWED_IPS.includes(clientIP)) {
            next();
        }
        else {
            res.status(403).send(blockIpMsg);
        }
    }
};
export { checkIP };
