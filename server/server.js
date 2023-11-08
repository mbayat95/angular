const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/angularMongoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Data Schema and Model
const DataSchema = new mongoose.Schema({ data: String });
const DataModel = mongoose.model('Data', DataSchema);

// Routes
app.post('/data', (req, res) => {
  const newData = new DataModel({ data: req.body.data });
  newData.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
