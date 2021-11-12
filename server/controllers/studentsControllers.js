import StudentData from "../models/studentModels.js";

export const getStudents = async (req, res) => {
  //ini buat get dan try catch ini buat respon dari si client buat ke server nya buat fetch data komunikasi 2 arah gitu
  try {
    const allStudents = await StudentData.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createStudents = async (req, res) => {
  const studentr = req.body;
  const newStudent = new StudentData(studentr); //(studentr ini variabel)
  try {
    await newStudent.save(); //nyimpen nya nunggu dulu sih kalo banyak ya asinkron siapa cepet
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  //201 itu accept 409 conflict bisa dilihat http fungsi code
};
