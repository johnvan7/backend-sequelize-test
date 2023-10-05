const dotenv = require('dotenv');
const express = require('express');

const Sequelize = require('sequelize');
const sequelizeConfig = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const apiRouterV1 = require('./routes/apiV1');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const sequelize = new Sequelize(
    sequelizeConfig.database,
    sequelizeConfig.username,
    sequelizeConfig.password,
    {
        host: sequelizeConfig.host,
        dialect: sequelizeConfig.dialect,
    }
);

app.use('/api/v1', apiRouterV1);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
