import * as yup from "yup";

export const formSchema = yup.object({
  fullName: yup.string().required("Full name is required").min(3, "Min 3 chars"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min 6 chars")
    .matches(/[0-9]/, "Must contain at least 1 number"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Must be 18+"),
  gender: yup.string().required("Select gender"),
  skills: yup
    .array()
    .min(1, "Select at least 1 skill")
    .required("Skills required"),
  terms: yup.boolean().oneOf([true], "You must accept terms"),
});
