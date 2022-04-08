/* eslint-disable */
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

//publish key
const stripePromise = loadStripe(
  "pk_test_51HtRorLKsu0mKfq79BOiFz0jUBB5i85WfAXrrlKlj5ydN8W4sc0UzRRSWBIDYarozORZhsULR3Rs0Tw3tZDbcChQ00DDbWnICV"
);
// const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

const bookTour = async (tourId, token) => {
  try {
    // 1) Get checkout session from API
    const session = await axios.get(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("session = ", session);
    const stripe = await stripePromise;

    // 2) Create checkout form -> credit card payment
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};

export default bookTour;
