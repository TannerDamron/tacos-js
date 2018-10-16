$(document).ready(function() {

  $(".clickable").click(function() {
    $("#fish-hidden").fadeToggle('slow');
    $("#fish-showing").fadeToggle('slow');
  });

  $(".clickable2").click(function() {
    $("#veggie-hidden").fadeToggle(7000);
    $("#veggie-showing").fadeToggle(7000);
  });

  $(".clickable3").click(function() {
    $("#chicken-hidden").slideToggle('slow');
    $("#chicken-showing").slideToggle('slow');
  });



});
