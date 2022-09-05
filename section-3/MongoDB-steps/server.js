const express = require('express');
//todo STEP 4
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));


//todo STEP 5
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//todo Use this to log mongo queries being executed!
mongoose.set('debug', true);
//todo end 4

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
