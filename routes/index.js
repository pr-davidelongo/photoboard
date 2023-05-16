
const express = require('express');
const router = express.Router();

const db = require('../util/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("--> "+req.session.usr_id);
  if (req.session.usr_id >0){
    res.render('dashboard', { title: 'WalletApp', session : req.session });
    res.redirect("/dashboard");
    
  }else{
    // res.render('login', { title: 'WalletApp', session : req.session });
    res.redirect("/login");
  }
});

module.exports = router;