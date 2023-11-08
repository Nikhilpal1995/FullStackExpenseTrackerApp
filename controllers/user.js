//controllers/user.js

const User = require("../models/User");

    function isStringInvalid(string){
        if(string == undefined|| string.length === 0){
            return true
        } else {
            return false
        }
    };
    
    const SignUp = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (isStringInvalid(name) || isStringInvalid(email) || isStringInvalid(password)) {
                return res.status(400).json("Bad Parameters. Something is Missing");
            }
    
            const user = await User.create({ name, email, password });
            return res.status(201).json('Successfully Create a User');
        } catch (err) {
            return res.status(500).json('An error occurred while creating a user');
        }
    };

    module.exports = {
        SignUp
      };
    