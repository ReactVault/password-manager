const { Pool } = require('pg');

// const PG_URI = '';
const PG_URI = 'postgres://edpseqvv:57Cak_X5WLgTW4eTLHyDW5jSjz7HTfKU@mahmud.db.elephantsql.com/edpseqvv';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};


// SQL DB
// name: pwmanager
// URL: postgres://edpseqvv:57Cak_X5WLgTW4eTLHyDW5jSjz7HTfKU@mahmud.db.elephantsql.com/edpseqvv
// API Key: b9b0b07b-0df3-4051-92e3-2d7894a90471
// Password: 57Cak_X5WLgTW4eTLHyDW5jSjz7HTfKU
// User & Default database: edpseqvv




// /*CREATE USERS TABLE:*/
// CREATE TABLE users (
//     _id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     email VARCHAR NOT NULL UNIQUE,
//     user_name VARCHAR NOT NULL UNIQUE,
//     password VARCHAR NOT NULL
//     //table_id INT NOT NULL
// );
// /*CREATE username TABLE:*/
// CREATE TABLE username (
//     _id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     website VARCHAR NOT NULL UNIQUE,
//     user_name VARCHAR,
//     email VARCHAR,
//     password VARCHAR NOT NULL
//     //table_id INT NOT NULL
// );





// /*INSERT ROWS INTO users TABLE:*/
// INSERT INTO users (email, password)
// VALUES ('email@gmail.com', 'password1');

// /*INSERT ROWS INTO usersname TABLE:*/
// INSERT INTO users (website, user_name, email, password)
// VALUES ('userName1', 'email@gmail.com', 'password1');

// /*DELETE FROM users TABLE:*/
// DELETE FROM users
// WHERE _id = 1
// /*DELETE FROM username Table:*/
// DELETE FROM username
// WHERE website = 'google'

// /*DELETE A TABLE:*/
// DROP TABLE table_name;

// /*Add column to existing table:*/
// ALTER TABLE table_name
// ADD column_name datatype;

// /*Check if column exists:*/
// use COL_LENGTH to check if column exists. If column length is null, that column does not exist
// COL_LENGTH ( 'table' , 'column' )
// example query:
// IF COL_LENGTH('users','email') IS NOT NULL
//     PRINT 'Column Exists';
// ELSE
//     PRINT 'Column does not Exists';

    

// // Add column that auto generates unique ID:
// // column_name type GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY[ ( sequence_option ) ]



// stretch goals:
// use regex to be take different website url formats (googe, google.com, www.google.com ,https://www.google.com/)