import mongoose from "mongoose";

const studerntSchema = mongoose.Schema({
  //sesuai kan di client ada kok sen sama BE dan FE harus sama
  regisNo: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
});

const student = mongoose.model("student", studerntSchema);
export default student;
