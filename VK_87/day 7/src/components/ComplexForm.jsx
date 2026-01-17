import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../validation/formSchema";

const ComplexForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      skills: [],
      terms: false,
    },
  });

  const selectedSkills = watch("skills");

  const onSubmit = async (data) => {
    // Demo: simulate API call
    await new Promise((r) => setTimeout(r, 800));

    alert("Form submitted successfully ✅\n\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div style={{ maxWidth: 520, margin: "30px auto", padding: 16 }}>
      <h2>React Hook Form + Yup (Complex Form)</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Full Name */}
        <div style={{ marginBottom: 12 }}>
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="Enter full name"
            style={{ width: "100%", padding: 8 }}
          />
          <p style={{ color: "red" }}>{errors.fullName?.message}</p>
        </div>

        {/* Email */}
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
            style={{ width: "100%", padding: 8 }}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            style={{ width: "100%", padding: 8 }}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: 12 }}>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            style={{ width: "100%", padding: 8 }}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        {/* Age */}
        <div style={{ marginBottom: 12 }}>
          <label>Age</label>
          <input
            type="text"
            {...register("age")}
            placeholder="Enter age"
            style={{ width: "100%", padding: 8 }}
          />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

        {/* Gender (Radio) */}
        <div style={{ marginBottom: 12 }}>
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" value="male" {...register("gender")} /> Male
            </label>
            {"  "}
            <label>
              <input type="radio" value="female" {...register("gender")} /> Female
            </label>
            {"  "}
            <label>
              <input type="radio" value="other" {...register("gender")} /> Other
            </label>
          </div>
          <p style={{ color: "red" }}>{errors.gender?.message}</p>
        </div>

        {/* Skills (Checkbox) */}
        <div style={{ marginBottom: 12 }}>
          <label>Skills (select at least 1)</label>
          <div>
            <label>
              <input type="checkbox" value="React" {...register("skills")} /> React
            </label>
            {"  "}
            <label>
              <input type="checkbox" value="JS" {...register("skills")} /> JS
            </label>
            {"  "}
            <label>
              <input type="checkbox" value="CSS" {...register("skills")} /> CSS
            </label>
          </div>

          <div style={{ fontSize: 12, marginTop: 6 }}>
            Selected: {selectedSkills?.length ? selectedSkills.join(", ") : "None"}
          </div>

          <p style={{ color: "red" }}>{errors.skills?.message}</p>
        </div>

        {/* Terms */}
        <div style={{ marginBottom: 12 }}>
          <label>
            <input type="checkbox" {...register("terms")} /> I accept terms & conditions
          </label>
          <p style={{ color: "red" }}>{errors.terms?.message}</p>
        </div>

        {/* Buttons */}
        <button disabled={isSubmitting} type="submit" style={{ padding: "10px 14px" }}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <button
          type="button"
          onClick={() => reset()}
          style={{ padding: "10px 14px", marginLeft: 10 }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ComplexForm;
