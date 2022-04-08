import React, { useState } from "react";
import "./SignInAndSignUp.css";
import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";

export const SignInAndSignUp = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <section className="sign-container">
      <div className={active ? "sign-wrapper active" : "sign-wrapper"}>
        <SignIn handleClick={handleClick} />
        <SignUp handleClick={handleClick} />

        <div className="sub-container">
          <div className="image">
            <div className="image-text image-text-up">
              <h2>New here?</h2>
              <p>Start a new journey by signing up!</p>
            </div>
            <div className="image-text image-text-in">
              <h2>One of us?</h2>
              <p>Log in and Share your travelogue with us!</p>
            </div>
            <div className="image-btn" onClick={() => handleClick()}>
              <span className="image-text-up">Sign Up</span>
              <span className="image-text-in">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
