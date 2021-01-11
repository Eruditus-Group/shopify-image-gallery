const express = require('express');
const router = express.Router();
const passport = require('passport');
const csrf =  require('csurf');
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const userController = require('../controllers/userController')
let Product = require('../models/product');
let User = require('../models/user');

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "Profile",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
  });
  const parser = multer({ storage: storage }); 
 



let csrfProtection = csrf(); 
router.use(csrfProtection);




// get user dashboard with order history
router.get('/profile',userController.isLoggedIn,userController.getUserDashBoard);

// get sign in page
router.get('/upload',userController.isLoggedIn,userController.getUploadPage);

router.get('/viewUploads',userController.isLoggedIn,userController.getUploads);






// log out the user
router.get('/logout',userController.isLoggedIn,function(req, res, next){
    req.logout();
   res.redirect('/');
});

// upload image products
router.post('/upload',parser.single("image"), userController.isLoggedIn, function (req, res, next) {

    new Product({
        imagePath:req.file.url,
        title: req.body.title,
        description:req.body.description,
        price:req.body.price,
        user: req.user
    }).save((err,result)=>{
        if(err) throw err;

        if(result){
           
            req.flash('success', 'Image Uploaded successfully');
            res.redirect('/');
        }
    });

   
});

// checking where login is not needed
router.use('/', userController.isNotLoggedIn,function(req,res,next){
   return next();
});


// get the signup page
router.get('/signup',userController.getSignUpPage);


// user signup functionality
router.post('/signup',passport.authenticate('local.signup',{
    //successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}),function(req,res,next){
    if(req.session.oldUrl){
        let oldLink = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldLink);
        
    }else{
        res.redirect('/user/profile');
    }
});


//user sigin in functinality
router.post('/signin',passport.authenticate('local.signin',{
    //successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}),function(req,res,next){
    if(req.session.oldUrl){
        let oldLink = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldLink);
    }else{
        res.redirect('/user/profile');
    }
});





// get sign in page
router.get('/signin',userController.getSignInPage);






module.exports = router; 

