const companyRoutes = require('./companyRoutes');
const employeeRoutes = require('./employeeRoutes');

module.exports = (app) => {
    app.use('/companies', companyRoutes);
    app.use('/employees', employeeRoutes);
};
