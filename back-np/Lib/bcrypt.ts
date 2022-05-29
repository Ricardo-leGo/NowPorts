import bcrypt       from 'bcrypt';

export const HashPass = async (pass:string) => 
bcrypt.hashSync(
    pass,
    bcrypt.genSaltSync(Number(process.env.SALT))
    );


export const ComparePass = async ( password:string , passwordDB:string):Promise<boolean> => ( bcrypt.compareSync( password,  passwordDB ));