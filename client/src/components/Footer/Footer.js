import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

export default React.memo(function Footer() {
  const footerIndicator = useRef(null);
  const footerTitle = useRef(null);
  const footerLine = useRef(null);
  const footerListFooter = useRef(null);
  const socialMediaSection = useRef(null);
  const socialMediaSectionH1 = useRef(null);
  const socialMediaSectionP = useRef(null);
  const socialMediaIconGroup = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    const elementSelfFadeIn = tl
      .from(footerTitle.current, {
        y: 30,
        duration: 0.5,
        opacity: 0,
        ease: Power3.easeOut,
      })
      .from(footerListFooter.current, {
        y: 30,
        duration: 0.2,
        opacity: 0,
        delay: 0.015,
        ease: Power3.easeOut,
      })
      .from(socialMediaSectionH1.current, {
        y: 30,
        duration: 0.2,
        opacity: 0,
        delay: 0.015,
        ease: Power3.easeOut,
      })
      .from(socialMediaSectionP.current, {
        y: 30,
        duration: 0.2,
        opacity: 0,
        delay: 0.015,
        ease: Power3.easeOut,
      })
      .from(socialMediaIconGroup.current, {
        y: 30,
        duration: 0.2,
        opacity: 0,
        delay: 0.015,
        ease: Power3.easeOut,
      });

    ScrollTrigger.create({
      //   markers: true,
      trigger: footerIndicator.current,
      start: "top 90%",
      end: "bottom 25%",
      animation: elementSelfFadeIn,
      duration: 1,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      toggleActions: "restart complete reverse reset",
    });
  });

  return (
    <footer>
      <div className="footerIndicator" ref={footerIndicator}>
        <ScrollToTop />

        <div className="footer-first">
          <p className="text" ref={footerTitle}>
            Sign up to recieve special offers and updates!
          </p>
        </div>

        <div className="line" ref={footerLine}></div>
        <ul className="list-footer" ref={footerListFooter}>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>

          <li>
            <Link to="/">Download Apps</Link>
          </li>

          <li>
            <Link to="/">Become Partner</Link>
          </li>
        </ul>
      </div>

      <div className="social-media-section" ref={socialMediaSection}>
        <h1 className="social-media-section-h1" ref={socialMediaSectionH1}>
          Follow us
        </h1>
        <p className="social-media-section-p" ref={socialMediaSectionP}>
          Share Your Travelogue With Us
        </p>
      </div>
      <div className="social-media-icon-group" ref={socialMediaIconGroup}>
        <div className="social-media-icon">
          <IoLogoFacebook />
        </div>
        <div className="social-media-icon">
          <IoLogoTwitter />
        </div>
        <div className="social-media-icon">
          <IoLogoInstagram />
        </div>
        <div className="social-media-icon">
          <IoLogoYoutube />
        </div>
      </div>
      <p className="copyrights">&copy; By 2022 Jeffreywwc23</p>
    </footer>
  );
});
