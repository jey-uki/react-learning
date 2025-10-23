import React, { useState } from "react";
import * as Yup from "yup";
// import "../../styles/RegistrationForm.css";

// Custom Yup messages + strong password rules
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Name must have at least 2 characters")
    .required("Full name is required"),

  age: Yup.number()
    .typeError("Please enter a valid number for age")
    .required("Age is required")
    .min(18, "You must be at least 18 years old")
    .max(100, "Age must be less than 100"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  // Updated Password validation
  password: Yup.string()
    .required("Password is required")
    .test(
      "password-strength",
      "Password must be at least 6 characters long, include uppercase, lowercase, number, and special character",
      (value) => {
        if (!value) return false;
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return regex.test(value);
      }
    ),

  gender: Yup.string().required("Please select your gender"),
  country: Yup.string().required("Please select your country"),
  skills: Yup.array().min(1, "Please select at least one skill"),
  bio: Yup.string().max(300, "Bio cannot exceed 300 characters"),
});

function RegistrationForm() {
  const defaultValues = {
    fullName: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
    bio: "",
  };

  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const countries = [
    "Select",
    "Srilanka",
    "India",
    "USA",
    "UK",
    "Canada",
    "Australia",
  ];
  const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedSkills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);
        return { ...prev, skills: updatedSkills };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Real-time validation per field
    Yup.reach(validationSchema, name)
      .validate(type === "checkbox" ? [...formData.skills, value] : value)
      .then(() => setErrors((prev) => ({ ...prev, [name]: "" })))
      .catch((err) => setErrors((prev) => ({ ...prev, [name]: err.message })));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.info("Submitted Data:", JSON.stringify(formData, null, 2));
        alert("Form submitted successfully! Check console for JSON data.");

        // Reset form
        setFormData(defaultValues);
        setErrors({});
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        {/* Age */}
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        {errors.age && <p className="error">{errors.age}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Gender */}
        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        {/* Country */}
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          {countries.map((c) => (
            <option key={c} value={c === "Select" ? "" : c}>
              {c}
            </option>
          ))}
        </select>
        {errors.country && <p className="error">{errors.country}</p>}

        {/* Skills */}
        <label>Skills</label>
        <div className="checkbox-group">
          {skillsList.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
              />
              {skill}
            </label>
          ))}
        </div>
        {errors.skills && <p className="error">{errors.skills}</p>}

        {/* Bio */}
        <label>Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell something about yourself..."
        ></textarea>
        {errors.bio && <p className="error">{errors.bio}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
