const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");
console.log("comment init");
class Comment extends Model {}
Comment.init(
  {
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Comment",
    tableName: "comments",
    paranoid: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);
module.exports = Comment;
const User = require("./user");
console.log("comment associate");
Comment.belongsTo(User, { foreignKey: "commenter", targetKey: "id" });
