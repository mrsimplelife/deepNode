const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");
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
