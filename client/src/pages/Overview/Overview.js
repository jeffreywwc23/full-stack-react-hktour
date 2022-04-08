import React, { useEffect, useState } from "react";
import "./Overview.css";
import OverviewCards from "../../components/OverviewCards/OverviewCards";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";
import tours from "../../data/tours.json";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTours } from "../../redux/reducers/toursReducer";

export const Overview = () => {
  const dispatch = useDispatch();
  const [localTours, setLocalTours] = useState([]);
  // const tours = useSelector((state) => state.tour?);

  useEffect(() => {
    const getTours = async () => {
      try {
        const { data: result } = await axios.get(
          "http://127.0.0.1:3000/api/v1/tours"
        );

        console.log("result = ", result);
        setLocalTours(tours);
        dispatch(setTours(tours));
      } catch (error) {
        console.log("error = ", error);
      }
    };

    getTours();
  }, []);

  // console.log("localTours = ", localTours);

  return (
    <>
      {localTours.length > 0 ? (
        <>
          <section className="overview">
            <main className="overview-main">
              <h1 className="overview-title">Tours Overview</h1>
              <div className="card-container">
                {localTours?.map(({ ...otherProps }) => {
                  return <OverviewCards key={otherProps._id} {...otherProps} />;
                })}
              </div>
            </main>
          </section>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
