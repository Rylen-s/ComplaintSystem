import axios from 'axios';
import cors from 'cors';
import express, { json } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/complaints", complaints);

app.listen(3000, () => "Server is running at port 3000");