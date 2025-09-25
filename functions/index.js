const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
setGlobalOptions({ maxInstances: 10 });


app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success !",
  });
});


app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  console.log(req);

  if (total > 0) {
    // console.log("Payment received:", total);
    // res.send(`Payment received: $${total}`);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "You have to select an item to paid.",
    });
  }
});

exports.api = onRequest(app);
