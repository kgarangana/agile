import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Envelope, Lock, Person } from "react-bootstrap-icons"; // Icons for inputs

const Login = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "customer", // Default role
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for login error messages
  const [loginError, setLoginError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Simulate API call for authentication
        const response = await authenticateUser(formData);
        if (response.success) {
          // Redirect based on role
          switch (formData.role) {
            case "admin":
              navigate("/admin-dashboard");
              break;
            case "receptionist":
              navigate("/receptionist-dashboard");
              break;
            case "customer":
              navigate("/customer-dashboard");
              break;
            default:
              navigate("/");
          }
        } else {
          setLoginError("Invalid email or password.");
        }
      } catch (err) {
        setLoginError("An error occurred. Please try again.");
      }
    }
  };

  // Simulate API call for authentication
  const authenticateUser = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate successful login for demo purposes
        resolve({ success: true });
      }, 1000);
    });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-gradient-primary text-white text-center py-4">
                <h2 className="mb-0">Welcome Back!</h2>
                <p className="mb-0">Login to your account</p>
              </div>
              <div className="card-body p-4">
                {loginError && (
                  <div className="alert alert-danger">{loginError}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Envelope />
                      </span>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.email && (
                      <div className="invalid-feedback d-block">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Lock />
                      </span>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block">{errors.password}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Person />
                      </span>
                      <select
                        className="form-control"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                      >
                        <option value="admin">Admin</option>
                        <option value="receptionist">Receptionist</option>
                        <option value="customer">Customer</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                  </div>
                </form>
                <div className="mt-3 text-center">
                  <p className="mb-1">
                    Don't have an account?{" "}
                    <a href="/register" className="text-primary">
                      Register here
                    </a>
                  </p>
                  <p className="mb-0">
                    <a href="/forgot-password" className="text-primary">
                      Forgot Password?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;