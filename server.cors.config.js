export const corsOptions = {
    origin: (origin, callback) => {
        if (!origin ||
            $.env.config.ALLOWED_IPS.some((ip) => origin.includes(ip))) {
            callback(null, true);
        }
        else {
            callback(new Error('Not Allowed'), false);
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Custom-Header'],
    credentials: true,
    maxAge: 3600,
    preflightContinue: false,
    optionsSuccessStatus: 200,
};
