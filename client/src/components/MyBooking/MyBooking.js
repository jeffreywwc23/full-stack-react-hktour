import React, { useState, useEffect } from "react";
import "./MyBooking.css";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../../redux/reducers/userReducer";

export const MyBooking = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user?.userState);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBookingData();
  }, [location]);

  const getBookingData = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/v1/users/my-tours",
        user.userInfo[0].token,
        {
          headers: {
            Authorization: `Bearer ${user.userInfo[0].token}`,
          },
        }
      );

      console.log("res = ", res);

      const { data } = res;

      dispatch(
        setUser({
          ...user,
          userBooking: data,
        })
      );

      //   toast.success("Getting Your Booking Data Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log("error = ", error);
      if (error.response) {
        toast.error("Sign Up Fail! There are something wrong in your input!");
      }
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <section className="my-booking-container">
        <div className="my-booking-title-container">
          <div className="my-booking-title">
            <h1>My Booking</h1>
          </div>
        </div>

        {!isLoading &&
        user.userBooking &&
        user.userBooking?.tours?.length > 0 ? (
          <>
            {user.userBooking.tours.map((tour, index) => {
              return (
                <div className="my-booking-box-container" key={index}>
                  <div className="my-booking-box-wrapper">
                    <div className="my-booking-box-item">
                      <div className="my-booking-box-item-img">
                        <img src={tour.imageCover} alt="" />
                      </div>
                      <div className="my-booking-box-item-content">
                        <span className="my-booking-box-item-code">
                          {tour.startDates[0].split("T")[0]}
                        </span>
                        <div className="my-booking-box-item-title">
                          {tour.name}
                        </div>
                        <div className="my-booking-box-item-text">{`$ ${tour.price}`}</div>
                        <button className="my-booking-box-item-button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="my-booking-box-item-pagination"></div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="my-booking-box-container">
            <h1>No Booking </h1>
          </div>
        )}
      </section>
    </>
  );
};
