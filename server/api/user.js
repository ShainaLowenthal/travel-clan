const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const db = require('../config/database')
const User = require('../models/User');

router.get('/', (req,res) => {
    res.json({
        message: 'user get method'
    });
});

router.post('/signup', async (req, res) =>{
    const data = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@fakemail.com',
        password: 'password1234'
    }

    let {firstName, lastName, email, password} = data;

    //  User.create({
    //     firstName,
    //     lastName,
    //     email,
    //     password
    // })
    // .then(user => res.redirect('/api'))
    // .catch(err => console.log(err));

    try {
        const users = User.create({
            firstName,
            lastName,
            email,
            password
          });
        //res.send(users);
        res.json({
            message: 'got the user from post'
        });
      } catch (err) {
        console.error(err);
        res.sendStatus(404);
    }

    
});

//return all users
// router.get('/getUsers', (req,res) => {
//     res.json({
//         message: 'user get method'
//     });
// });
//sign-in
// router.get('/signIn', (req,res) => {
//     res.json({
//         message: 'user get method'
//     });
// });


//return all trips from database

// router.get('/trips', (req,res) => {
//     User.findAll(
//     )
//     res.json({
//         message: 'user get method'
//     });
// });

//create new trip
// router.get('/trips/new', (req,res) => {

        // Trip.create({
        //     destination:
        // })
//     res.json({
//         message: 'user get method'
//     });
// });
module.exports = router;