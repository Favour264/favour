const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const cors = require("cors")
const collection = require("./Mongo")

const app= express()
app.use(express.json())
app.use (express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})


const port = process?.env?.PORT || 4000;

app.post("/", async (req, res) => {
    try {
        const { msg } = req.body;
        const data = {
            msg: msg
        };

         // Insert a single document into the collection
         await collection.create(data);

         // Send a succes to the client
         res.status(200).json({ message: "Data inserted successfully" });
     } catch (error) {
         // If an error occurs, send an error response to the client
         console.error("Error inserting data:", error);
         res.status(500).json({ message: "Failed to insert data" });
     }
 });



app.listen(port,()=>{
    console.log("port connected")
})