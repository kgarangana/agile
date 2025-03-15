import React from "react";
import { useNavigate } from "react-router-dom";
import { House, Person, Envelope, Lock, Telephone } from "react-bootstrap-icons"; // Icons for features
import logo from "./logo.png"; // Import your logo image
import "./WelcomePage.css"; // Import your CSS file

const WelcomePage = () => {
  const navigate = useNavigate();


  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <div className="hero-section bg-gradient-primary text-white text-center py-5">
        <div className="container">
          {/* Hotel Name with Gradient Text and Logo */}
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={logo}
              alt="Hotel Logo"
              style={{ width: "100px", height: "100px", marginRight: "30px" }}
            />
            <h1
              className="display-4 mb-3"
              style={{
                background: "linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #f6d365)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
             BELLWOOD HOTEL
            </h1>
          </div>
          <p className="lead mb-4">
            Your one-stop solution for seamless hotel management.
          </p>
          <div className="d-flex justify-content-center gap-3">
           
            <button
              className="btn btn-outline-light btn-lg"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <House size={48} className="text-primary" />
              </div>
              <h3>Easy Booking</h3>
              <p>
                Book rooms effortlessly with our user-friendly interface.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <Person size={48} className="text-primary" />
              </div>
              <h3>Role-Based Access</h3>
              <p>
                Manage your hotel with role-specific dashboards for admins,
                receptionists, and customers.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <Envelope size={48} className="text-primary" />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Get round-the-clock support for all your queries and issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Join us today and experience the best in hotel management.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleRegisterClick}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;