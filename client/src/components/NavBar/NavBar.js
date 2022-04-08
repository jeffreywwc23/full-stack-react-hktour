import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FaTimes, FaBars } from "react-icons/fa";
// import UserIcon from "../../assets/img/users/default.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userReducer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NavBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.userState);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = async () => {
    // const Origin = window.location.origin;
    const res = await axios.get(`http://localhost:3000/api/v1/users/logout`);
    const { data } = res;

    dispatch(
      setUser({
        ...user,
        userInfo: [],
      })
    );

    toast.success(data.status);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        HKTour.com
      </NavLink>

      <div className="menu-icon" onClick={handleClick}>
        {click ? (
          <FaTimes className="menu-icon-times" />
        ) : (
          <FaBars className="menu-icon-bars" />
        )}
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/tours"
            className="nav-links"
            onClick={closeMobileMenu}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#1888ff",
                  }
                : { color: "#FFFFFF" }
            }
          >
            All Tours
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about-us"
            className="nav-links"
            onClick={closeMobileMenu}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#1888ff",
                  }
                : { color: "#FFFFFF" }
            }
          >
            About Us
          </NavLink>
        </li>

        {user?.userInfo.length > 0 ? (
          <>
            <li className="nav-item">
              <div
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  logout();
                }}
              >
                Log Out
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                to="/user"
                className="nav-links user-link"
                onClick={closeMobileMenu}
              >
                <div className="nav-user-container">
                  <img
                    src={"/assets/img/users/default.jpg"}
                    alt="user"
                    className="nav-user-img"
                  />

                  <span>
                    {user?.userInfo[0]?.userData?.name
                      .split(" ")
                      .slice(0, 1)
                      .join(" ")}
                  </span>
                </div>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink
                to="/sign-in-sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#1888ff",
                      }
                    : { color: "#FFFFFF" }
                }
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
