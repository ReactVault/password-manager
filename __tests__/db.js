const { Pool } = require('pg');
const { async } = require('regenerator-runtime');
const PG_URI = 'postgres://edpseqvv:57Cak_X5WLgTW4eTLHyDW5jSjz7HTfKU@mahmud.db.elephantsql.com/edpseqvv';

const db = new Pool({ connectionString: PG_URI });  

// db.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';", (err, res) => {
//     console.log(res);
//   });
  
// db.query("SELECT * FROM users;", async (err, res) => {
//       console.log('before', res.rows);
//   });

describe('db unit test', () => {
  const [email, username, password] = ['test@thisDomainShouldNotExist.com', 'testname', 'testpassword'];
  
  afterAll(async () => {
    db.end();
  });
  
  describe('#create', () => {});

  // test for create and update from db
  describe('#update', () => {
    
    test('create a user profile in the database',  async () => {
      const text = 'INSERT into users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *;'
      const values = [username, email, password];

      const data = await db.query(text, values);
      expect(data).not.toBeInstanceOf(Error);
      expect(data.rows.length).toBe(1);
      expect(data.rows[0].user_name).toBe(username);
      expect(data.rows[0].email).toBe(email);
      expect(data.rows[0].password).toBe(password);
    });

    xtest('add a username and password of a website for the created user', () => {});
    xtest('update the password for existed website', () => {});
    xtest('update the username for existed website', () => {});

    test('return an error when create another user profile with the same email', async () => {
      const text = 'INSERT into users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *;'
      const values = [username, email, password];

      expect.assertions(1);
      try {
        await db.query(text, values);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    })
    xtest('return an error when add another username and password for existing website', () => {})
  });

  // test for read from db
  xdescribe('#find', () => {
    xtest('find a user profile in the database', () => {});
    xtest('find a website info for the user in the database', () => {});
    xtest('return an error when user profile doesn\'t exist', () => {});
    xtest('return an error when website info doesn\'t exist', () => {});
  });

  // test for delete from db
  describe('#drop', () => {
    xtest('delete info for a website in the database', () => {});

    test('delete user profile in the database', async () => {
      const text = 'DELETE FROM users WHERE email = $1 RETURNING *;'
      const values = [email];
      const data = await db.query(text, values) 
      expect(data).not.toBeInstanceOf(Error);
      expect(data.rows.length).toBe(1);
      expect(data.rows[0].user_name).toBe(username);
      expect(data.rows[0].email).toBe(email);
      expect(data.rows[0].password).toBe(password);
    });
  });
});