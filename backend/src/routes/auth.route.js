import express from "express";
import {
  login,
  signUp,
  logout,
  updateProfile,
  checkProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);
router.get("/check-profile", protectRoute, checkProfile);

export default router;
