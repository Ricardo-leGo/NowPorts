import { connect } from 'http2';
import mysql from 'mysql';


const conn  ={
    db:
        {
            host: process.env.HOSTMYSQL,
            user: process.env.USERMYSQL,
            password: process.env.MYSQLPASS

        },
    listPerPage: 10,
    };

const queryFunction = async (sql:string, parmas ) => {
    const connection =  await mysql.createConnection( conn.db );
    connection.connect();

    connection.query(
        sql,
        (error, results,fields  )=>{
            if(error)console.log(error);
            console.log('The solution is: ', results[0].solution);        
        }
        )
    connection.end();

}



export default queryFunction;