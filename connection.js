const {Sequelize} = require('sequelize');

const database = "db_4healthy";
const username = "postgres";
const password = "7ohflSdwoK2gpTB274pd4hIrivB8LRUu";
const host = "dpg-clgoss58td7s73bjs3bg-a";
const port = "5432";

const sequelize = new Sequelize(
    database, username, password,
    {
        host: host,
        port: port,
        dialect: 'postgres',
    }
);

module.exports = {
    sequelize,
};
