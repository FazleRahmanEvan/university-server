// import Joi from "joi";

// const userNameValidationSchema = Joi.object({
//   firstName: Joi.string()
//     .trim()
//     .required()
//     .regex(/^[A-Z][a-z]*$/)
//     .messages({
//       "string.pattern.base":
//         "{#label} must start with an uppercase letter and be followed by lowercase letters.",
//       "any.required": "First name is required.",
//     }),
//   middleName: Joi.string().optional().allow(""), // Optional
//   lastName: Joi.string()
//     .required()
//     .pattern(/^[a-zA-Z]+$/)
//     .messages({
//       "string.pattern.base":
//         "Last name must contain only alphabetic characters.",
//       "any.required": "Last name is required.",
//     }),
// });

// // Joi schema for TGuardian
// const guardianValidationSchema = Joi.object({
//   fatherName: Joi.string().trim().required().messages({
//     "any.required": "Father's name is required.",
//   }),
//   fatherOccupation: Joi.string().trim().required().messages({
//     "any.required": "Father's occupation is required.",
//   }),
//   fatherContactNo: Joi.string().required().messages({
//     "any.required": "Father's contact number is required.",
//   }),
//   motherName: Joi.string().required().messages({
//     "any.required": "Mother's name is required.",
//   }),
//   motherOccupation: Joi.string().required().messages({
//     "any.required": "Mother's occupation is required.",
//   }),
//   motherContactNo: Joi.string().required().messages({
//     "any.required": "Mother's contact number is required.",
//   }),
// });

// // Joi schema for TLocalGuardian
// const localGuardianValidationSchema = Joi.object({
//   name: Joi.string().required().messages({
//     "any.required": "Local guardian's name is required.",
//   }),
//   occupation: Joi.string().required().messages({
//     "any.required": "Local guardian's occupation is required.",
//   }),
//   contactNo: Joi.string().required().messages({
//     "any.required": "Local guardian's contact number is required.",
//   }),
//   address: Joi.string().required().messages({
//     "any.required": "Local guardian's address is required.",
//   }),
// });

// // Joi schema for TStudent
// const studentValidationSchema = Joi.object({
//   id: Joi.string().required().messages({
//     "any.required": "Student ID is required.",
//   }),
//   name: userNameValidationSchema,
//   gender: Joi.string().valid("male", "female", "other").required().messages({
//     "any.only": "{#value} is not a valid gender.",
//     "any.required": "Gender is required.",
//   }),
//   dateOfBirth: Joi.string().optional(), // Optional
//   email: Joi.string().email().required().messages({
//     "string.email": "Email must be valid.",
//     "any.required": "Email is required.",
//   }),
//   contactNo: Joi.string().required().messages({
//     "any.required": "Contact number is required.",
//   }),
//   emergencyContactNo: Joi.string().required().messages({
//     "any.required": "Emergency contact number is required.",
//   }),
//   bloogGroup: Joi.string()
//     .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
//     .optional()
//     .messages({
//       "any.only": "{#value} is not a valid blood group.",
//     }),
//   presentAddress: Joi.string().required().messages({
//     "any.required": "Present address is required.",
//   }),
//   permanentAddress: Joi.string().required().messages({
//     "any.required": "Permanent address is required.",
//   }),
//   guardian: guardianValidationSchema.required().messages({
//     "any.required": "Guardian information is required.",
//   }),
//   localGuardian: localGuardianValidationSchema.required().messages({
//     "any.required": "Local guardian information is required.",
//   }),
//   profileImg: Joi.string().optional().allow(""), // Optional
//   isDeleted: Joi.boolean().default(false), // Default to false
// });

// export default studentValidationSchema;
