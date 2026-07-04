import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection on startup
pool
  .getConnection()
  .then((conn) => {
    console.log("✅ MySQL pool conectado");
    conn.release();
  })
  .catch((err) => {
    console.error("❌ Error MySQL pool:", err.message);
  });
