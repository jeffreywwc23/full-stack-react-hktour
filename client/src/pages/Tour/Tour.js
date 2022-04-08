import React, { useEffect, useState } from "react";
import "./Tour.css";
import { Link } from "react-router-dom";
import Date from "../../components/Date/Date";
import Footer from "../../components/Footer/Footer";
import TourGuide from "./TourGuide/TourGuide";
import TourReview from "./TourReview/TourReview";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  FaMapPin,
  FaClock,
  FaCalendarAlt,
  FaStar,
  FaUserAlt,
  FaSortAmountUp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import bookTour from "../../utils/stripe";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Tour = () => {
  // const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const params = useParams();
  const user = useSelector((state) => state.user?.userState);
  const tours = useSelector((state) => state.tours?.tourState);

  const [singleTour, setSingleTour] = useState({
    name: "",
    imageCover: "",
    description: "",
    duration: "",
    startLocation: "",
    startDates: [],
    difficulty: "",
    maxGroupSize: "",
    ratingsAverage: "",
    ratingsQuantity: "",
    images: [],
  });

  useEffect(() => {
    findSingletour(tours, params._id);
  }, [params._id]);

  const findSingletour = (tours, tourId) => {
    let result = [];

    if (tours && tourId) {
      const filtered = tours.find((tour) => {
        return tour._id === tourId;
      });
      result.push(filtered);
    }

    console.log("result = ", result);

    setSingleTour({
      name: result[0].name,
      imageCover: result[0].imageCover,
      description: result[0].description,
      duration: result[0].duration,
      startLocation: result[0].startLocation,
      startDates: result[0].startDates,
      difficulty: result[0].difficulty,
      maxGroupSize: result[0].maxGroupSize,
      ratingsAverage: result[0].ratingsAverage,
      ratingsQuantity: result[0].ratingsQuantity,
      images: result[0].images,
    });
  };

  const handleBookingCheckOut = () => {
    // console.log("params._id = ", params._id);
    // console.log("user.token = ", user.userInfo[0].token);
    bookTour(params._id, user.userInfo[0].token);
    toast.success("Direct you to check out!");
  };

  return (
    params._id && (
      <div className="tour-container">
        <section
          className="section-header"
          // style={{ backgroundImage: "url(" + singleTour.imageCover + ")" }}
          style={{
            backgroundImage: `url(${`/assets/img/tours/${singleTour.imageCover}`})`,
          }}
        >
          <div className="heading-box">
            <h1 className="heading-primary">
              <span>{singleTour.name}</span>
            </h1>
            <div className="heading-box-group">
              <div className="heading-box-detail">
                <FaClock className="heading-box-icon" />
                <span className="heading-box-text">
                  {singleTour.duration} days
                </span>
              </div>
              <div className="heading-box-detail">
                <FaMapPin className="heading-box-icon" />
                <span className="heading-box-text">
                  {singleTour.startLocation &&
                    singleTour.startLocation["description"]}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box-group">
                <h2 className="heading-secondary section-description-heading-bottom">
                  Brief
                </h2>
                <div className="overview-box-detail">
                  <FaCalendarAlt className="overview-box-icon" />
                  <span className="overview-box-label">Next Date</span>
                  <span className="overview-box-text">
                    <Date
                      startDates={
                        singleTour.startDates &&
                        singleTour.startDates.length > 0 &&
                        singleTour.startDates[0]
                      }
                    />
                  </span>
                </div>
                <div className="overview-box-detail">
                  <FaSortAmountUp className="overview-box-icon" />
                  <span className="overview-box-label">Difficulty</span>
                  <span className="overview-box-text">
                    {singleTour.difficulty}
                  </span>
                </div>
                <div className="overview-box-detail">
                  <FaUserAlt className="overview-box-icon" />
                  <span className="overview-box-label">Participants</span>
                  <span className="overview-box-text">
                    {singleTour.maxGroupSize}
                  </span>
                </div>
                <div className="overview-box-detail">
                  <FaStar className="overview-box-icon" />
                  <span className="overview-box-label">Rating</span>
                  <span className="overview-box-text">{`${singleTour.ratingsAverage} (${singleTour.ratingsQuantity})`}</span>
                </div>
              </div>

              <TourGuide />
            </div>
          </div>

          <div className="description-box">
            <h2 className="heading-secondary section-description-heading-bottom">
              About {singleTour.name}
            </h2>
            <p className="description-text">{singleTour.description}</p>
          </div>
        </section>

        <TourReview />

        <section className="section-pictures">
          <div className="picture-box">
            <LazyLoadImage
              effect="blur"
              className="picture-box-img picture-box-img-1"
              alt={`${singleTour.name} 1`}
              src={`/assets/img/tours/${singleTour?.images[0]}`}
            />
          </div>
          <div className="picture-box">
            <LazyLoadImage
              effect="blur"
              className="picture-box-img picture-box-img-2"
              alt={`${singleTour.name} 2`}
              src={`/assets/img/tours/${singleTour?.images[1]}`}
            />
          </div>
          <div className="picture-box">
            <LazyLoadImage
              effect="blur"
              className="picture-box-img picture-box-img-3"
              alt={`${singleTour.name} 3`}
              src={`/assets/img/tours/${singleTour?.images[2]}`}
            />
          </div>
        </section>

        <section className="section-payment">
          <div className="section-payment-box">
            <LazyLoadImage
              effect="blur"
              className="section-payment-box-img section-payment-box-img-0"
              alt="Tour payment cover1"
              src={`/assets/img/tours/${singleTour?.images[0]}`}
            />
            <LazyLoadImage
              effect="blur"
              alt="Tour payment cover2"
              className="section-payment-box-img section-payment-box-img-1"
              src={`/assets/img/tours/${singleTour?.images[1]}`}
            />
            <LazyLoadImage
              effect="blur"
              alt="Tour payment cover3"
              className="section-payment-box-img section-payment-box-img-2"
              src={`/assets/img/tours/${singleTour?.images[2]}`}
            />

            <div className="section-payment-box-content">
              <h2 className="heading-secondary">Love it?</h2>
              <p className="section-payment-box-content-text">
                {singleTour.duration} days. 1 adventure. Make it yours today!
              </p>

              {user.userInfo[0]?.userData ? (
                <button
                  className="btn btn-blue span-all-rows"
                  onClick={() => handleBookingCheckOut()}
                >
                  Book now!
                </button>
              ) : (
                <Link
                  className="btn btn-blue span-all-rows log-in-to-book"
                  to={`/sign-in-sign-up`}
                >
                  Log in to book tour!
                </Link>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  );
};
