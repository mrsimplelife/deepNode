const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");
class User extends Model {}
console.log("user init");
User.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    underscored: false,
    modelName: "User", // We need to choose the model name
    tableName: "users",
    paranoid: false,
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
module.exports = User;
const Comment = require("./comment");
console.log("user associate");
User.hasMany(Comment, { foreignKey: "commenter", sourceKey: "id" });
