import express, { Request, Response } from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

connectDB();

import contact from './routes/contact';

const app = express();

app.use(express.json());

app.use('/api/contacts', contact);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
