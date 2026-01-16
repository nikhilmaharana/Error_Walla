import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../schemas/formSchema";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data) => {
    console.log("Validated Data:", data);
    reset();
  };

  return (
    <div style={{ maxWidth: "450px", margin: "auto" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <input type="number" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message}</p>

        <select {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>

        <label>
          <input type="checkbox" {...register("terms")} /> Accept Terms
        </label>
        <p>{errors.terms?.message}</p>

        <button type="submit">Submit</button>

        {isSubmitSuccessful && (
          <p style={{ color: "green" }}>
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
