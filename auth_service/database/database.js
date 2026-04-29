import pg from 'pg';
const { Pool } = pg


let pool;

export async function initDatabase() {
    pool = await new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            login TEXT UNIQUE NOT HULL,
            password TEXT NOT NULL,
            created_at CURRENT_TIMESTAMP,
        )
        `)
    return pool;
}

export async function getDatabase() {
    return pool;
}
