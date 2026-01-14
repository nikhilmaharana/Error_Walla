import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// Yup validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  age: yup
    .number()
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .required("Age is required"),
}).required()

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    alert("Form submitted successfully")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>

      <input placeholder="Name" {...register("name")} />
      <p>{errors.name?.message}</p>

      <input placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>

      <button type="submit">Submit</button>
    </form>
  )
}

export default RegisterForm
