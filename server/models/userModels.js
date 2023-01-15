const { Pool } = require('pg');

const PG_URI = 'postgres://edpseqvv:57Cak_X5WLgTW4eTLHyDW5jSjz7HTfKU@mahmud.db.elephantsql.com/edpseqvv';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};