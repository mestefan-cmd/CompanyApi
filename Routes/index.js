const companyRoutes  = require('./companyRoutes');
const employeeRoutes = require('./employeeRoutes');
const categoryRoutes = require('./categoryRoutes');
const authRoutes     = require('./authRoutes');
const authenticate   = require('../middleware/auth');

module.exports = (app) => {
    app.use('/auth',       authRoutes);
    app.use('/companies',  authenticate, companyRoutes);
    app.use('/employees',  authenticate, employeeRoutes);
    app.use('/categories', authenticate, categoryRoutes);
};
