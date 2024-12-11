export function localhostMover(app) {
    app.use((req, res, next) => {
        if (req.hostname === 'localhost') {
            const newUrl = `https://127.0.0.1:${$.env.config.PORT}${req.originalUrl}`;
            return res.redirect(301, newUrl);
        }
        next();
    });
}
