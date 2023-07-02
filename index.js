import express from 'express';
import cors from 'cors';
import zombieRoutes from './routes/zombieRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', zombieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
