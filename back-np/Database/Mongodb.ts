import { Db, MongoClient } from "mongodb";



     export default  async  ():Promise<Db | undefined> => {

        let db:Db;
        if(__dirname.includes('C:') || __dirname.includes("/ric")){
            try {
            const client =  MongoClient.connect(`${process.env.DBMongo}`);

            db = (await client).db();

                console.log(`\n 
                      <================> ${db.databaseName} <================>\n 
                      <============>   Developtment    <================>`);

                return db;
            } catch (error) { console.log(`> existe un ${error}`) }
        }else{    
            try {
                const client =  MongoClient.connect( `${process.env.datbaseProduction}`);
                db = (await client).db();
                       console.log(`\n 
                      <================> ${db.databaseName} <================>\n 
                      <============>   Production    <================>`);
                return db;
            } catch (error) {console.log(`> existe un ${error}`);}
        }
    } 