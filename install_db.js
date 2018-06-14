var user_arg = process.argv[2];
var password_arg = process.argv[3];
var db_arg = process.argv[4];

var fs = require('fs');
var path = require('path');

var dbsetting = {
  development: {
    username: '',
    password: '',
    database: '',
    host: 'localhost',
    timezone: '+09:00',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  test: {
    username: '',
    password: '',
    database: '',
    host: 'localhost',
    timezone: '+09:00',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: 'localhost',
    timezone: '+09:00',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
};

dbsetting.development.username = user_arg;
dbsetting.development.password = password_arg;
dbsetting.development.database = db_arg;

dbsetting.test.username = user_arg;
dbsetting.test.password = password_arg;
dbsetting.test.database = db_arg;

dbsetting.production.username = user_arg;
dbsetting.production.password = password_arg;
dbsetting.production.database = db_arg;

const dbsetStr = JSON.stringify(dbsetting);
fs.writeFileSync(__dirname + '/config/sequelize.json', dbsetStr, 'utf8');

const exec = require('child_process').exec;
exec(__dirname + '/models/index.js');


const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/sequelize.json')[env];

var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const db = require('./models');

sequelize.Sequelize.Promise.all([
  db.User.sync(),
  db.Base_Cont.sync(),
  db.Monthly_Cont.sync(),
  ])
  .then(() => {
    console.log('DB Connection success.');
    console.log('Successful init DB\n');
    process.exit();
  })
  .catch(err =>{
    console.error(err);
    console.log('DB Connection error Please make sure DB is running\n');
    process.exit();
  });