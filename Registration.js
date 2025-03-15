import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Person, Envelope, Lock, Telephone, House } from "react-bootstrap-icons";
import "./Registration.css"; // Custom CSS for styling

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await registerUser(formData);
        if (response.success) {
          setMessage("Registration successful! Redirecting to login...");
          setTimeout(() => navigate("/login"), 2000);
        } else {
          setMessage("Registration failed. Please try again.");
        }
      } catch (err) {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  const registerUser = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1000);
    });
  };

  return (
    <div className="registration-page">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg border-0 p-4 rounded-4 custom-card">
          <h2 className="text-center text-primary">Create an Account</h2>
          <p className="text-center">Join us today!</p>
          {message && <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>{message}</div>}
          <form onSubmit={handleSubmit}>
            {["name", "email", "password", "confirmPassword", "phone", "address"].map((field, index) => (
              <div className="mb-3" key={index}>
                <div className="input-group">
                  <span className="input-group-text">
                    {field === "name" && <Person />} 
                    {field === "email" && <Envelope />} 
                    {field.includes("password") && <Lock />} 
                    {field === "phone" && <Telephone />} 
                    {field === "address" && <House />} 
                  </span>
                  <input
                    type={field.includes("password") ? "password" : "text"}
                    className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                  />
                </div>
                {errors[field] && <div className="invalid-feedback d-block">{errors[field]}</div>}
              </div>
            ))}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">Register</button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p>Already have an account? <a href="/login" className="text-primary">Login here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
