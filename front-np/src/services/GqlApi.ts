
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: String( process.env.REACT_APP_URLgql )  ?  
  String( process.env.REACT_APP_URLgql ) : 
  "http://localhost:3150/graphql",
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      auth: localStorage.getItem( String(process.env.REACT_APP_TokenName)) ?? "",
    }
  }
});

const client = new ApolloClient({

  link:authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false

  })
});

export default client;