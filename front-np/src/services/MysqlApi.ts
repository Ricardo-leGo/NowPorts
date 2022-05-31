import genericPetition from ".";

const baseurl =  process.env.REACT_APP_URLgql ?? "htttp:/localhost:3150";

const Token = String(process.env.REACT_APP_TokenName);

const getToken = () =>  localStorage.getItem(Token) ?? null;


const RestServiceMysql = () => {


const data = genericPetition( `${baseurl}`, "GET", {} );

console.log( "data", data )
    
}