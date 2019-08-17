$(document).ready(function(){


//-------------------- info page---------------------------------------------------------

$('#sunday-0').hide();
$('#sunday-1').hide();

   
$('#switch-1').click(function(){
    var isChecked = $('#switch-1').is(':checked');
   // alert(isChecked);
    if(isChecked){
      $('#day-1-0').show();
      $('#day-1-1').show();
      document.getElementById("day1").value=1;
    }else{
        $('#day-1-0').hide();
        $('#day-1-1').hide();
        document.getElementById("day1").value=0;
    }
  });

  $('#switch-2').click(function(){
    var isChecked = $('#switch-2').is(':checked');
   // alert(isChecked);
    if(isChecked){
      $('#day-2-0').show();
      $('#day-2-1').show();
      document.getElementById("day2").value=1;
    }else{
        $('#day-2-0').hide();
        $('#day-2-1').hide();
        document.getElementById("day2").value=0;
    }
  });

  $('#switch-3').click(function(){
    var isChecked = $('#switch-3').is(':checked');
   // alert(isChecked);
    if(isChecked){
      $('#day-3-0').show();
      $('#day-3-1').show();
      document.getElementById("day3").value=1;
    }else{
        $('#day-3-0').hide();
        $('#day-3-1').hide();
        document.getElementById("day3").value=0;
    }
  });
  $('#switch-4').click(function(){
    var isChecked = $('#switch-4').is(':checked');
   // alert(isChecked);
    if(isChecked){
      $('#day-4-0').show();
      $('#day-4-1').show();
      document.getElementById("day4").value=1;
    }else{
        $('#day-4-0').hide();
        $('#day-4-1').hide();
        document.getElementById("day4").value=0;
    }
  });

  $('#switch-5').click(function(){
    var isChecked = $('#switch-5').is(':checked');
   // alert(isChecked);
    if(isChecked){
      $('#day-5-0').show();
      $('#day-5-1').show();
      document.getElementById("day5").value=1;
    }else{
        $('#day-5-0').hide();
        $('#day-5-1').hide();
        document.getElementById("day5").value=0;
    }
  });

  $('#switch-6').click(function(){
    var isChecked = $('#switch-6').is(':checked');
   // alert(isChecked);
    if(isChecked){
      $('#day-6-0').show();
      $('#day-6-1').show();
      document.getElementById("day6").value=1;
    }else{
        $('#day-6-0').hide();
        $('#day-6-1').hide();
        document.getElementById("day6").value=0;
    }
  });
      $('#switch-7').click(function(){
        var isChecked = $('#switch-7').is(':checked');
       // alert(isChecked);
        if(isChecked){
          $('#sunday-0').show();
          $('#sunday-1').show();
          document.getElementById("day7").value=1;
        }else{
        $('#sunday-0').hide();
        $('#sunday-1').hide();
        document.getElementById("day7").value=0;
        }
      });


   
/// --------------------------END OF INFO ----------------------------------------------------//

// ...............Login code...........................

    $('#p2').hide();
    
    $("#login-button").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        if(email !="" && password !==""){
            validateEmail(email);
        
            if( !validateEmail(email)) {
                $("#email-error-message").text("Valid email required").addClass("error-message");
           }else{
            $("#email-error-message").hide();
            $('#p2').show();
            $("#login-button").hide();
            $("#field-error").hide();
             
           }
            
        }else{
           
            $("#field-error").text("All field are required *").addClass("error-message");
           
        }
      
      });
    
    

      // E-MAIL Validation....
      function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
      }
      

    
  }); 