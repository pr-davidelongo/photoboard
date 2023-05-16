
const express = require('express');
const router = express.Router();

const db = require('../util/db');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'WalletAPP - Login', session : req.session });
});

router.post('/auth', function(request, response, next){

  let _usr = request.body.username;
  let _psw = request.body.user_password;
  if(_usr && _psw){
    let query = `SELECT * FROM users WHERE usr = "${_usr}"`;
    db.query(query, function(error, data){
      if(data.length > 0){
        for(var count = 0; count < data.length; count++){
          if(data[count].psw == _psw){
            request.session.usr = data[count].usr;
            request.session.usr_id = data[count].id;
            request.session.usr_level = data[count].level;
            response.redirect("/dashboard");
          }else{
            // response.send('Incorrect Password');
            request.session.wPsw = true;
            response.redirect("../");
          }
        }
      }else{
        // response.send('Incorrect Email Address')
        request.session.wUsr = true;
        response.redirect("../");;
      }
      response.end();
    });
  }else{
    response.send('Please Enter Email Address and Password Details');
    response.end();
  }
});

router.get('/logout', function(request, response, next){
  request.session.destroy();
  response.redirect("/");
});


module.exports = router;