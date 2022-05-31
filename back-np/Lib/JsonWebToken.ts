import  Jwt  from "jsonwebtoken";

export const Sign = async (data: string) => Jwt.sign(  data, String( process.env.jwtSecret ),{ expiresIn: "2hr" });
export const decodeToken = (token:string) =>Jwt.decode(token);
export const VerifyToken  = (token:string): string => {
    try {
        return Jwt.verify(token, String(process.env.cypherKey)).toString(); 
    } catch( e ){
        return `EL token es inválido. ${e}`
    }};