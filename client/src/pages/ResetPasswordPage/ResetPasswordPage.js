import React, { useState } from "react";
import "./ResetPasswordPage.css";
// import { useNavigate } from "react-router-dom";

export const ResetPasswordPage = () => {
  // const navigate = useNavigate();
  const [resetPasswordState, setResetPasswordState] = useState({
    password: "",
    passwordConfirm: "",
  });
  const { password, passwordConfirm } = resetPasswordState;

  //Handle change from inputs
  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetPasswordState({
      ...resetPasswordState,
      [name]: value,
    });
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    // const token = props.match.params.token;
    // reset(resetPasswordState, token, navigate);
  };

  return (
    <section className="reset-password-container">
      <div className="reset-password-wrapper">
        <div className="reset-password-form">
          <form onSubmit={handleResetSubmit}>
            <h2>Reset Password</h2>

            <label htmlFor="password">
              <span>New Password</span>
              <input
                type="password"
                name="password"
                value={password || ""}
                onChange={handleResetChange}
              />
            </label>

            <label htmlFor="passwordConfirm">
              <span>New Comfirmed Password</span>
              <input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm || ""}
                onChange={handleResetChange}
              />
            </label>

            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
