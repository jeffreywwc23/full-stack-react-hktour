import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserIcon from "../../assets/img/users/default.jpg";
import { FaEnvelope, FaBell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../../redux/reducers/userReducer";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.userState);

  const [updatePasswordState, setUpdatePasswordState] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  const { passwordCurrent, password, passwordConfirm } = updatePasswordState;

  const handleUpdatePasswordChange = (e) => {
    const { name, value } = e.target;
    setUpdatePasswordState({
      ...updatePasswordState,
      [name]: value,
    });
  };

  const handleUpdatePasswordSubmit = async (e) => {
    try {
      e.preventDefault();

      // const Origin = window.location.origin;
      const res = await axios.patch(
        `http://localhost:3000/api/v1/users/updateMyPassword`,
        updatePasswordState,
        {
          headers: {
            Authorization: `Bearer ${user.userInfo[0].token}`,
          },
        }
      );
      const { data } = res;
      console.log("res = ", res);

      dispatch(
        setUser({
          ...user,
          userInfo: [data],
        })
      );

      toast.success("Update Password Successfully");
      navigate("/");
    } catch (error) {
      console.log("error = ", error);
      if (error.response) {
        toast.error("Update Password Fail!");
      }
    }
  };

  return (
    <div className="profile-content">
      <div className="actions">
        <FaEnvelope className="profile-content-icon profile-content-envelope" />
        <FaBell className="profile-content-icon profile-content-bell" />
      </div>

      <div className="pic">
        {/* <img src={UserIcon} alt="profile" /> */}
        <img src={`assets/img/users/default.jpg`} alt="profile" />
        {user ? (
          <>
            <h2>{user.userInfo[0]?.userData?.name}</h2>
            <span>{user.userInfo[0]?.userData?.role}</span>
            <span>{user.userInfo[0]?.userData?.email}</span>
          </>
        ) : null}
      </div>

      <div className="profile-details-container">
        <span className="form-header">Password Change</span>

        <div className="form-container">
          <form onSubmit={handleUpdatePasswordSubmit}>
            <div className="input-group">
              <span>Current Password</span>
              <input
                className="input-field"
                type="password"
                name="passwordCurrent"
                value={passwordCurrent || ""}
                onChange={handleUpdatePasswordChange}
                required
              />
            </div>
            <div className="input-group">
              <span>New Password</span>
              <input
                className="input-field"
                type="password"
                name="password"
                value={password || ""}
                onChange={handleUpdatePasswordChange}
                required
              />
            </div>
            <div className="input-group">
              <span>Confirm New Password</span>
              <input
                className="input-field"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm || ""}
                onChange={handleUpdatePasswordChange}
                required
              />
            </div>

            <button className="profile-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
