const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// connect database
connectDB();

// Init middleware
// app.use(express.json());
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API running'));

// define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
