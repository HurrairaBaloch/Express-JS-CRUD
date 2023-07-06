import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hurairabaloch996:Huraira@cluster0.23sonw2.mongodb.net/"
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
