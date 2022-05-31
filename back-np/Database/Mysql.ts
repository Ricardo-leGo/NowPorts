import mysql from 'mysql';


const conn  ={
    db:
        {
            host: String(process.env.HOSTMYSQL),
            user: String(process.env.USERMYSQL),
            database: String(process.env.DBNAMEMYSQL),
            password: String(process.env.MYSQLPASS)

        },
    };

export default  mysql.createConnection( conn.db );