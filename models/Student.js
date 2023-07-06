import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, require: true },
  age: { type: String, require: true },
  fee: { type: String, require: true },
});

const Student = mongoose.model("Crud", StudentSchema);
console.log("Student CRETAED");

export default Student;
