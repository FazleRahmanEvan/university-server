import express from "express";
import { StudentControllers } from "./student.controller";
import validateRequest from "../../middlewares/validateRequest";
import { updateStudentValidationSchema } from "./student.validation";

const router = express.Router();

//will call controller func

router.get("/", StudentControllers.getAllStudents);

router.delete("/:studentId", StudentControllers.deleteStudent);

router.patch(
  "/:studentId",
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent
);
export const StudentRoutes = router;
