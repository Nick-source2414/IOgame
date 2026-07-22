const express=require("express")
const app = express()
var users=[]
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));


//handles users submitting names
app.post("/username/",(req, res) => {
  user=req.body.name_field
  console.log(user)
  users.push(user)
  res.render("rps",{users:users.join("    "),thisUser:user})
  
});
app.get('/', (req, res) => {
    res.render("index")
    
    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});