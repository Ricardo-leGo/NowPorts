import CryptoJS from "crypto-js";

const decryptData:Function = ( data:string ):Object => JSON.parse(CryptoJS.AES.decrypt(data, String(process.env.cypherKey)).toString(CryptoJS.enc.Utf8))
const encryptData:Function = ( json:Object ):string => CryptoJS.AES.encrypt(JSON.stringify(json), String(process.env.cypherKey)).toString();
