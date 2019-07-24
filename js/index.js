$(document).ready(function(){
  function breakTitle(){
      // $("#future-title").lettering();
      $("#future-title").lettering('words').children('span').lettering();
  }

  breakTitle();
});