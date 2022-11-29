//mongodb is a library and MongoClient is a class being taken from mongodb library
const {MongoClient}=require('mongodb');
//we made a connection between node js and mongo db(uri is a connection string)
const uri = "mongodb+srv://Naren123:Naren%408073228873@cluster0.mcm1wkj.mongodb.net/?retryWrites=true&w=majority";
//all mongo db operations can be executed by using the 'client' variable
const client = new MongoClient(uri);
const insertCompanies=(data)=>{
    try {
        //connect to db name 'Bangalore_City' and collection name 'Companies';collection is always in a deatabase
        const clxn = client.db("Bangalore_City").collection("Companies");
        //the 'data' is values coming from frontend; ie. in this case we are not creating a frontend but we are getting values from outside
        clxn.insertOne(data).then((res)=>{
            const result=res;
            console.log(result); 
        });
    }
    catch(e){
        //prints error msg
        console.log(e);
    }
}
//we export method names
module.exports = { insertCompanies }
