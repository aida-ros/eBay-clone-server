const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:secret@localhost:5432/postgres'
const pool = new Pool({ connectionString: connectionString })

pool.on('error', (err, client) => {
  console.error('error event on pool', err)
})

pool.query(`
  CREATE TABLE IF NOT EXISTS items
    (
      id SERIAL,
      title VARCHAR(255),
      picture_url VARCHAR,
      price DECIMAL(6, 2),
      description VARCHAR(350),
      sellerid INTEGER
    );
`)
  .catch(console.err)

pool.query(`
 CREATE TABLE IF NOT EXISTS sellers
  (
    id SERIAL,
    username VARCHAR(15),
    email VARCHAR(25),
    phone_number VARCHAR(15)
  );
`)
  .catch(console.err)
