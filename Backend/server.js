const express = require('express')
require('dotenv').config();
const aiRoutes = require ('./src/routes/ai.routes')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use('/ai',aiRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!');
})

PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Starting Server on Port ${PORT}`);
});