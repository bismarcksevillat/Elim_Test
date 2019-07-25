$(document).ready(function(){
  function breakTitle(){
      // $("#future-title").lettering();
      $("#future-title").lettering('words').children('span').lettering();
  }

  breakTitle();

  var tl = new TimelineLite();
  tl.fromTo(".cellphone::before", 2, {scale:0, opacity:0}, {scale:1, opacity:1});
  tl.fromTo(".cellphone::after", 2, {scale:0, opacity:0}, {scale:1, opacity:1}, "-=2");
  tl.fromTo(".cellphone img", 2, {scale:0, opacity:0}, {scale:1, opacity:1});
});