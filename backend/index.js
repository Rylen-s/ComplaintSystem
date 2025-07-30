import axios from 'axios';
import cors from 'cors';
import express, { json } from 'express';
import dotenv from 'dotenv';
import complaints from './routes/complaints.ts';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/complaints", complaints);

app.get('/complaints', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => {console.log('Server started at port 3000!!!');});