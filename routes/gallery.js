const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  const {f,p1,p2} = req.query
  if (req.session.usr_id >0){
    res.render('gallery', { title: 'Gallery - PhotoBoard', session : req.session });
  }else{
    res.redirect("/login");
  }
});






router.post('/upload', function(req, res, next){
  if(!req.files) {	
    res.send({
      message: 'Errore: nessun file caricato'
    });
  }
  else {
    
    // Path del file caricato nella cartella temporanea
    let tempFilePath = req.files.contract.tempFilePath;;
        console.log(req.files)
    // qui possiamo utilizzare il file, accedendo al
    // path definito in tempFilePath	
    console.log(`File caricato con successo: ${tempFilePath}`)
    // ...
        
    // Risposta al browser
    /* res.send({
      message: 'Caricamento effettuato con successo.'
    }) */
    res.redirect("/gallery");   
    res.end();
  }
  
});


module.exports = router;
