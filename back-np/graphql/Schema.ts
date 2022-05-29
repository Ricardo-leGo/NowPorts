import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from './Resolvers';
import types from './Types';

const schema =  makeExecutableSchema ({

      typeDefs: types ,
      resolvers

});

export default schema