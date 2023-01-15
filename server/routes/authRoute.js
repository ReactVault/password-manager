const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/userModels');
const session = require('express-session');


// router.use(session ({
//     secret: 'secret',
//     resave: false
// }))

router.get('/', (req, res) => {
    console.log('Root Page');
    res.send('Root Page')
})


//login

router.get('/login', (req, res) => {
    console.log('GET Login Page');
    res.send('GET Login Page')
})

router.post('/login', 
    (req, res) => {
        console.log("Inside the POST /login");

        const { email, password } = req.body;

        if (email && password) {
            db.query(`SELECT * FROM users WHERE email = $1`,
            [email],
            (err, result) => {
              if (err) {
                console.log('Error in POST /login', err)
              } 

              //set the userAccount to be the array of the user account object
              let userAccount = result.rows;

            //   check to see if the account exists
              if (userAccount.length > 0) {
                bcrypt.compare(password, userAccount[0].password, (err, matches) => {
                    if (err) {
                        console.log('Error comparing hash passwords', err)
                    } 
                    if (matches) {
                        console.log('Successful login, redirecting to homepage');
                        res.redirect('home');
                    }
                    if (!matches) {
                        console.log('Password incorrect');
                        res.send('Password incorrect')
                    }
                })
              } 
              if (userAccount.length === 0) {
                console.log('Account does not exist');
                res.send('Account does not exist')
              }
            }
          )}
    });


//sign up

router.get('/signup', 
    (req,res) => {
        console.log("GET Signup Page");
        res.send('GET signup page')
    });


router.post('/signup', 
    async (req, res) => {
        console.log("Inside the POST /signup");
        
        let { user_name, email, password, password2 } = req.body;

        // console.log({ user_name, email, password, password2 });
        
        db.query('SELECT * FROM users', async (err, result) => {
            if (err) {
                console.log('Error selecting all users from  db', err);
            }
            //to see the array of user objects, uncomment line below
            // console.log(result.rows);

            //set the array of user objects as a variable
            let userDB = result.rows;

            //loop through the array of existing users to see if the email is already taken
            for (let i=0; i<userDB.length; i++) {
                if (userDB[i].email === email) {
                    console.log('Email is already in use');
                    res.send('Email is already in use');
                }
            }

            //if user misses one input during signup, log error
            if (!user_name || !email || !password || !password2) {
                console.log('Please enter all fields');
                res.send('Please enter all fields');
            }

            //check if the passwords match, log error if they do not match
            if (password !== password2) {
                console.log('Passwords do not match');
                res.send('Passwords do not match');
            }
            //inputs successfully pass all tests, create new user with hashed password using bcrypt
            else {
                const hashedPassword = await bcrypt.hash(password, 12);
                console.log(hashedPassword);

                db.query(`INSERT INTO users (user_name, email, password) 
                  VALUES ($1, $2, $3)`,
                  [user_name, email, hashedPassword],
                  (err, results) => {
                    if (err) {
                        console.log('Error inserting new user into db', err)
                    }
                    console.log('User successfully added', results); //not sure why results is undefined when added... 
                    res.send('You have successfully created an account.');
                    res.redirect("/login");
                  })

                //uncomment to run tests to see all the users in the database (make sure to comment the query insert above in order to not add in a user if using postman to test)
                // db.query(`SELECT * from users`,
                //   (err, results) => {
                //     if (err) {
                //         console.log('Error inserting new user into db', err)
                //     }
                //     console.log(results.rows);
                //   })
            
            }
        })

    });


//logging out
router.get('/logout', (req,res) => {
    console.log('Logged out');
    res.redirect("/login");
});


module.exports = router;