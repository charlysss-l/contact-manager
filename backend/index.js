import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// ✅ Root route 
app.get('/', (req, res) => {
  res.send('Contact Manager API is running');
});

// API routes
app.use('/api/contacts', contactRoutes);

//MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
