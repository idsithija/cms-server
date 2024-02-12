import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../../sequelize";
import { Password } from "../../../services/password";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.addHook("beforeSave", async (user: User) => {
  if (user.changed("password")) {
    const hashedPassword = await Password.toHash(user.password);
    user.password = hashedPassword;
  }
});

User.prototype.toJSON = function () {
  var { password, ...otherData } = Object.assign({}, this.get());

  return otherData;
};

export default User;
