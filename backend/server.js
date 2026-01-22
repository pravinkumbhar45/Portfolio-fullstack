import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import projectRoutes from "./routes/projectRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// REQUIRED FOR __dirname IN ES MODULES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ VERY IMPORTANT — STATIC UPLOADS
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ROUTES
app.use("/api/projects", projectRoutes);
app.use("/api/resume", resumeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
