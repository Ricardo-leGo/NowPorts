export interface IUser{
    Id: string
    UserName:string
    LastName:string
    CodeArea:number
    Phone:string
    Activo:boolean
    CP:number
    Comments?:string
    CreatedAt:Date
    Pass:string
    Description?:string
    IsRegistered?:boolean
    ConfirmPass?:string
}

export interface IAgenda{
    Id: string
    IdOwner:number
    FechaInicio:string
    UsuariosIdFK:number
    Activa:boolean
}


export  interface IGenericReponse{
msg:string
status:boolean
goto:string
}