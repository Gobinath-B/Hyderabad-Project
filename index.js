var express = require("express");
var login = require('./routes/login')
var app = express();
const db = require('./config');
const product = require("./routes/product");
const fb = db.firestore()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/", express.static(__dirname + "/public"));
app.use("/product", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/products", (req, res) => {

  fb.collection('products').get().then(e=>{
    const data = []
    const doc = e.docs.forEach(e=>{
        data.push({...e.data(),id:e.id})
    })
    console.log();
    res.render("product",{data:data})
  })
});
app.get("/product/:id", async(req, res) =>{
  const id = req.params.id
  const relate=[]
  const data =  await fb.collection('products').doc(id).get()
  const cat =  await fb.collection('products').get()
  cat.forEach(doc=>{
    if(data.data().pcat==doc.data().pcat){
      if(data.id!=doc.id){
        relate.push({...doc.data(),id:doc.id})
      }
    }
  })
  
  res.render('singleproduct',{data:{...data.data(),id:data.id},relate:relate})
});
app.get("/clients", (req, res) => res.render("client"));
app.get("/history", (req, res) => res.render("history"));

app.use("/admin",product)

app.use("/admin/login",login)

app.get("/admin/dashboard", (req,res) => {
  fb.collection('products').get().then(e=>{
    const data = []
    const doc = e.docs.forEach(e=>{
        data.push({...e.data(),id:e.id})
    })
    console.log();
    res.render("admin/dashboard",{data:data})
  })
})

var server = app.listen(3000, function () {
  console.log("listening to port 3000");
});
