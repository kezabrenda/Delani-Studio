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

  
})