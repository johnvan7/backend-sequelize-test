const router = require('express').Router();

const { Student } = require('../models');
const {Sequelize} = require("sequelize");

router.get('/ranking', async (req, res) => {
    try {
        const students = await Student.findAll({
            where: {
                points: {
                    [Sequelize.Op.between]: [50, 450],
                },
            },
            limit: 2,
        });

        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }

        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
