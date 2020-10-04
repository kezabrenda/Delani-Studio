$(document).ready(function() {


$("#design").click(function(){
    $("#showDesign").toggle();
    $(".hideDsgnImg").toggle();
  });
  
  
  $("#dvlpnt").click(function(){
    $("#showDvlpnt").toggle();
    $(".noShowDvlpntImg").toggle();
  });


  $("#product").click(function(){
    $("#showPrdct").toggle();
    $(".noShowPrdctImg").toggle();
  });

  $(".hover").hover(function(){
    $(this).animate({opacity: '1'});
    }, 
    function(){
    $(this).animate({opacity: '0'});
  });


  $('.button').click(function () {
    var yourNames = $('#yourName').val();
    var urEmail = $('#yourEmail').val();
    var message = $('#comment');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (yourNames == '' || urEmail == '' || message == '') {
        alert('Please check if you have filled the form correctly!');
    } else {
        alert(' Hello ' + yourNames + ' We have received your message. Thank you for reaching out to us.');
    }
});
})