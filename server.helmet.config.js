import helmet from 'helmet';
const helmetConfig = () => {
    return helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", $.env.config.scriptSrc],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: [],
            },
        },
        hidePoweredBy: true,
        frameguard: { action: 'deny' },
        xssFilter: true,
        noSniff: true,
        hsts: {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true,
        },
        referrerPolicy: { policy: 'no-referrer' },
    });
};
export { helmetConfig };
