var path = require('path');
var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/sequelize.json')[env];
var sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'User',
		{
			UserID:{
				type: Sequelize.STRING(128),
				primaryKey : true,
			},
			UserPWD:{
				type: Sequelize.STRING(128),
				allowNull: false,
				defaultValue: '',
			},
			UserName:{
				type: Sequelize.STRING(128),
				allowNull: false,
				defaultValue: '',
			},
			UserClass:{
				type:Sequelize.STRING(128),
				allowNull: false,
				defaultValue: 'broker',
			},
		},
		{
			freezeTableName: true,
		},
	);
};