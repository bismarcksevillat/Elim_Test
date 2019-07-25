$(document).ready(function() {
  function breakTitle() {
    // $("#future-title").lettering();
    $("#future-title")
      .lettering("words")
      .children("span")
      .lettering();
  }

  breakTitle();

  function resetCircle() {
    var element = $("#circle-svg").get(0);
    var resetCircle = (0 * element.getTotalLength()) / 100;

    $("#circle-svg")
      .get(0)
      .setAttribute("stroke-dasharray", resetCircle + " " + element.getTotalLength());

  }


  $(window).bind("load", function() {
    // GSAP

    resetCircle();

    // Variables declaration
    var blue1 = document.querySelector(".cellphone", ":before");
    var blue2 = document.querySelector(".cellphone", ":before");
    // var circles = new Vivus('straight-svg', {duration: 150,  animTimingFunction: Vivus.EASE_IN});

    var tl = new TimelineLite();
    tl.set("path", { drawSVG: 0 })
      .fromTo(blue1, 1, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
      .fromTo(blue2, 1, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, "-=2")
      .fromTo(".cellphone img", 1, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
      .fromTo("#executive-icon", 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#data-icon", 0.5, { x: 50, opacity: 0 }, { x: "-22%", opacity: 1 })
      .fromTo("#reporting-icon", 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#benchmarking-icon", 0.5, { x: -50, opacity: 0 }, { x: "25%", opacity: 1 })
      .fromTo("#executive-title", 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#data-title", 0.5, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo("#reporting-title", 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#benchmarking-title", 0.5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 });

     
    // .fromTo("#straight-svg", 3, { drawSVG: 0 }, { drawSVG: "100%", ease: Linear.easeNone });

    setTimeout(function() {
      completeCircle();
      var circles = new Vivus('straight-svg', {duration: 150,  animTimingFunction: Vivus.EASE_IN});
    }, 2000);
  });
});
