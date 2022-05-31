

const urlBase = process.env.REACT_APP_URLgql

const ownHeaders =  new Headers();
const getToken =():string => localStorage.getItem(String( process.env.REACT_APP_TokenName)) as string

ownHeaders.append("Content-Type","application/json" );
ownHeaders.append("X-Custom-Header", "ProcessThisImmediately");
ownHeaders.append("authorization", getToken() );

const genericPetition = ( url:string, method:string, body:any ={} ) =>{
let data = null;
    const response =  fetch(
         urlBase + url, 
        {
            method, 
            mode:"cors",
            headers: ownHeaders,
            body: method==="GET"? null: JSON.stringify( body )
        }
    ).then(

        async ( result ) => {
            const res = await result.json();            
            return res;
        }

    ).catch(console.log)


return response;
}

export default genericPetition;