import React from "react";
import "./TourReview.css";
import { FaRegStar } from "react-icons/fa";

const TourReview = () => {
  return (
    <section className="section-reviews">
      <div className="reviews">
        <div className="reviews-card">
          <div className="reviews-avatar">
            <img
              src={"/assets/img/users/user-7.jpg"}
              alt="avatar-1"
              className="reviews-avatar-img"
            />
            <h6 className="reviews-user">Alexander Crown</h6>
          </div>
          <p className="reviews-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dignissimos sint quo commodi corrupti accusantium veniam saepe
            numquam.
          </p>
          <div className="reviews-rating">
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-inactive" />
          </div>
        </div>

        <div className="reviews-card">
          <div className="reviews-avatar">
            <img
              src={"/assets/img/users/user-14.jpg"}
              alt="Christina Calum"
              className="reviews-avatar-img"
            />
            <h6 className="reviews-user">Christina Calum</h6>
          </div>
          <p className="reviews-text">
            Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
            reiciendis provident deleniti cumque similique itaque animi,
            sapiente obcaecati beatae accusantium.
          </p>
          <div className="reviews-rating">
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-inactive" />
            <FaRegStar className="reviews-star reviews-star-inactive" />
            <FaRegStar className="reviews-star reviews-star-inactive" />
          </div>
        </div>

        <div className="reviews-card">
          <div className="reviews-avatar">
            <img
              src={"/assets/img/users/user-15.jpg"}
              alt="William Lax"
              className="reviews-avatar-img"
            />
            <h6 className="reviews-user">William Lax</h6>
          </div>
          <p className="reviews-text">
            Debitis, nesciunt itaque! At quis officia natus. Suscipit,
            reprehenderit blanditiis mollitia distinctio ducimus porro tempore
            perspiciatis sunt vel.
          </p>
          <div className="reviews-rating">
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
          </div>
        </div>

        <div className="reviews-card">
          <div className="reviews-avatar">
            <img
              src={"/assets/img/users/user-6.jpg"}
              alt="Edwin Craig"
              className="reviews-avatar-img"
            />
            <h6 className="reviews-user">Edwin Craig</h6>
          </div>
          <p className="reviews-text">
            Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
            quis praesentium sed inventore harum aliquam veritatis at adipisci
            ea assumenda!
          </p>
          <div className="reviews-rating">
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-inactive" />
          </div>
        </div>

        <div className="reviews-card">
          <div className="reviews-avatar">
            <img
              src={"/assets/img/users/user-3.jpg"}
              alt="Jess Aiaya"
              className="reviews-avatar-img"
            />

            <h6 className="reviews-user">Jess Aiaya</h6>
          </div>
          <p className="reviews-text">
            Perferendis quo aliquid iste quas laboriosam molestias illo est
            voluptatem odit ea. Vero placeat culpa provident dicta maiores!
          </p>
          <div className="reviews-rating">
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-active" />
            <FaRegStar className="reviews-star reviews-star-inactive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourReview;
