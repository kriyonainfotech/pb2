// userModel.js
const { DataTypes } = require('sequelize');
const Sequelize = require('../config/db');

const User = Sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role:{
    type:DataTypes.ENUM("user","admin"),
    allowNull:false,
    defaultValue:"user"
  }
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
