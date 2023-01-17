const db = require('./usersModels');

const dbController = {};

dbController.verifyUser = (req, res, next) => {
    
};

//returns all passwords for a given email listed on 'users' table
    //'users' table already exists
dbController.getPasswords = async (req, res, next) => {
    const {email} = req.body;
    console.log(email)

    try{
        const text = `SELECT website, user_name, email, password FROM "${email}"`;

        const params = [email];
        const result = await db.query(text /*,[params]*/);
        console.log(result.rows)
        res.locals.passwords = result.rows;
        next();
    }
    catch (err) {
        return next({
            log: `dbController.getPasswords: ERROR: ${err}`,
            message: {err: 'Error occurred in dbController.getPasswords. Check server logs for more details'}
        });
    }
};

//creates a user for application
    //user is added to users table
dbController.createUser = async (req, res, next) => {
    const user_name = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;

    //add user to users Table
    const text = `INSERT INTO users (user_name, email, password)
        VALUES ('${user_name}', '${email}', '${password}')`;

    try{
        const params = [user_name, email, password];
        const result = await db.query(text /*,[params]*/)
        res.locals.message = `User: '${user_name}', email: '${email}' successfuly created!`;
        res.locals.user_name = user_name;
        res.locals.email = email;
        next();
    }
    catch (err) {
        return next({
            log: `dbController.createUser: ERROR: ${err}`,
            message: {err: 'Error occurred in dbController.createUser. Check server logs for more details'}
        });
    }
};

//creates a dedicated table containing all of a users passwords
    //table is named after the users email in users table (email used when a new user is created)
dbController.createUserTable = async (req, res, next) => {
  
    //create dedicated password/website table when a new user is created
    const text = `CREATE TABLE "${res.locals.email}" (
        _id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
        website VARCHAR NOT NULL UNIQUE,
        user_name VARCHAR,
        email VARCHAR NOT NULL ,
        password VARCHAR NOT NULL)`;

    try{
        const result = await db.query(text)
        next();
    }
    catch (err) {
        return next({
            log: `dbController.createUserTable: ERROR: ${err}`,
            message: {err: 'Error occurred in dbController.createUserTable. Check server logs for more details'}
        });
    }
};

//add password to a users dedicated password table
dbController.addPassword = async (req, res, next) => {
    const website = req.body.website;
    const user_name = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;

    //add row in the users password Table
    const text = `INSERT INTO "${email}" (website, user_name, email, password)
        VALUES ('${website}', '${user_name}', '${email}', '${password}')`;
    
        try{
            const params = [website, user_name, email, password];
            const result = await db.query(text /*,[params]*/)
            res.locals.message = `Password for '${website}' stored successfuly`;
            next();
        }
        catch (err) {
            return next({
                log: `dbController.addPassword: ERROR: ${err}`,
                message: {err: 'Error occurred in dbController.addPassword. Check server logs for more details'}
            });
        }
};

//delete a specified row in a individual users password table
dbController.deletePassword = async (req, res, next) => {
    const website = req.body.website;
    const email = req.body.email;
    console.log(req.body);

    //delete row in the users password Table
    const text = `DELETE FROM "${email}"
                  WHERE website = '${website}'`;
    
        try{
            const params = [website, email];
            const result = await db.query(text /*, [params]*/)
            res.locals.message = `Password for '${website}' successfuly deleted`;
            next();
        }
        catch (err) {
            return next({
                log: `dbController.deletePassword: ERROR: ${err}`,
                message: {err: 'Error occurred in dbController.deletePassword. Check server logs for more details'}
            });
        }
};

//updates a password for a specified website
dbController.updatePassword = async (req, res, next) => {
    const website = req.body.website;
    const email = req.body.email;
    const password = req.body.password;

    //update a row in the users password Table
        //the website must match exactly (ex: google.com, google, www.google.com are not equal)
    const text = `UPDATE "${email}"
                SET password = '${password}'
                WHERE website = '${website}'`;
    
        try{
            const params = [website, email, password];
            const result = await db.query(text /*, [params]*/)
            res.locals.message = `Password for '${website}' successfuly updated`;
            next();
        }
        catch (err) {
            return next({
                log: `dbController.updatePassword: ERROR: ${err}`,
                message: {err: 'Error occurred in dbController.updatePassword. Check server logs for more details'}
            });
        }
};


module.exports = dbController;