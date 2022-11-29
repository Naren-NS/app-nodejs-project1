const express=require("express");
const cors=require("cors");
const app=express();//creating instance for express.js package
const port=8081;
const PES=require("./PES2UG21CS319.js");//importing PES2UG21CS319.js and cann access functions in it
app.use(express.json());//specifies that API endpoint output is the json object
app.use(cors({origin:"*"}));//* accepts all the urls from any browser, doesnt show cors origin error

//insertCompanies is the method name
app.post('/api/insertCompanies',(req,res)=>{

    res.status(200).json(PES.insertCompanies(req.body));
})

//app.listen makes sure that the app is running on the 3000 port
app.listen(port,()=>{
    console.log("API IS LISTENING ON PORT:" + port);
});