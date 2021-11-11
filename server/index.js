import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "../server/routes/student.js";
//ga bisa lebih dari 20mb json nya
const app = express();

app.use("/students", studentRoutes);
app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://senapahlevi:test@cluster0.zn2sl.mongodb.net/learnbeginner?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`connection is established and running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));
