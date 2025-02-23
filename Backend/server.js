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

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use((req, res, next) => {
  const allowedOrigin = allowedOrigins.length ? allowedOrigins[0] : '*';
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((req, res, next) => {
  res.setTimeout(60000, () => {
    res.status(504).json({ error: "Server timeout" });
  });
  next();
});

app.use(express.json());
app.use('/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Starting Server on Port ${PORT}`);
});
