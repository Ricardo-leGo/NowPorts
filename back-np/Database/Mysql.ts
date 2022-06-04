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


    const pool =  mysql.createPool( conn.db );
    pool.getConnection((err, connection) => {
            if(err)console.log( err.code );
            if(connection)connection.release()
    })
export default pool


