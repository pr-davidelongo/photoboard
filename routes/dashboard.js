
const express = require('express');
const router = express.Router();

const db = require('../util/db');

/* GET fiat page. */
router.get('/', function(req, res, next) {
  console.log("--> "+req.session.usr_id);
  if (req.session.usr_id >0){
    res.render('dashboard', { title: 'WalletAPP - Dashboard', session : req.session });
    
  }else{
    // res.render('login', { title: 'WalletApp', session : req.session });
    res.redirect("/login");
  }
});

module.exports = router;