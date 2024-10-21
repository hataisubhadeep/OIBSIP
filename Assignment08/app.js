const express = require("express")
const app = express()
const port = process.env.PORT ||3000
const hbs =require("hbs");
const path = require("path");
const views_path = path.join(__dirname,"/templates/views")

app.set("view engine", "hbs")
app.set("views", views_path)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/display", (req, res)=>{
    res.send("REQUEST ACCEPTED :)  ")
})
app.get("/myname",(req,res)=>{
    res.render("index.hbs")
})

