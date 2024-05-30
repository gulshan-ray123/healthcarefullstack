var express = require('express');
var router = express.Router();
const multer  = require('multer')
const userModel=require("./users")
const patientModel=require("./patientdata")
const passport=require("passport");
const localStrategy= require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));
router.get('/',function(req,res,next){
  res.render("index");
  next();
});
router.use(express.urlencoded({extended: false}));
router.get('/login',(req,res)=>{
res.render("login")
});
router.get('/failure',(req,res)=>{

  res.render("successful")
})
router.get('/profile',isLoggedIn,(req,res)=>{
res.render("/login")
});
router.get("/mainwebsite",isLoggedIn,(req,res)=>{
  res.render("mainwebsite");
})
router.get('/ptprofile',isLoggedIn,(req,res)=>{
  res.render("/patientlogin")
  });
router.get("/patientlogin",isLoggedIn,(req,res)=>{
res.render("registration");
});
router.post('/register',(req,res)=>{
var userdata= new userModel({
  email: req.body.email,
  username:req.body.username,
  password:req.body.password
});
userModel.register(userdata,req.body.password)
.then(function(registeruser){
  passport.authenticate("local")(req,res,function(){
    res.redirect('/login');
  })
})
});

router.post('/loginuser',passport.authenticate("local",{
  successRedirect:"/mainwebsite",
  failureRedirect:"/failure"
}),(req,res)=>{
  // res.render('index')
});
router.get('/logout',(req,res,next)=>{
  req.logOut(function(err){
    if(err){
      return next(err)
    }
    else{
      res.redirect("/login")
    }
  })
})
router.post('/registerpt',(req,res)=>{
  var ptdata= new patientModel({
  First_name:req.body.fname,
  Middle_name:req.body.mname,
  Last_name:req.body.lname,
  Mobile:req.body.mobno,
  username:req.body.em1,
  D_O_B:req.body.dob,
  Town:req.body.town,
  Post_office:req.body.postoffice,
   Locality:req.body.locality,
   District:req.body.district,
   State:req.body.state,
   Pincode:req.body.pincode,
   Nominee:req.body.nominee,
   Phone:req.body.phone,
   Relation:req.body.relation,
  });
  patientModel.register(ptdata,req.body.em1)
.then(function(registeruser){
  passport.authenticate("local")(req,res,function(){
    res.redirect('/patientlogin');
  })
})
});
const storage= multer.diskStorage({
  destination: function(req,file,cb){
    return cb(null,'./uploads');
  },
  filename: function(req, file, cb){
    return cb(null,`${Date.now()}+${file.originalname}`);
  },
})
const upload=multer({storage, limits:{fileSize:1*1024*1024}
});
// var multiplefield= upload.fields([{name:'uplaodphoto'},{name:'reports'},{name:'yoursign'}])
router.post('/upload',  upload.fields([{
  name: 'uploadphoto', maxCount: 1
}, {
  name: 'reports', maxCount: 1,
},{
  name: 'yoursign',maxCount: 1
},
]), function (req, res) {
  console.log(req.body);
  console.log(req.file);
  return res.send("Patient Registered Successfully")}
 );
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect("/login")
  }
}
module.exports = router;
