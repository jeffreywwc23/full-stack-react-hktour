import React from "react";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { Services } from "../../components/Services/Services";
import { AboutUsCards } from "../../components/AboutUsCards/AboutUsCards";
import Footer from "../../components/Footer/Footer";

export const AboutUs = () => {
  return (
    <>
      <AboutUsCards />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};
