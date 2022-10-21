
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://Naren123:Naren%408073228873@cluster0.mcm1wkj.mongodb.net/?retryWrites=true&w=majority";//we made a connection between node js and mongo db(uri is a connection string)
const client = new MongoClient(uri);
//line4=we're creating an instance to create a database where connection string uri is passed as a parameter

/*client.(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
function insertDocument(){
  try{
    const clxn = client.db("student_database").collection("student_registration");//we're trying to access the particular database and the particular collection;collection is always inside a database.
    const student_data={
        name:"Naren",
        age:19,
        gender:"Male"
    };//student_data is json object that we are creating
    const result=clxn.insertOne(student_data);//inserting student_data(a json object) into student_registration colection
    //clxn is an isntance of MongoDB
    console.log(result);
}
catch(e){
  console.log(e);//prints error msg
}
}
module.exports={insertDocument}
