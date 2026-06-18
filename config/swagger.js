const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Company API',
            version: '1.0.0',
            description: 'Company and Employee Management API'
        },
        servers: [
            {
                url: process.env.APP_URL
            }
        ]
    },
    apis: ['./Routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;