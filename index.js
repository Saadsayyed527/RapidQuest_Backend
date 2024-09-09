const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require('dotenv')
dotenv.config();
// Middleware
app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGO;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const analyticsRoutes = require('./routes/analytics');
app.use('/api', analyticsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
