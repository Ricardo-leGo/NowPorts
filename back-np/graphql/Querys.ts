import { IResolvers } from "@graphql-tools/utils";
import Login from "../controllers/ApiMongodb/Q/Login";


export default  {
    Login:( _:void, data:any, context:any ) => Login(_, data, context ),
}as IResolvers
