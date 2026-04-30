import pg from "pg"
const {Pool} = pg;

let pool;

export async function initDatabase() {
    pool = new Pool({connectionString: process.env.DATABASE_URL,
         ssl: { rejectUnauthorized: false}},
        `CREATE TABLE IF NOT EXPORTS(
        id SERIAL PRIMARY KEY,
        user_id INTERGER NOT NULL,
        full_name TEXT,
        emeil TEXT,
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        )`
    )
    return pool;
}


export async function getDatabase() {
    return pool
    
}
