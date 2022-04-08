import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { NextPageToTop } from "./components/NextPageToTop/NextPageToTop";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Overview } from "./pages/Overview/Overview";
import { Tour } from "./pages/Tour/Tour";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { SignInAndSignUp } from "./pages/SignInAndSignUp/SignInAndSignUp";
import { User } from "./pages/User/User";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage/ResetPasswordPage";
import { Error } from "./pages/Error/Error";
import ToastNotification from "./utils/ToastNotification";

function App() {
  return (
    <>
      <ToastNotification />
      <NavBar />
      <NextPageToTop>
        <TransitionGroup>
          <CSSTransition timeout={450} classNames="fade">
            <div className="pages-container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/tours" element={<Overview />} />
                <Route exact path="/tours/:_id" element={<Tour />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route
                  exact
                  path="/sign-in-sign-up"
                  element={<SignInAndSignUp />}
                />
                <Route exact path="/user" element={<User />} />
                <Route path="/user/mybooking" element={<User />} />
                <Route
                  exact
                  path="/forgot-password-page"
                  element={<ForgotPasswordPage />}
                />
                <Route
                  path="/resetPassword/:token"
                  element={<ResetPasswordPage />}
                />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>

        {/* <div className="pages-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tours" element={<Overview />} />
            <Route exact path="/tours/:_id" element={<Tour />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route
              exact
              path="/sign-in-sign-up"
              element={<SignInAndSignUp />}
            />
            <Route exact path="/user" element={<User />} />
            <Route path="/user/mybooking" element={<User />} />
            <Route
              exact
              path="/forgot-password-page"
              element={<ForgotPasswordPage />}
            />
            <Route
              path="/resetPassword/:token"
              element={<ResetPasswordPage />}
            />
            <Route component={Error} />
          </Routes>
        </div> */}
      </NextPageToTop>
    </>
  );
}

export default App;
