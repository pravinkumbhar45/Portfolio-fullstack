import express from "express";
import multer from "multer";
import { getResume, saveResume } from "../controllers/resumeController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.get("/", getResume);
router.post("/upload", upload.single("resume"), saveResume);

export default router;
