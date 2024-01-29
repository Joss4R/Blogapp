import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    port:"3310",
    user: 'root',
    password: 'RAYJOSS2',
    database: 'blog',
    
})