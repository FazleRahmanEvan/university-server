import { z } from "zod";

// Define Zod schema for name
const userNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }).trim(),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
});

// Define Zod schema for guardian
const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(1, { message: "Father's name is required" })
    .trim(),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required" })
    .trim(),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required" }),
});

// Define Zod schema for local guardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: "Local guardian's name is required" }),
  occupation: z
    .string()
    .min(1, { message: "Local guardian's occupation is required" }),
  contactNo: z
    .string()
    .min(1, { message: "Local guardian's contact number is required" }),
  address: z
    .string()
    .min(1, { message: "Local guardian's address is required" }),
});

// Define Zod schema for the student
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female", "other"]),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: "Invalid email address" }),
      contactNo: z.string().min(1),

      emergencyContactNo: z
        .string()
        .min(1, { message: "Emergency contact number is required" }),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
          errorMap: () => ({ message: "Invalid blood group" }),
        })
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: "Present address is required" }),
      permanentAddress: z
        .string()
        .min(1, { message: "Permanent address is required" }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidation = {
  studentValidationSchema: createStudentValidationSchema,
};
