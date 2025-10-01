import { Pool } from 'pg'

const pool = new Pool(
    {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'ecommerce',
        port: 5432
    }
)

export default pool;