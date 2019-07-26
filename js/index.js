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
      // Initial Blue circles
      .fromTo(blue1, 1, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
      .fromTo(blue2, 1, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, "-=2")
      // Cellphone
      .fromTo(".cellphone img", 1, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
      // Icons
      .fromTo("#executive-icon", 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#data-icon", 0.5, { x: 50, opacity: 0 }, { x: "-22%", opacity: 1 })
      .fromTo("#reporting-icon", 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo("#benchmarking-icon", 0.5, { x: -50, opacity: 0 }, { x: "25%", opacity: 1 })
      // Dotted line
      .staggerFromTo("#dotted-svg path", 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, ease: Linear.easeNone }, 0.05)
      .fromTo("#executive-title", 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
           .fromTo("#data-title", 0.5, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
           .fromTo("#reporting-title", 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
           .fromTo("#benchmarking-title", 0.5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
     // Data
     ;
     
    // setTimeout(function() {
    //   var tl2 = new TimelineLite();
    //   tl2.fromTo(".titles-to-appear#executive-title", 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
    //        .fromTo(".titles-to-appear#data-title", 0.5, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
    //        .fromTo(".titles-to-appear#reporting-title", 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
    //        .fromTo(".titles-to-appear#benchmarking-title", 0.5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
    // }, 7000);

    setTimeout(function() {
      var tl2 = new TimelineLite();
      tl2
        // Executive
        .fromTo(".titles-to-appear#executive-icon", 1, {scale: 1, sease: Power1.easeOut}, {sease: Power1.easeOut, scale: 1.2})
        .fromTo(".titles-to-appear#executive-title", 0.1, { scale: 1.2, delay: 0, ease: Power1.easeOut}, { ease: Power1.easeOut, scale: 0})
        .fromTo(".text-to-appear .titles-to-appear-text#executive-title-text", 1, { opacity: 0 , ease: Power1.easeOut}, { ease: Power1.easeOut, opacity: 1})
        .fromTo(".text-to-appear p", 1, { opacity: 0 , ease: Power1.easeOut}, { ease: Power1.easeOut, opacity: 1})
        
        .fromTo(".titles-to-appear#executive-icon", 1, {scale: 1.2, sease: Power1.easeOut}, {sease: Power1.easeOut, scale: 1})
        .fromTo(".titles-to-appear#executive-title", 0.1, { scale: 0, ease: Power1.easeOut}, { ease: Power1.easeOut, scale: 1})
        .fromTo(".text-to-appear .titles-to-appear-text#executive-title-text", 1, { opacity: 1 , ease: Power1.easeOut}, { ease: Power1.easeOut, opacity: 0}, "-=0.1")
        .fromTo(".text-to-appear p", 1, { opacity: 1 , ease: Power1.easeOut}, { ease: Power1.easeOut, opacity: 0}, "-=0.1")
        ;
    }, 9000);

    setTimeout(function() {
      var tl3 = new TimelineLite();
      tl3
        // Executive
        .fromTo(".titles-to-appear#data-icon", 1, {scale: 1}, {scale: 1.2})
        .fromTo(".titles-to-appear#data-title", 0.1, { scale: 1.2, delay: 0}, { scale: 0})
        .fromTo(".text-to-appear .titles-to-appear-text#data-title-text", 1, { opacity: 0 }, { opacity: 1})
        .fromTo(".text-to-appear p", 1, { opacity: 0 }, { opacity: 1})
        
        .fromTo(".titles-to-appear#data-icon", 1, {scale: 1.2}, {scale: 1})
        .fromTo(".titles-to-appear#data-title", 0.1, { scale: 0}, { scale: 1})
        .fromTo(".text-to-appear .titles-to-appear-text#data-title-text", 1, { opacity: 1 }, { opacity: 0}, "-=0.2")
        .fromTo(".text-to-appear p", 1, { opacity: 1 }, { opacity: 0}, "-=0.3")
        ;
    }, 15000);


    setTimeout(function() {
      var tl4 = new TimelineLite();
      tl4
        // Executive
        .fromTo(".titles-to-appear#reporting-icon", 1, {scale: 1}, {scale: 1.2})
        .fromTo(".titles-to-appear#reporting-title", 0.1, { scale: 1.2, delay: 0}, { scale: 0})
        .fromTo(".text-to-appear .titles-to-appear-text#reporting-title-text", 1, { opacity: 0 }, { opacity: 1})
        .fromTo(".text-to-appear p", 1, { opacity: 0 }, { opacity: 1})
        
        .fromTo(".titles-to-appear#reporting-icon", 1, {scale: 1.2}, {scale: 1})
        .fromTo(".titles-to-appear#reporting-title", 0.1, { scale: 0}, { scale: 1})
        .fromTo(".text-to-appear .titles-to-appear-text#reporting-title-text", 1, { opacity: 1 }, { opacity: 0}, "-=0.1")
        .fromTo(".text-to-appear p", 1, { opacity: 1 }, { opacity: 0}, "-=0.1")
        ;
    }, 21000);


    setTimeout(function() {
      var tl5 = new TimelineLite();
      tl5
        // Executive
        .fromTo(".titles-to-appear#benchmarking-icon", 1, {scale: 1}, {scale: 1.2})
        .fromTo(".titles-to-appear#benchmarking-title", 0.1, { scale: 1.2, delay: 0}, { scale: 0})
        .fromTo(".text-to-appear .titles-to-appear-text#benchmarking-title-text", 1, { opacity: 0 }, { opacity: 1})
        .fromTo(".text-to-appear p", 1, { opacity: 0 }, { opacity: 1})
        
        .fromTo(".titles-to-appear#benchmarking-icon", 1, {scale: 1.2}, {scale: 1})
        .fromTo(".titles-to-appear#benchmarking-title", 0.1, { scale: 0}, { scale: 1})
        .fromTo(".text-to-appear .titles-to-appear-text#benchmarking-title-text", 1, { opacity: 1 }, { opacity: 0}, "-=0.1")
        .fromTo(".text-to-appear p", 1, { opacity: 1 }, { opacity: 0}, "-=0.1")
        ;
    }, 27000);

    // Reporting

    // Benchmarking

    // .fromTo("#straight-svg", 3, { drawSVG: 0 }, { drawSVG: "100%", ease: Linear.easeNone });

    setTimeout(function() {
      // completeCircle();
      new Vivus("straight-svg", { duration: 150, animTimingFunction: Vivus.EASE_IN });
    }, 2000);
  });
});
