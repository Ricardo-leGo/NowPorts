import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import genericPetition from "../../services";
import { IUser, IGenericReponse } from '../../Layout/Interfaces';
import  CryptoJS from 'crypto-js';
import { isBreakOrContinueStatement } from "typescript";

export const HomeContext =  createContext({});

const  HomeProvider = ({ children }: PropsWithChildren<{}>) => {

    const [ isLoginPage, setIsLoginPage ] = useState(false);
    const setIsLoginPageFunc = (bool:boolean) => setIsLoginPage( bool);
    const sayHello: Function = (): string => {
        return "hola";
    };



    //-----------------------------------Mysql ------------------------------->

    const RegistroMysql = async ( Usuario:Partial<IUser> ) => {
        console.log( Usuario ) 

        const resp:IGenericReponse = await genericPetition( "Auth/Register", "POST", Usuario );

        console.log(resp)
        if( resp.status ){
            setIsLoginPage(true);
            const element:any =  document.querySelector("#basic_Correo");
            element.value = "";
            element.focus();

        }else{
            const element:any =  document.querySelector("#basic_Correo");
            element.value = "";
            element.focus();
        }
    }


    const LoginMysql =  (Usuario:Partial<IUser>) => {
            console.log( Usuario )
    }

    //-----------------------------------Mysql ------------------------------->




    //-----------------------------------Mongo ------------------------------->
    const RegistroMongo =  ( Usuario:Partial<IUser> ) => {

    }

    const LoginMongo=  (Usuario:Partial<IUser>) => {
        console.log( Usuario )
}

    //-----------------------------------Mongo ------------------------------->

//--------------------Generic∂
const RegistroSelect = (base:string="", data: Partial<IUser> ) => {

    console.log( data );

    if(  data.Pass !== data.ConfirmPass)return

    if( base === "Mysql"){
        RegistroMysql( data )
    }else{
        RegistroMongo(data)
    }

}
const LoginSelect = (base:string="", data: Partial<IUser> ) => {

    console.log( data );

    if(  data.Pass !== data.ConfirmPass)return

    if( base === "Mysql"){
        LoginMysql( data )
    }else{
        LoginMongo(data)
    }

}
//--------------------Generic∂

const state = {
    sayHello,
    LoginMysql,
    LoginMongo,
    RegistroMysql,
    RegistroMongo,
    RegistroSelect,
    setIsLoginPageFunc,
    LoginSelect,
    isLoginPage
};




    useEffect(
        () => {
            genericPetition("/","GET",{} )
        }, 
    []);

    return (
        <HomeContext.Provider value={state}>
            {children}
        </HomeContext.Provider>
    );
}

export default  HomeProvider;
