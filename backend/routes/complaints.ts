import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

const router = express.Router();
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.PUBLIC_ANNON_KEY;

const headers = {
  apikey: API_KEY!,
  Authorization: `Bearer ${API_KEY!}`,
  "Content-Type": "application/json",
};

router.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

router.post("/", async (req, res) => {
  const { name, email, complaint } = req.body;
  if (!name || !email || !complaint) return res.status(400).json({ error: "Missing fields" });

  const response = await axios.post(`${BASE_URL}/rest/v1/complaints`, {
    name, email, complaint
  }, { headers });
  res.json(response.data);
});

router.get("/", async (req, res) => {
  const response = await axios.get(`${BASE_URL}/rest/v1/complaints?select=*`, { headers });
  res.json(response.data);
} );

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await axios.patch(`${BASE_URL}/rest/v1/complaints?id=eq.${id}`, {
    status: req.body.status,
  }, { headers });
  res.json(response.data);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`${BASE_URL}/rest/v1/complaints?id=eq.${id}`, {
      headers,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete complaint." });
  }
});

export default router;