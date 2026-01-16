import * as yup from "yup";

export const registrationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Must be at least 18 years old")
    .required("Age is required"),

  gender: yup.string().required("Gender is required"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms"),
});
