import Student from "../models/Student.js";
const CreateDoc = async (req, res) => {
  try {
    const { age, name, fee } = req.body;
    const doc = new Student({
      name: name,
      age: age,
      fee: fee,
    });
    const result = await doc.save();
    console.log(result);

    res.redirect("/student");
  } catch (error) {
    console.log(error);
  }
};

const getAlldoc = async (req, res) => {
  try {
    const result = await Student.find();
    res.render("index", { result });
  } catch (error) {
    console.log(error);
  }
};

const UpdateDocById = async (req, res) => {
  try {
    const result = await Student.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {}
  res.redirect("/student");
};

const DeletDoc = async (req, res) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    res.redirect("/student");
  } catch (e) {}
};

const EditDoc = async (req, res) => {
  try {
    const result = await Student.findById(req.params.id);
    res.render("edit", { result });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { CreateDoc, EditDoc, DeletDoc, UpdateDocById, getAlldoc };
