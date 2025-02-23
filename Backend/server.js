const express = require('express');
require('dotenv').config();
const aiRoutes = require('./src/routes/ai.routes');
const cors = require('cors');

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL1,
  process.env.FRONTEND_URL2,
  process.env.FRONTEND_URL3
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Starting Server on Port ${PORT}`);
});
