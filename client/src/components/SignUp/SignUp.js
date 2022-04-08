import React, { useState } from "react";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../../redux/reducers/userReducer";

export const SignUp = ({ handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userSignUpState, setUserSignUpState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { name, email, password, passwordConfirm } = userSignUpState;
  const user = useSelector((state) => state.user?.userState);

  //Handle SignUp Change from inputs
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setUserSignUpState({
      ...userSignUpState,
      [name]: value,
    });
  };

  const handleSignUpSubmit = async (e) => {
    try {
      e.preventDefault();
      // const Origin = window.location.origin;
      const res = await axios.post(
        `http://localhost:3000/api/v1/users/signup`,
        userSignUpState
      );
      const { data } = res;

      dispatch(
        setUser({
          ...user,
          userInfo: [data],
        })
      );
      toast.success("Sign Up Successfully");
      navigate(`/`);
    } catch (error) {
      console.log("error = ", error);
      if (error.response) {
        toast.error("Sign Up Fail! There are something wrong in your input!");
      }
    }
  };

  return (
    <div className="sign-form sign-up-container">
      <div className="form-container">
        <form onSubmit={handleSignUpSubmit}>
          <h2>Create an account</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleSignUpChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={handleSignUpChange}
          />

          <button className="submit" type="submit">
            Sign Up
          </button>
          <p className="panel-switcher" onClick={() => handleClick()}>
            {" "}
            Already have an account ?
          </p>
        </form>
      </div>
    </div>
  );
};
