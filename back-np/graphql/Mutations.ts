import { IResolvers } from "@graphql-tools/utils";
import Register from "../controllers/ApiMongodb/M/Register";

export default {
    Register:( _:void, data:any, context:any ) => Register(_, data, context ),
} as IResolvers
