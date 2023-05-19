
/* Require modulo */
const express = require('express');
const router = express.Router();

const db = require('../util/db');

const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;


/* GET users listing. */
router.get('/', function(req, res, next) {

  const {msg} = req.query

  req.session.msg = msg;
  if (req.session.usr_id >0){
    res.render('clients', { title: 'Clients - PhotoBoard', session : req.session });

    console.log(req.session.msg)
  }else{
    res.redirect("/login");
  }

});


router.get('/tbl', function(req, res, next) {
  const {ph_id} = req.query
  
  let returnStr='';
  let query = `SELECT * FROM clients WHERE ph_id = ${ph_id}`
  db.query(query, function(error, data){
    if(data.length > 0){
      for (let r = 0; r < data.length; r++) {
        returnStr = returnStr+`<tr><td>${data[r].name}</td><td>${data[r].surname}</td><td>${data[r].email}</td><td>${data[r].phone}</td>
        <td class="td-act"><a href="#get_contract(${data[r].contract})"><i class="nc-icon nc-paper"></i></a></td>
        <td class="td-act"><a href="#get_contract(${data[r].gallery_id})"><i class="nc-icon nc-album-2"></i></a></td>
        <td class="td-act"><a href="#get_contract(${data[r].album_id})"><i class="nc-icon nc-book-bookmark"></i></a></td></tr>`;
      }
      res.status(200).send(returnStr);
    }else{
      res.send(null);
    }
    res.end();
  });
});


router.post('/new', function(req, res, next){

  let _ph = req.body.ph_id;
  let _name = req.body.name;
  let _surname = req.body.surname;
  let _email = req.body.email;
  let _tel = req.body.tel;
  let _psw = req.body.client_psw;
  let _date = req.body.event_date;
 
  let msg = '', filePath = '', fileName = '';
  let year = new Date().getFullYear();

  if(!req.files) {	
    console.log("file non caricato")
  }
  else {
    let tempFilePath = req.files.contract.tempFilePath;
    let mimeType = req.files.contract.mimetype;
    mimeType = mimeType.slice(mimeType.indexOf('/')+1,mimeType.length);
    filePath = `uploads/contracts/${_ph}/${year}/`;
    fileName =`${_date}_${_ph}-${_name}${_surname}-contract.${mimeType}`;


    if (mimeType == "png" || "jpg" || "jpeg" || "pdf") {
      fs.mkdir(filePath, (err) => {
        if (err) {
          return console.error(err);
        }
      });
      fs.copyFile(tempFilePath, filePath+fileName.toLowerCase(), 0, (err) => {
        if ( err ) throw err;
        console.log('Copia eseguita con succcesso');
      });
      fs.unlink(tempFilePath, function(err) {
        if (err) throw err;
        console.log('File tmp rimosso con successo');
      });

    } else {
      msg = "Estensione FILE non supportata ! Puoi caricare solo: PNG, JPG, PDF.";
      res.redirect(`/clients?msg=${msg}`);
    }
  }


  let query = "INSERT INTO users (`id`, `sid`, `lvl`, `usr`, `psw`) VALUES (NULL, '', 1, 'pppppp', 'pppppp');"

  
  // 'INSERT INTO users (`id`, `sid`, `lvl`, `usr`, `psw`) VALUES '+`(NULL, '', 1, '${_email}', '${_psw}');
  // INSERT INTO clients `+'(`id`, `c_date`, `usr_id`, `ph_id`,`name`, `surname`, `email`, `phone`, `contract`, `album_id`, `gallery_id`) VALUES '+
  // `(NULL , '${_date}', -1, ${_ph}, '${_name}', '${_surname}', '${_email}', '${_tel}', '${fileName}', -1, -1);
  // UPDATE clients SET usr_id = ( SELECT id FROM users WHERE users.usr = '${_email}' ) WHERE clients.email = '${_email}'`

  console.log(query);
  db.query(query, function(err, data){
    if (err) throw err;
    msg = "Nuovo cliente aggiunto!";
  });

  query = "INSERT INTO clients (`id`, `c_date`, `usr_id`, `ph_id`,`name`, `surname`, `email`, `phone`, `contract`, `album_id`, `gallery_id`) VALUES (NULL , '2023-02-09', -1, 1, 'pppppp', 'pppppp', 'pppppp', '33333', 'pppp.pdf', -1, -1);"
  console.log(query);
  db.query(query, function(err, data){
    if (err) throw err;
    msg = "Nuovo cliente aggiunto!";
  });

  query = "UPDATE clients SET usr_id = ( SELECT id FROM users WHERE users.usr = 'pppppp' ) WHERE clients.email = 'pppppp';"
  console.log(query);
  db.query(query, function(err, data){
    if (err) throw err;
    msg = "Nuovo cliente aggiunto!";
  });
  
   
  
 



  res.redirect(`/clients?msg=${msg}`);
  res.end();
});



module.exports = router;
