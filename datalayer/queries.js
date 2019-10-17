const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgras',
  host: 'localhost',
  database: 'lifechaq',
  password: 'ch19910105',
  port: 5432,
})

const getCalculations = (request, response) => {
    pool.query('SELECT * FROM calculations ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getCalculationsById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM calculations WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createCalculations = (request, response) => {
    const { name, purchaseprice, deposit, bondyears, interestrate } = request.body
  
    pool.query('INSERT INTO calculations ( name, purchaseprice, deposit, bondyears, interestrate) VALUES ($1, $2,$3,$4,$5)', [name, purchaseprice, deposit, bondyears, interestrate ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`calculations added with ID: ${result.insertId}`)
    })
  }