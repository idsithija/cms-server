import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

interface UserAttributes {
  username: string;
  email: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public username!: string;
  public email!: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
