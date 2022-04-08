import React, { useState } from "react";
import "./SignIn.css";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userReducer";
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export const SignIn = ({ login, googleLogin, facebookLogin, handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.userState);

  const [userLoginState, setUserLoginState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userLoginState;

  //Handle change from inputs
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUserLoginState({
      ...userLoginState,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("hi");
      const Origin = window.location.origin;
      // const res = await axios.post(
      //   `${Origin}/api/v1/users/login`,
      //   userLoginState
      // );
      const res = await axios.post(
        `http://localhost:3000/api/v1/users/login`,
        userLoginState
      );
      const { data } = res;

      dispatch(
        setUser({
          ...user,
          userInfo: [data],
        })
      );

      toast.success("Sign In Successfully!");
      navigate(`/`);
    } catch (error) {
      console.log("error = ", error);
      if (error.response) {
        toast.error("Sign In Fail! Invalid email or password!");
      }
    }
  };

  const responseGoogle = (response) => {
    const email = response.profileObj;
    const GoogleAccessToken = response.accessToken;
    googleLogin(email, GoogleAccessToken, navigate);
  };

  const responseFacebook = (response) => {
    console.log(response);
    const emailFromFacebook = response.email;
    const FbAccessToken = response.accessToken;
    facebookLogin(emailFromFacebook, FbAccessToken, navigate);
  };

  return (
    <div className="sign-form login-container">
      <div className="form-container">
        <form onSubmit={(e) => handleLoginSubmit(e)}>
          <h2>Welcome back!</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleLoginChange}
          />

          <button className="submit" type="submit">
            Sign In
          </button>

          <div className="sign-social-media-icons">
            <div className="social-media-icon">
              <GoogleLogin
                clientId="332058097001-td97j17srh0cth4sqv6jcsqcjhemk9pn.apps.googleusercontent.com"
                render={(renderProps) => (
                  <IoLogoGoogle
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  />
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            {/* <div className="social-media-icon">
                  <FacebookLogin
                      appId="3561903037233625"
                      callback={responseFacebook}
                      fields="first_name, last_name, email"
                      scope="public_profile, email"
                      returnScopes={true}
                      disableMobileRedirect={true}
                      render={renderProps => (
                          <IoLogoFacebook
                          // onClick={renderProps.onClick}
                          />
                      )}
                  />
                </div> */}
          </div>

          <p className="forgot-password">
            <Link to="/forgot-password-page">Forgot Password?</Link>
          </p>
          <p className="panel-switcher" onClick={() => handleClick()}>
            Don't have an account?
          </p>
        </form>
      </div>
    </div>
  );
};
