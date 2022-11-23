import { DataTypes } from "sequelize";
import db from "../db";

export default db.define("post", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
