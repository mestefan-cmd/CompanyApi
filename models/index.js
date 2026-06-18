const Company = require('./company');
const Employee = require('./employee');

Company.hasMany(Employee, { foreignKey: 'company_id' });
Employee.belongsTo(Company, { foreignKey: 'company_id' });

module.exports = { Company, Employee };
