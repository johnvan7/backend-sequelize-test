const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
