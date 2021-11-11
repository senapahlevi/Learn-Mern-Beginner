//ini tujuan nya untuk callback di routes biar rapi dan clean aja
/*
jadi aslinya di routes adsddsja dah cukup tapi callbacknya kita pindah kesini 
tujuan tadi diatas dan kalo banyak res serta req banyak gak messy dude!
*/

import express from "express";
import { getStudents, createStudents } from "../controllers/studentsControllers.js";
import student from "../models/studentModels.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router berhasil sena!!!!");
});

export default router;
