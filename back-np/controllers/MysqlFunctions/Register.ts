
import { Request, Response} from 'express';
import connection from '../../Database/Mysql';
import { IUser } from '../Interfaces';
import { HashPass } from '../../Lib/bcrypt';

const register = async ( req:Request, res:Response)=>  {
    
    const {
        username    ,
        Lastname    ,
        CodeArea    ,
        Phone       ,
        CP          ,
        Pass        ,
        Correo
    } = await req.body;

        const query  = `select * from legorica_Nowports.Usuarios where Correo='${Correo}'`;

    connection.connect();
    connection.query(
        query, 
        (error, [results], fields) => {
        if(error)console.log("error" , error, "error");

        try {
            give( JSON?.parse(JSON?.stringify(results))  )

        } catch (error) {
            give({});
        }
    } );

    
    async function give( json:Partial<IUser> ){
        if( json.Correo === Correo ){

            return res.status(200).json({ msg:"Por favor usa otro correo", status:false, goto:"/" });
        }else{
            connection.query(
                `insert into legorica_Nowports.Usuarios ( UserName , LastName, CodeArea, Phone, Activo, CP, Comments,  Pass, Description, Correo ) 
                values ( "${username}", "${Lastname}", "${CodeArea}", "${Phone}", false , "${CP}","", "${ await HashPass(Pass) }", "", "${Correo}" );`,
                function(error, results, fields){
                    if(error)console.log("error" , error, "error");
                    return res.status(200).json({ msg:"Bienvenido", status:true, goto:"Login" });
                }
            )
        }

        return connection.end();
    };
}



export default  register;