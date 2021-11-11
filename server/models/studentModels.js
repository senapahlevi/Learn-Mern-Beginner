import { Mongoose } from "mongoose";

const studerntSchema = mongoose.Schema({
  registerationNumber: Number,
  name: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
  subjects: [String],
});

const student = mongoose.model("student", studerntSchema);
export default student;
