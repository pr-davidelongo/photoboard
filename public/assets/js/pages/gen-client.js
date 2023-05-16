/* Indirizzo server App */
const urlServer = 'http://localhost:3000/';

/* Variabili Globali */
var sUsr_id;
var sUsr;
var coinsData;
var priceCoin;

var doughnutChart;
var pieChart;
var barChart;
var bar2Chart;
var barVChart;


var colorCharts = ["#fbc658","#6BD098","#EF8157","#51BCDA","#BF51DA","#DAC151","#51DAC2","#5194DA","#7951DA","#E075A1"]
var colorChartsOp = ["#fbc65870","#6BD09870","#EF815770","#51BCDA70","#BF51DA70","#DAC15170","#51DAC270","#5194DA70","#7951DA70","#E075A170"]

var optSelCex=new Array();
optSelCex[0]=new Array("","--- Select ---","");
optSelCex[1]=new Array("binance","Binance");
// optSelCex[4]=new Array("bitpanda","BitPanda");
// optSelCex[5]=new Array("bitstamp","Bitstamp");
// optSelCex[5]=new Array("bittrex","Bittrex");
optSelCex[2]=new Array("cryptocom","Crypto.com");
// optSelCex[3]=new Array("coinbase","Coinbase");
// optSelCex[3]=new Array("kucoin","KuCoin");

var optSelCoin=new Array();
optSelCoin[0]=new Array("","--- Select ---","");
optSelCoin[1]=new Array("USDT","Tether USD","#26A17B");
optSelCoin[2]=new Array("BTC","Bitcoin","#F2A900");
optSelCoin[3]=new Array("ETH","Ethereum","#3C3C3D");
optSelCoin[4]=new Array("CRO","Cronos","#0A2040");
optSelCoin[5]=new Array("BNB","Binance","#FDD94F");
optSelCoin[6]=new Array("SOL","Solana","#77B5C5");
optSelCoin[7]=new Array("STX","Stacks","#6444FE");
optSelCoin[8]=new Array("ADA","Cardano","#123591");
optSelCoin[9]=new Array("DOGE","Dogecoin","#8C6228");
optSelCoin[10]=new Array("FLOW","Flow (Dapper Labs)","#09EF8A");
optSelCoin[11]=new Array("IOTX","IoTex","#2FC39E");
optSelCoin[12]=new Array("AAVE","Aave","");
optSelCoin[13]=new Array("ALGO","Algorand","");
optSelCoin[14]=new Array("ATOM","Cosmos","");
optSelCoin[15]=new Array("AVAX","Avalanche","#E84142");
optSelCoin[16]=new Array("AXS","Axie Infinity","");
optSelCoin[17]=new Array("BAT","Basic Attention Token","");
optSelCoin[18]=new Array("BUSB","Binance USD","");
optSelCoin[19]=new Array("CELO","Celo","");
optSelCoin[20]=new Array("CHZ","Chiliz","");
optSelCoin[21]=new Array("COMP","Compound","");
optSelCoin[22]=new Array("CRV","Curve DAO","");
optSelCoin[23]=new Array("DAI","Dai","");
optSelCoin[24]=new Array("DASH","Dash","");
optSelCoin[25]=new Array("DOT","Polkadot","");
optSelCoin[26]=new Array("EGLD","MultiversX","");
optSelCoin[27]=new Array("ENJ","Enjin Coin","");
optSelCoin[28]=new Array("EOS","EOS","");
optSelCoin[29]=new Array("FIL","Filecoin","");
optSelCoin[30]=new Array("FTM","Fantom","");
optSelCoin[31]=new Array("HOT","Holo","");
optSelCoin[32]=new Array("ICP","Internet Computer","");
optSelCoin[33]=new Array("ICX","ICON","");
optSelCoin[34]=new Array("KSM","Kusama","");
optSelCoin[35]=new Array("LINK","Chainlink","");
optSelCoin[36]=new Array("LTC","Litecoin","");
optSelCoin[37]=new Array("LUNA","Terra","");
optSelCoin[38]=new Array("LUNC","Terra Classic","");
optSelCoin[39]=new Array("MANA","Decentraland","");
optSelCoin[40]=new Array("MATIC","Polygon","");
optSelCoin[41]=new Array("NEAR","NEAR Protocol","");
optSelCoin[42]=new Array("NEO","Neo","");
optSelCoin[43]=new Array("NEXO","Nexo","");
optSelCoin[44]=new Array("ONE","Harmony","");
optSelCoin[45]=new Array("PAXG","PAX Gold","");
optSelCoin[46]=new Array("RUNE","Rune","");
optSelCoin[47]=new Array("SAND","SandBox","");
optSelCoin[48]=new Array("SHIB","Shiba INU","#F27E02");
optSelCoin[49]=new Array("SUSHI","Sushiswap","");
optSelCoin[50]=new Array("THETA","Theta Network","");
optSelCoin[51]=new Array("TRX","TRON","");
optSelCoin[52]=new Array("USDC","USD Coin","");
optSelCoin[53]=new Array("VET","VeChain","");
optSelCoin[54]=new Array("VVS","VVS Finance","");
optSelCoin[55]=new Array("WIN","WINkLink","#0D1836");
optSelCoin[56]=new Array("XLM","Stellar","");
optSelCoin[57]=new Array("XRP","XRP","");
optSelCoin[58]=new Array("YFI","Yearn.Finance","");
optSelCoin[59]=new Array("ZIL","Zilliqa","");

function get_param(arr, req, res) { // nome array dove cercare, valore da cercare dentro array, indice array da restituire
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == req){
      return arr[i][res]
    }else{return 0}
  }
}

/* Funzioni matematiche / grafici*/
function reduce_decimal(x,d) {
  return Number.parseFloat(x).toFixed(d);
}
function create_pieChart(htmlId, cName, xValues, yValues){
  pieChart = new Chart(htmlId, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: colorCharts,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: cName
      }
    }
  });
}
function create_doughnutChart(htmlId, cName, xValues, yValues){
  doughnutChart = new Chart(htmlId, {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: colorCharts,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: cName
      }
    }
  });
}
function create_barVChart(htmlId, cName, nLabels, barData1) { /* da ultimare */
var data = {
  labels: nLabels,
  datasets: [{
    axis: 'y',
    type: 'bar',
    order: 1,
    label: 'Gain or Loss [%]',
    data: barData1,
    borderWidth: 1,
    borderColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgba(54, 162, 235, 0.2)'
  }]
};
barVChart = new Chart(htmlId, {
  type: 'bar',
  data: data,
  fill: false,
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    },
    title: {
      display: true,
      text: cName
    }
  }
});
}

function create_2barChart(htmlId, cName, nLabels, barData1,barData2) { /* da ultimare */
  var data = {
    labels: nLabels,
    datasets: [{
      type: 'bar',
      order: 1,
      label: 'Value on wallet',
      data: barData1,
      borderWidth: 1,
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    }, 
    {
      type: 'bar',
      order: 2,
      label: 'Value Now',
      data: barData2,
      borderWidth: 1,
      borderColor: new Array(),
      backgroundColor: new Array()
    }]
  };

  bar2Chart = new Chart(htmlId, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      title: {
        display: true,
        text: cName
      }
    }
  });
}


/* Funzioni generiche per tutte le pagine */
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
