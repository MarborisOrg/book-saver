import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { whereIsHere } from '../../app.where.js';
export default function (app, port) {
    const options = {
        swaggerDefinition: {
            swagger: '2.0',
            info: {
                title: 'Book project',
                description: 'API endpoints for a mini book services documented on swagger',
                contact: {
                    name: 'MRB',
                    email: 'mehrabshafae@gmail.com',
                    url: 'https://github.com/S-MRB-S',
                },
                version: '4.0.0',
            },
            host: `127.0.0.1:${port}`,
            basePath: '/',
            schemes: ['http', 'https'],
        },
        apis: [whereIsHere('src/apps/server/**/*.ts')],
    };
    const swaggerSpec = swaggerJsdoc(options);
    void (function () {
        app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.get('/docs.json', (_req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        });
    })();
}
