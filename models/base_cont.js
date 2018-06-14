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

module.exports = (sequelize, DataTypes) => sequelize.define(
	'Base_Cont',
	{
		LessorName:{
			type: Sequelize.STRING(128),
			allowNull: false,
		},
		HirerName:{
			type: Sequelize.STRING(128),
			allowNull: false,
		},
		BrokerName:{
			type: Sequelize.STRING(128),
			allowNull: false,
		},
		Address:{
			type: Sequelize.STRING(128),
			allowNull: false,
		},
		// contract fee?
		Payment:{
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		DownPayment:{
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		leaseFee:{
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		ContractDate:{
			type: Sequelize.DATE,
			allowNull: false,
		},
		ExpireDate:{
			type: Sequelize.DATE,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	},
);