import mysql from 'mysql';


const conn  ={
    db:
        {
            host: String(process.env.HOSTMYSQL),
            user: String(process.env.USERMYSQL),
            password: String(process.env.MYSQLPASS)

        },
    listPerPage: 10,
    };

export default  mysql.createConnection( conn.db );