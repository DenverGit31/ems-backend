module.exports = (sequelize, DataTypes) => {
  const userLoginCredentials = sequelize.define(
    "userLoginCredentials",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        required: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      account_status: {
        type: DataTypes.BOOLEAN,
        required: true,
        allowNull: true,
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
    { tableName: "userLoginCredentials", timestamps: false }
  );
  return userLoginCredentials;
};
