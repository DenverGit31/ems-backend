module.exports = (sequelize, DataTypes) => {
  const departments = sequelize.define(
    "departments",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        required: true,
        allowNull: false,
        autoIncrement: true,
      },
      departner_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        required: true,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        required: true,
        allowNull: true,
      },
    },
    { tableName: "departments", timestamps: false }
  );
  return departments;
};
