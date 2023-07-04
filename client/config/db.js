import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    //console.log(process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL);
    //console.log(`Connected to Mongodb database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    //console.log(`Error in mongoDB is ${error}.`.bgRed.white);
  }
};

export default connectDB;
