

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
    console.log ("cs-gallery.js ready");
    
    



  
  });