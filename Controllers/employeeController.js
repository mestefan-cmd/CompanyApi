const { Op, Employee } = require('../lib');

exports.getAll = async (req, res) => {
    try {
        const { search } = req.query;

        const employees = await Employee.findAll({
            where: search ? {
                [Op.or]: [
                    { name:  { [Op.like]: `%${search}%` } },
                    { email: { [Op.like]: `%${search}%` } }
                ]
            } : {}
        });
        if (search && employees.length === 0) {
            return res.status(404).json({ error: 'No employees found matching your search' });
        }
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getById = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.update = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.update(req.body);
        res.json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.remove = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
