import React, { useRef, useEffect, memo } from "react";
import "./Hero.css";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import arrow from "../../assets/img/arrow-right.svg";

export default memo(function Hero() {
  let hero = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.5 });

  useEffect(() => {
    const hkImage = images.firstElementChild;
    const jpImage = images.lastElementChild;
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentButton = content.children[1];

    TweenMax.to(hero, 0, { css: { visibility: "visible" } });

    tl.from(hkImage, 1.2, { x: 1280, ease: Power3.easeOut }, "Start")
      .from(hkImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)

      .from(jpImage, 1.2, { x: 1280, ease: Power3.easeOut }, 0.2)
      .from(jpImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    ).from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  });

  return (
    <>
      <div className="hero" ref={(el) => (hero = el)}>
        <div className="hero-container">
          <div
            className="row hero-inner"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="col">
              <div className="hero-content-inner" ref={(el) => (content = el)}>
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Adventure You Can.
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Discover A Different World.
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Enjoy The Beauty.
                    </div>
                  </div>
                </h1>
                <div className="btn-row">
                  <Link
                    to="/tours"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <button>
                      Explore
                      <div className="arrow-icon">
                        {/* <img src={arrow} alt="row" /> */}
                        <img src={"/assets/img/arrow-right.svg"} alt="row" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="hero-images">
                <div className="hero-images-inner" ref={(el) => (images = el)}>
                  <LazyLoadImage
                    effect="blur"
                    className="hero-back"
                    alt="hk1"
                    src="https://res.cloudinary.com/reacthktour/image/upload/v1610526236/react-hktour/hongkong2_swhop5.png"
                  />
                  <LazyLoadImage
                    effect="blur"
                    className="hero-front"
                    alt="jp1"
                    src="https://res.cloudinary.com/reacthktour/image/upload/v1610526239/react-hktour/japan_f2hqgv.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
