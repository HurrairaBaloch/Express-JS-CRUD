import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "connection string goes here"
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
