import React, { useState } from "react";
import "./ForgotPasswordPage.css";
// import { useNavigate } from "react-router-dom";

export const ForgotPasswordPage = () => {
  // const navigate = useNavigate();
  const [forgotState, setForgotState] = useState({
    email: "",
  });

  const { email } = forgotState;

  //Handle change from inputs
  const handleForgotChange = (e) => {
    const { name, value } = e.target;
    setForgotState({
      [name]: value,
    });
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    // forgot(forgotState, navigate);
  };

  return (
    <section className="forgot-container">
      <div className="forgot-wrapper">
        <div className="forgot-form">
          <form onSubmit={handleForgotSubmit}>
            <h2>Forgot Password</h2>

            <label htmlFor="email">
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleForgotChange}
              />
            </label>

            <button className="submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
