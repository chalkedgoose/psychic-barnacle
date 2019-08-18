const express = require('express');
const router = express.Router();
const userModel = require('../models /userModel');

router.post('/user', (req, res) => {
    const {
        first,
        last,
        password,
        email,
        mobile,
        profile_picture
    } = req.body;
    const user = new userModel({
        first,
        last,
        password,
        email,
        mobile,
        profile_picture
    });
    user.
    save().
    then(
        () => console.log('User Saved')
    );
    res.status(201);
});


module.exports = router;