import { buffer } from "micro";
import * as admin from "firebase-login";

// Secure a connection to FIREBASE from the backend
const serviceAccount = require("../../../permission.json");

// App intialized only first time so, igonore next time app initalization
// Apply below condition
const app = !admin.app.length
  ? admin.initializeApp({
      credentials: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Establish coonnection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method !== "POST") {
  }
};
