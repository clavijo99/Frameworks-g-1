import { Pool } from 'pgs'


const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: 'ecommerce',
    password: 'postgres',
    port: 5432
})

export default pool;