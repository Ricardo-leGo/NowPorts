import CryptoJS from "crypto-js";

export const decryptData:Function = ( data:string ):Object => JSON.parse(CryptoJS.AES.decrypt(data, String(process.env.cypherKey)).toString(CryptoJS.enc.Utf8));
export const encryptData:Function = ( json:any ):string => CryptoJS.AES.encrypt(JSON.stringify(json), String(process.env.REACT_APP_cypherKey)).toString();
