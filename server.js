const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var formidable = require('formidable'); 
const fileUpload = require('express-fileupload');

var cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
var path = require("path");
var ObjectId = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(fileUpload());
app.use(express.static(__dirname + '/public'));

var db;
/*MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('brighter') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
}) */


MongoClient.connect('mongodb+srv://somen:somen@cluster0-aopro.gcp.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.log(err)
  db = client.db('somen') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
}) 


app.post('/map', (req, res) => {

  var mapLocation = req.body.mapCode;
  company_id = company_id;


  try {
    db.collection('Companies').updateOne(
       { "_id" : ObjectId(company_id)},
       { $set: { "mapCode" :mapLocation} }
    );
    console.log("updated"+ company_id);
 
 } catch (e) {
    print(e);
 }

})

app.post('/working-hours', (req, res) => {

  var myobj = { monday: req.body.day1,mondayOpen:req.body.day1open,mondayClose:req.body.day1close,
    tuesday:req.body.day2,tuesdayOpen:req.body.day2open,tuesdayClose:req.body.day2close,
    wensday:req.body.day3,wensdayOpen:req.body.day3open,wensdayClose:req.body.day3close,
    thursday:req.body.day4,thursdayOpen:req.body.day4open,thursdayClose:req.body.day4close,
    friday:req.body.day5,fridayOpen:req.body.day5open,fridayClose:req.body.day5close,
    surtday:req.body.day6,surtdayOpen:req.body.day6open,surtdayClose:req.body.day6close,
    sunday:req.body.day7,sundayOpen:req.body.day7open,sundayClose:req.body.day7close,
    company_id:company_id
  };

  db.collection('workingHours').insertOne(myobj, function(err, res) {
    if (err) return console.log(err)

    console.log('saved to database')
  // res.redirect('/categories')
  })

})










  app.post('/newCat', (req, res) => {

    var myobj = { name: req.body.name};

    
    db.collection('categories').insertOne(myobj, function(err, res) {
      if (err) return console.log(err)
  
      console.log('saved to database')
    // res.redirect('/categories')
    })

   
  })

  app.post('/newSubCat', (req, res) => {

    var myobj = { name: req.body.name,main_category:cat_id};
    

    
    db.collection('Subcategories').insertOne(myobj, function(err, res) {
      if (err) return console.log(err)
  
      console.log('saved to database')
    // res.redirect('/categories')
    })

   
  })



  app.post('/update-bg', (req, res) => {

var img = req.body.imageconve;
    company_id  = company_id; 
    try {
      db.collection('Companies').updateOne(
         { "_id" : ObjectId(company_id)},
         { $set: { "cover" :img} }
      );
      console.log("updated"+company_id);
    //  console.log(img);
   } catch (e) {
      print(e);
   }
  })



  app.post('/CreateCompany', (req, res) => {
var cover = "data:image/png;base64,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";
    var myobj = {name: req.body.name,category_id:req.body.cat,email:req.body.email,phone:req.body.phone,city:req.body.city
    ,sector:req.body.sector,zipCode:req.body.zipCode,street:req.body.street,createdBy:req.cookies.authName,cover:cover};

    
    db.collection('Companies').insertOne(myobj, function(err, res) {
      if (err) return console.log(err)
  
      console.log('saved to database');  
    })
  })









  app.post('/addPhoto', (req, res) => {
    
     var date = new Date();
    var myobj = {date: date,icon:req.files.sampleFile.name,company_id:company_id,name:req.body.name,price: req.body.price};


    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    let fileName = req.files.sampleFile.name
 
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('C:/Users/User/Desktop/brighter/public/uploads/'+fileName, function(err) {
      if (err)
        return res.status(500).send(err);
  
      //res.send('File uploaded!');

      db.collection('Gallery').insertOne(myobj, function(err, res) {
        if (err) return console.log(err)
    
        console.log('saved to database')
       
      // res.redirect('/categories')
      })
    });
    
  
  })


  app.post('/addMenus', (req, res) => {
    

    var myobj = {name: req.body.name,description:req.body.descri,company_id:company_id,icon:req.files.sampleFile.name};


    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    let fileName = req.files.sampleFile.name
 
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('C:/Users/User/Desktop/brighter/public/uploads/'+fileName, function(err) {
      if (err)
        return res.status(500).send(err);
  
      //res.send('File uploaded!');

      db.collection('companyMenus').insertOne(myobj, function(err, res) {
        if (err) return console.log(err)
    
        console.log('saved to database')
       
      // res.redirect('/categories')
      })
    });
    
  
  })




  app.post('/addService', (req, res) => {
    

    var myobj = {name: req.body.name,description:req.body.descri,company_id:company_id,icon:req.files.sampleFile.name};


    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    let fileName = req.files.sampleFile.name
 
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('C:/Users/User/Desktop/brighter/public/uploads/'+fileName, function(err) {
      if (err)
        return res.status(500).send(err);
  
      //res.send('File uploaded!');

      db.collection('Services').insertOne(myobj, function(err, res) {
        if (err) return console.log(err)
    
        console.log('saved to database')
       
      // res.redirect('/categories')
      })
    });
    
  
  })




  app.post('/addAtm', (req, res) => {


    var district = req.body.district;
    var city = req.body.city;
    var map = req.body.maploc;
    company_id = company_id ;

    var myobj = { district:district, city:city, mapCode:map,company:company_id};
  
    db.collection('ATMs').insertOne(myobj, function(err, res) {
          if (err) return console.log(err)
      
          console.log('saved to database')
  
        })

      
        res.redirect('/User-Dashboard')  

  })





  app.post('/form-register', (req, res) => {


    var pass1 = req.body.password;
    var pass2 = req.body.passwor;
    var email = req.body.email;
    if(pass1 == pass2){

      var password = req.body.password;
      bcrypt.hash(password,10,function(err,hash){
  
  
        var myobj = { names: req.body.name, email:req.body.email, password:hash};
  
      
        db.collection('Users').insertOne(myobj, function(err, res) {
          if (err) return console.log(err)
      
          console.log('saved to database')
  
        })
        res.cookie('authName',email,'authPass', { maxAge: 900000, httpOnly: true }); 
        console.log(req.cookies.authName);

      
        res.redirect('/User-Dashboard')  
                              
      });
     
  

    }else{
      console.log("Password don't March");
    }
  
  })


  app.get('/dashboard', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 
    category= req.query.uni; 
    res.render('accounts/dashboard.ejs')
   });


   app.get('/menus', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 
    db.collection('companyMenus').find({company_id:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs 
     res.render('accounts/menus.ejs', {row: result})
   
    })
   });
   app.get('/atms', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 
    db.collection('ATMs').find({company:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs 
     res.render('accounts/atms.ejs', {row: result})
   
    })
   });
   app.get('/branches', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 

    db.collection('bankBranch').find({company:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs 
     res.render('accounts/branches.ejs', {row: result})
   
    })
   });

   app.post('/addBranch', function (req, res,html) {
    var name = req.body.name;
    var district = req.body.District;
    var city = req.body.city;
    var map = req.body.map;
    company_id = company_id ;

    var myobj = {name:name,district:district, city:city, mapCode:map,company:company_id};
  
    db.collection('bankBranch').insertOne(myobj, function(err, res) {
          if (err) return console.log(err)
      
          console.log('saved to database')
  
        })

      
        res.redirect('/User-Dashboard')  
   });

   app.get('/info', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 
    res.render('accounts/info.ejs')
   });

   app.get('/galleries', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 

    db.collection('Gallery').find({company_id:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs 
     res.render('accounts/galleries.ejs', {row: result})
   
    })
   
   });


   app.get('/geo-location', function (req, res,html) {
    company_id = req.query.id; 
    company_name= req.query.name; 

    res.render('accounts/google_map.ejs')
   });
   

   app.get('/register', function (req, res,html) {
    res.render('accounts/register.ejs')
    
   });


   app.get('/company-profile', function (req, res,html) {

    company_id = req.query.company; 
    db.collection('Companies').find({_id :ObjectId(company_id)}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
    
      res.render('accounts/company-profile.ejs', {user: result})
    })
    //res.render('accounts/company-profile.ejs')
    
   });







   var user = [];
   var row = [];
   var service = [];
   var atms = [];
   var branches = [];
   var menus = [];
   app.get('/profile', function (req, res,html) {

    company_id = req.query.id; 
    category = req.query.uni;
    name = req.query.name;
    db.collection('Companies').find({_id :ObjectId(company_id)}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
    
     // res.render('visitor/company-profile.ejs', {user: result})
      for (i=0; i<result.length; i++) {
      user[i] = result[i];
      }
    });

    db.collection('workingHours').find({company_id:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      for (i=0; i<result.length; i++) {
        row[i] = result[i];
        }
     // res.render('visitor/company-profile.ejs', {user: result})
    });
    db.collection('Services').find({company_id:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      for (i=0; i<result.length; i++) {
        service[i] = result[i];
        }
     // res.render('visitor/company-profile.ejs', {user: result})
    })

    db.collection('ATMs').find({company:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      for (i=0; i<result.length; i++) {
        atms[i] = result[i];
        }
     // res.render('visitor/company-profile.ejs', {user: result})
    })

    db.collection('bankBranch').find({company:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      for (i=0; i<result.length; i++) {
        branches[i] = result[i];
        }
     // res.render('visitor/company-profile.ejs', {user: result})
    })

    db.collection('companyMenus').find({company_id:company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      for (i=0; i<result.length; i++) {
        menus[i] = result[i];
        }
     // res.render('visitor/company-profile.ejs', {user: result})
    })
    

    res.render('visitor/company-profile.ejs', {user: user, row:row,service:service, menus:menus,branch:branches,atms:atms})
   });





   app.get('/', function (req, res,html) {
    
    db.collection('Services').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('../index.ejs', {row: result})
   });
  })
 



  app.get('/companies', (req, res) => {
    var category = req.query.id;
    cat_name = req.query.category;

    db.collection('Companies').find({category_id:category}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      Auth = req.cookies.authName;
      res.render('visitor/company-list.ejs', {row: result})
    })
  }) 




   app.get('/User-Dashboard', (req, res) => {
    db.collection('Companies').find({createdBy:req.cookies.authName}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      Auth = req.cookies.authName;
      res.render('accounts/index.ejs', {user: result})
    })
  }) 
 

   app.get('/user-login', function (req, res,html) {
     var username= req.cookies.authName;
     var password = req.cookies.authPass
     console.log(req.cookies);
    

     if(!username && !password){
      res.render('accounts/login.ejs')
     }else{
      res.redirect('/User-Dashboard') 
     }
    
   });
 

   app.get('', function (req, res,html) {
    
     
   });


   app.get('/services', (req, res) => {
     
    company_id = req.query.id; 
    db.collection('Services').find({company_id :company_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('accounts/services.ejs', {user: result})
    })
  }) 
  
 

  app.get('/categories', (req, res) => {
    db.collection('categories').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('admin/categories.ejs', {cat: result})
    })
  }) 

  app.get('/Sub-category', (req, res) => {
    cat_id = req.query.id; 
    db.collection('Subcategories').find({main_category :cat_id}).toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('admin/subcategory.ejs', {cat: result})
    })
  })


  app.get('/News', (req, res) => {
    db.collection('Subcategories').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('accounts/new_registretion.ejs', {cat: result})
    })
  })


  app.delete('/delete', (req, res) => {
    db.collection('categories').findOneAndDelete({id: req.body._id}, (err, result) => {
      if (err) return res.send(500, err)
      res.send('A darth vadar quote got deleted')
    })
  })


 
//-----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------Login  Code -----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
    app.post('/form-login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
  
    db.collection('Users').findOne({ email: email}, function(err, user) {
      if(user ===null){
     
     }else if (user.email === email){

     bcrypt.compare(password, user.password, function (err, result) {  
             if (result == true) {      
                   

              res.cookie('authName',email, { maxAge: 900000, httpOnly: true }); 
              res.cookie('authPass',user.password, { maxAge: 900000, httpOnly: true}); 
              console.log(req.cookies.authName);
              console.log(req.cookies.authPass);
              res.redirect('/User-Dashboard') 


                         } else {      
                              res.send('Incorrect password');    
                                   res.redirect('/');      
                                    }   
                                     });
     
   

     
   } else {
     console.log("Credentials wrong");
     res.end("Login invalid");
     
   }
});
   })
   //-----------------------------------------------------------------------------------------------------------------
   //--------------------------------------End of Login---------------------------------------------------------------
   //-----------------------------------------------------------------------------------------------------------------