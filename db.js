const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:chats.sqlite')

class Chat extends Model {}

Chat.init({
chat: DataTypes.STRING,
status: DataTypes.BOOLEAN,
}, { sequelize })