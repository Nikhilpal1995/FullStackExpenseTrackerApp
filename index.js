//index.js 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./util/database');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

const userRoutes = require('./routes/user');
app.use('/user',userRoutes);

// Serve SignUp.html directly
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'SignUp.html'));
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Database synchronization error:', error);
  });