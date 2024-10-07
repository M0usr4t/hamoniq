const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');

const User = sequelize.define('Users', {
    userId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    spotifyUserId:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.JSON, 
        allowNull: true,
    },
    accessToken: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    refreshToken: {
        type: DataTypes.STRING, 
        allowNull: false,
    }
},  {
        timestamps: false,
    }
);
module.exports = User;