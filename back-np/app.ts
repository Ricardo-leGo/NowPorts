
  
  import * as         dotenv from 'dotenv';
  import path from 'path';
  dotenv.config();
  
  import              connectionBase  from './Database/Mongodb';
  import              express         from 'express';
  import            { ApolloServer }  from 'apollo-server-express';
  import              depthLimit      from 'graphql-depth-limit';
  import            { createServer }  from 'http';
  import              compression     from 'compression';
  import              cors            from 'cors';
  import              schema          from './graphql/Schema'; 
  import bodyParser from 'body-parser';
import { decodeToken, VerifyToken } from './Lib/JsonWebToken';
import routes from './routes';
import Register from './routes/Register';
import Login from './routes/Login';
  
  const getUser     = (token:string):any    => decodeToken( token );
  const verifyToken = (token:string):string => VerifyToken( token );
  (async function(){
    const     db  = connectionBase();
    const     PORT       = Number(process.env.PORT);
    const     app        = express();
      let     context =  async (  conn:any  ):Promise<any>  => { 
      let     token:string = conn.req ? await conn.req?.headers?.authorization : await conn.connection?.authorization;
      let     User:Partial<any>;
    await getUser(token) && !verifyToken(token).includes('EL token es inválido')  ?
      User = await getUser(token):User={};
      return   { db , token , User ,req: conn.req , connection: conn.connection };
      }
  
    let server  = new ApolloServer({
        schema: await schema, 
        context: context,
        validationRules:[depthLimit(7)],
        introspection: true,
      });
  
    await server.start();
  
    app.use('*',
              cors({
                credentials:true,
                origin:"*"
              }), 

    compression()
  );

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  

  server.applyMiddleware({ app, path: '/api/graphql' });
  
  app.use('/', routes );
  app.use( "/Auth", Register );
  app.use( "/Auth", Login );

  const httpServer = createServer( app );

    httpServer.listen(
       Number(process.env.PORT)
      ,
      (): void => console.log(`\n
      Graphql está listo en  http://localhost:${PORT}/api/graphql
      \n
      Express está listo en: /
      `))
  }
  )();