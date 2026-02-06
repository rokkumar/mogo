import express from "express";
import {
  showLogin,
  showSignup,
  signup,
  loginUser,
  showHome
} from "../controllers/authController.js";

const router = express.Router();

// Pages
router.get("/", showSignup);
router.get("/login", showLogin);
router.get("/home", showHome);

// Forms
router.post("/signup", signup);
router.post("/login", loginUser);

export default router;
