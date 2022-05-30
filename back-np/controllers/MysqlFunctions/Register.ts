
import { Request, Response} from 'express';
import queryFunction from '../../Database/Mysql';

const register = async ( req:Request, res:Response)=>  {
    
    const {
        username    ,
        Lastname    ,
        email       ,
        CodeArea    ,
        Phone       ,
        CP          ,
        Pass        ,
        ConfirmPas23,
        Correo
    } = await req.body;
    
    const query  = `select * from legorica_Nowports.Usuarios where Correo='${Correo}' `
    const givemeData = (data:any) => { console.log( data, "==!!!!=" ); return data };

    const respQuery = await queryFunction(query, "null" ,givemeData);

    return res.status(200).json({msg:"working"});
}



export default  register;