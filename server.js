require('dotenv').config();
const express = require('express');
const { sequelize } = require('./lib');
const registerRoutes = require('./Routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const app = express();


app.get('/swagger.json', (req, res) => {
    res.json(swaggerSpec);
});


app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


app.use(express.json());
sequelize.sync({alter: true})
    .then(() => {
        console.log('Database connected.');
        
        registerRoutes(app);
        app.listen(process.env.PORT, () => {
            console.log(`Server running on ${process.env.APP_URL}`);
        });
    })
    .catch((err) => {
        console.error('Could not connect to database:', err.message);
        process.exit(1);
    });
