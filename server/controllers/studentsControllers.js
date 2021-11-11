import student from "../models/studentModels";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createStudents = (req, res) => {
  res.send("Router berhasil sena!!!!");
};
