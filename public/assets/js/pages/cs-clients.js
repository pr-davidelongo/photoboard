const html_formNewClient = `
<div class="card-body"><p class="card-category">New client info</p>
  <form action="/clients/new">
    <div class="row">
      <div class="col-sm-6"><label for="text">Name</label><input type="text" name="name" placeholder="name" class="form-control" required/></div>
      <div class="col-sm-6"><label for="text">Surname</label><input type="text" name="surname" placeholder="surname" class="form-control" required/></div>
    </div>
    <div class="row">
      <div class="col-sm-6"><label for="email">e-Mail</label><input type="email" name="email" placeholder="email" class="form-control" required/></div>
      <div class="col-sm-6"><label for="tel">Phone</label><input type="tel" name="tel" placeholder="phone" class="form-control" required/></div>
    </div>
    <div class="row">
      <div class="col-sm-6"><label for="text">Client Psw</label><input type="text" name="client_psw" placeholder="client password" class="form-control" required/></div>
      <div class="col-sm-6"><label for="file">Contract</label><input type="file" name="contract" placeholder="contract.pdf" class="form-control" required/></div>
    </div>
    <div class="row">
      <div class="col-sm-12"><input type="submit" class="btn btn-primary btn-act" value="ADD CLIENT" /></div>
    </div>
  </form>
</div>`
const html_formRemoveClient = `
<div class="card-body"><p class="card-category">Remove client</p>
  <form action="#">
    <div class="row">
      <div class="col-sm-6"><label for="text">Clients</label><select  class="form-control" id="val0" name="val0" value="-1" required><option>pippo</option><option>pluto</option></select></div>

      <div class="col-sm-6"><p>Text</p><p>Text</p><p>Text</p></div>
    </div>
    <div class="row">
      <div class="col-sm-12"><input type="submit" class="btn btn-primary btn-act" value="REMOVE CLIENT" /></div>
    </div>
  </form>
</div>`



function search_tblClient(){
  let input, filter, tr, td, txtValue, a;

  input = document.getElementById('tbl-search');
  filter = input.value.toUpperCase();
  tbl = document.getElementById("tbl-clients");
  tr = tbl.getElementsByTagName('tr');

  for (let r = 0; r < tr.length; r++){
    td = tr[r].getElementsByTagName('td');
    for (let c = 0; c < td.length; c++) {
      console.log(td[c].textContent,' - ',td[c].innerText)
      txtValue = td[c].textContent || td[c].innerText;
      console.log(txtValue.toUpperCase().indexOf(filter))
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[r].style.display = "";
        c = td.length;
      } else {
        tr[r].style.display = "none";
      }
    }
  }
}

function get_tblClients(){
  $.ajax({
    url: urlServer+`clients/tbl?ph_id=${sUsr_id}`,
    type:'GET',
    caches: false,
    // dataType:'JSON',
    success: function(data){
      $("#tbl-clients tbody").html(data);

      let rowTbl = $("#tbl-clients tbody").find("tr");
      $("#numClient").html(rowTbl.length);
      
    }
  })
}

function put_newClient(){
  let inputs = $("#form-info-client .card-body").find("input");
  console.log(inputs)
  $.ajax({
    url: urlServer+`clients/new?ph_id=${sUsr_id}
    &name=${inputs[0].value}
    &surname=${inputs[1].value}
    &email=${inputs[2].value}
    &tel=${inputs[3].value}
    &psw=${inputs[5].value}`,
    type:'GET',
    caches: false,
    // dataType:'JSON',
    success: function(data){
      if (data) {
        console.log(data)
        // $('#form-info-client').html(html_formNewClient);
      }
    }
  })
}




$(document).ready(function() {
  console.log ("cs-client.js ready");
  get_tblClients();
  
  $('#btn-new-client').click(()=>{
    console.log("pippo click")
    $('#btn-new-client').attr("disabled", "disabled");
    $('#btn-del-client').removeAttr('disabled');
    $('#form-info-client').html(html_formNewClient);
  })
  $('#btn-del-client').click(()=>{
    console.log("pippo click")
    $('#btn-del-client').attr("disabled", "disabled");
    $('#btn-new-client').removeAttr('disabled');
    $('#form-info-client').html(html_formRemoveClient);
  })

});