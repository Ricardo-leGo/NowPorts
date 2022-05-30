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

const queryFunction = async (sql:string, parmas="" , returnData:Function )=> {

    const connection =   mysql.createConnection( conn.db );

    connection.connect();
    let dataFrom:any ;
    connection.query(
        sql,
       (error, results, fields  )=>{
                if(error)console.log("error" , error, "error");
                return returnData(results)
            }
        )
    connection.end();
    


}



export default queryFunction;