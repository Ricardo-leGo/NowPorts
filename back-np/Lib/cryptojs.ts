import CryptoJS from "crypto-js";

export const decryptData:Function = ( data:string ):Object => CryptoJS.AES.decrypt(data, String(process.env.cypherKey)).toString(CryptoJS.enc.Utf8);

export const encryptData:Function = ( json:Object ):string => CryptoJS.AES.encrypt(JSON.stringify(json), String(process.env.cypherKey)).toString();
