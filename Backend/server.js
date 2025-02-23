const express = require('express')
require('dotenv').config();
const aiRoutes = require ('./src/routes/ai.routes')
const cors = require('cors')
const app = express();
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [process.env.FRONTEND_URL1||process.env.FRONTEND_URL2||process.env.FRONTEND_URL3];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL1||process.env.FRONTEND_URL2||process.env.FRONTEND_URL3);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(express.json());
app.use('/ai',aiRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!');
})

PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Starting Server on Port ${PORT}`);
});