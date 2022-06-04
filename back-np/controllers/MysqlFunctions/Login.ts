import { Request, Response} from 'express'
import { Json } from 'sequelize/types/utils';
import pool from '../../Database/Mysql';
import { ComparePass } from '../../Lib/bcrypt';
import { decryptData } from '../../Lib/cryptojs';
import { Sign } from '../../Lib/JsonWebToken';
import { IUser } from '../Interfaces';

export default async ( req:Request, res:Response)=> {

    const {Correo, Pass} =   JSON.parse(  decryptData( await req.body.encryptedData ) );
    
    
    if( !Correo || !Pass ) return res.status(500).json({msg:"Olvídelo Amigo"}) 
    
    const query = `select * from legorica_Nowports.Usuarios where Correo='${Correo}'`;
    
    pool.query(
        query, 
        (err, [results], fields ) =>{
            try {
                
                console.log(  Correo, Pass   );
                compareHasshes( JSON?.parse(JSON?.stringify(results))  )
            } catch (error) {
                compareHasshes({});
            }
            }
        );

        async function compareHasshes( json:Partial<IUser> ){
            const respCompare =   await ComparePass( Pass, json.Pass as string);
            let token:string= "";

            if( respCompare ){

                if( json.Activo ){

                     token = await Sign({
                         
                    Correo:json.Correo,

                    Nombre:json.UserName

                });
                    return res.status(200).json({msg:"Bienvenido/welcome", token, status:true});
                }else{
                    return res.status(403).json({msg:"Activa tu cuenta",  status:false, goto:json.Id});
                }
            }else{
                return res.status(403).json({msg:"Lo sentimos, posiblemente no te has registrado",  status:false, goto:"/"});
            }
        };
} 