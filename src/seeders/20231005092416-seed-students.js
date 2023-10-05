'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const students = [];

    for (let i = 1; i <= 10; i++) {
      students.push({
        firstName: 'Nome' + i,
        lastName: 'Cognome' + i,
        email: 'studente' + i + '@example.com',
        points: Math.floor(Math.random() * (970 - 30 + 1)) + 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Students', students, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
