import { gql } from "apollo-server-core";

const schema = gql`
type ResConApis{
  msg: String
  status:Boolean
  ActionResult:String
}
type GenerigResp{
  ResConApis:ResConApis
}

type Query{
  Login:String
}

type Mutation{
    Register(user:String):String
}

`;




export default [
    schema
]