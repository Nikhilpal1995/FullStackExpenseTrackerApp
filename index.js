const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/user/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Here you can save the user's information to a database or perform other actions
    // For example, you can use a database library like Mongoose (for MongoDB) or Sequelize (for SQL databases) to store user data.

    // Send a response to the user
    res.send('User registered successfully.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});