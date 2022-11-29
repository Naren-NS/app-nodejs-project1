// const express=require("express");
// const cors=require("cors");
// const app=express();//creating instance for express.js package
// const port=8081;//listening on port 8081 according to assignment
// const mongoDB=require("./mongoTEST.js");//importing mongoTEST.js and cann access functions in it
// const PES=require("./PES2UG21CS319.js");
// app.use(express.json());//specifies that API endpoint output is the json object
// app.use(cors({origin:"*"}));//* accepts all the urls from any browser, doesnt show cors origin error

// app.get('/api/getPersonalDetails',(req,res)=>{
//     res.json(getPersonalDetails());
// });//when we call get endpoint we try to create a response object

// app.get('/api/insertDocument',(req,res)=>{
//     res.json(mongoDB.insertDocument());
// });
// app.post('/api/insertPersonalDetails',(req,res)=>{
//     res.json(mongoDB.insertPersonalDetails(req.body));
// })

// app.post('/api/getStudentDetails',(req,res)=>{
//     res.json(getStudentDetails(req.body.name));//req.body is 
// });//(url of api endpoint,(req,res)//(details from url gets accepted here))
// //in req/request we will pass our "student_name" parameter
// //we cannot test post api endpoint on google like get api endpoint

// //insertCompanies is the method name
// app.post('/api/insertCompanies',(req,res)=>{

//     res.status(200).json(PES.insertCompanies(req.body));
// })

// //api endpoint=middle layer of frontends url

// function getPersonalDetails() {
//     var personal_details =
//     {
//         username:"Naren NS",
//         dob:"10-07-03",
//         gender:"M"
//     };
//     //console.log(personal_details);
//     return personal_details;//q.what happens if we dont return anything?
// }
// //getPersonalDetails()

// function getStudentDetails(student_name){
//     var naren_details={
//         username:"Naren NS",
//         dob:"10-07-03",
//         gender:"M"
//     };
//     var veera_details={
//         username:"Veera",
//         dob:"10-07-97",
//         gender:"M"
//     };
//     if(student_name==="Naren NS"){
//         console.log(naren_details);
//         return naren_details;
//     }
//     else if(student_name==="Veera"){
//         console.log(veera_details);
//         return veera_details;
//     }
    
// }
// //getStudentDetails("Veera");
// app.listen(port,()=>{
//     console.log("API IS LISTENING ON PORT:" + port);
// });//app.listen makes sure that the app is running on the 8081 port
const express=require("express");
const cors=require("cors");
const app=express();//creating instance for express.js package
const port=8081;//listening on port 8081 according to assignment
const PES=require("./PES2UG21CS319.js");
app.use(express.json());//specifies that API endpoint output is the json object
app.use(cors({origin:"*"}));//* accepts all the urls from any browser, doesnt show cors origin error

//insertCompanies is the method name
app.post('/api/insertCompanies',(req,res)=>{

    res.status(200).json(PES.insertCompanies(req.body));
})
 app.get('/api/insertCompanies',(req,res)=>{
     res.json(mongoDB.insertCompanies());
 });
app.listen(port,()=>{
    console.log("API IS LISTENING ON PORT:" + port);
});//app.listen makes sure that the app is running on the 8081 port
