import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export const configDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
