const express=require("express")
const app = express()
var users=[]
var path = require("path");
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
var htmlPath = path.join(__dirname, "views");
app.use(express.static(htmlPath))
var session = require('express-session');
app.use(
  session({
    secret: '£))',
    resave: false,
    saveUninitialized: true,
  })
);
//handles users submitting names
app.post("/rps/challenge",(req,res)=>{
    
  console.log(req.body.id)
  res.render("rps")
});
app.post("/rps/",(req, res) => {
    
  if(!req.session.user){
    user=req.body.name_field
    req.session.user=user
    console.log(user)
    users.push(user)
  }
  res.render("rps",{users:users.join("    "),thisUser:req.session.user,challengers:users})
});
app.get("/rps/",(req, res) => {
  
  res.render("rps",{users:users.join("    "),thisUser:req.session.user,challengers:users})

});
app.get('/', (req, res) => {
    if(!req.session.user){
        res.render("index.ejs")
    }else{
        res.redirect("/rps/")
    }
    
    
    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


