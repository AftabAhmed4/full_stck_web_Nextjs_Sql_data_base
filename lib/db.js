import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let pool;

if (!global.db) {
  global.db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
    multipleStatements: true,
  });
}

export const db = global.db;
