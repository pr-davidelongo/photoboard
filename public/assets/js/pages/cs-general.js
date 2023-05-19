/* Indirizzo server App */
const urlServer = 'http://localhost:3000/';

/* Variabili Globali */
var sUsr_id;
var sUsr;

/* var optSelCex=new Array();
optSelCex[0]=new Array("","--- Select ---","");
optSelCex[1]=new Array("binance","Binance");
optSelCex[2]=new Array("cryptocom","Crypto.com"); */


/* Funzioni generiche per tutte le pagine */
function get_param(arr, req, res) { // nome array dove cercare, valore da cercare dentro array, indice array da restituire
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == req){
      return arr[i][res]
    }else{return 0}
  }
}
function set_user(id,usr){
  if(id !="" ||id != undefined){
    sUsr_id = id;
  }
  if(usr !="" ||usr != undefined){
    sUsr = usr;
  }
/*     console.log("setUser --> id "+sUsr_id)
  console.log("setUser --> usr "+sUsr) */
}
function select_row(tbl, trID){
  switch (tbl) { //indico la tabella su cui si sta agendo
    case "wallet-cryptoTbl": // quando premo una riga della tabella crypto wallet
    let cex = $(`.price-${trID}`).attr("class").slice($(`.price-${trID}`).attr("class").indexOf(' ')+5 ,$(`.price-${trID}`).attr("class").length);
      for (let iC = 0; iC < optSelCoin.length; iC++) {
        if (optSelCoin[iC][0] == trID) {
          $("#val0").html(`<option value="${trID}" selected>${optSelCoin[iC][1]}</option>`);
          for (let i = 0; i < optSelCex.length; i++) {
            if (optSelCex[i][0]== cex) {
              $("#val1").html(`<option value="${cex}" selected>${optSelCex[i][1]}</option>`);
            }
          }
          $(".cat-coin").html(`<img class="iconCoin" src="./assets/img/crypto-ico/${trID}.png"> ${optSelCoin[iC][1]}`);
          iC = optSelCoin.length;
        }
      }
      get_cryptoTransactions(trID);
    break;

    case "actions-wallet-cryptoTbl": // quando premo ADD Coin
      $("#val0").html(`<option selected>${optSelCoin[0][1]}</option>`);
      for (let iC = 1; iC < optSelCoin.length; iC++) {
        $("#val0").append(`<option value="${optSelCoin[iC][0]}">${optSelCoin[iC][1]}</option>`);
      }
      $("#val1").html(`<option selected>${optSelCex[0][1]}</option>`);
      for (let iX = 1; iX < optSelCex.length; iX++) {
        $("#val1").append(`<option value="${optSelCex[iX][0]}">${optSelCex[iX][1]}</option>`);
      }
    break; 

    

    case "funds":   
    break;

    default:
      console.log ("WARN: Tabella non riconosciuta");
    break;
  }
}
/* Funzioni matematiche*/
function reduce_decimal(x,d) {
  return Number.parseFloat(x).toFixed(d);
}