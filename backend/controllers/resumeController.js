import db from "../models/db.js";

export const getResume = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM resume ORDER BY id DESC LIMIT 1"
    );

    if (rows.length === 0) {
      return res.json(null);
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("GET RESUME ERROR:", err);
    res.status(500).json({ error: "Failed to fetch resume" });
  }
};

export const saveResume = async (req, res) => {
  try {
    const fileUrl = `/uploads/${req.file.filename}`;

    await db.query("INSERT INTO resume (resume_url) VALUES (?)", [fileUrl]);

    res.json({
      message: "Resume uploaded successfully",
      resume_url: fileUrl
    });
  } catch (err) {
    console.error("SAVE RESUME ERROR:", err);
    res.status(500).json({ error: "Failed to save resume" });
  }
};

