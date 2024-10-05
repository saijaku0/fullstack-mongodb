import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import {
  feedCreateValidation,
  loginValidation,
  registerationValidation,
} from "./validations/index.js";
import checkAuth from "./utils/CheckAuth.js";

import {
  registerNewUser,
  loginUser,
  getAuthorizenStatus,
} from "./controllers/UserContoller.js";
import {
  createFeed,
  getAllFeeds,
  getOneFeed,
  removeFeed,
  updateFeed,
} from "./controllers/FeedController.js";
import CheckValidationError from "./utils/CheckValidationError.js";

mongoose
  .connect(
    "mongodb+srv://minerking112256:8D42EFrMW8Oy6LK2@cluster0.h6sz5.mongodb.net/feed?retryWrites=true&w=majority"
  )
  .then(() => console.log("OK"))
  .catch((err) => console.log("error: ", err));

const app = express();
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/auth/login", loginValidation, CheckValidationError, loginUser);
app.post(
  "/auth/register",
  registerationValidation,
  CheckValidationError,
  registerNewUser
);
app.get("/auth/me", checkAuth, getAuthorizenStatus);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  if (!req.file) {
    console.error("Error: No file uploaded", 400);
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
app.get("/feed", getAllFeeds);
app.get("/feed/:id", getOneFeed);
app.post(
  "/feed",
  checkAuth,
  feedCreateValidation,
  CheckValidationError,
  createFeed
);
app.delete("/feed/:id", checkAuth, removeFeed);
app.patch(
  "/feed/:id",
  checkAuth,
  feedCreateValidation,
  CheckValidationError,
  updateFeed
);

app.listen(4444, (err) => {
  if (err) {
    return new Error("Error message: ", err);
  }

  console.log("server OK 200");
});
