"use strict";

$(document).ready(function () {
  function breakTitle() {
    // $("#future-title").lettering();
    $("#future-title").lettering("words").children("span").lettering();
  }

  breakTitle();

  function resetCircle() {
    var element = $("#circle-svg").get(0);
    var resetCircle = 0 * element.getTotalLength() / 100;
    $("#circle-svg").get(0).setAttribute("stroke-dasharray", resetCircle + " " + element.getTotalLength());
  }

  $(window).bind("load", function () {
    // GSAP
    resetCircle(); // Variables declaration

    var blue1 = document.querySelector(".cellphone", ":before");
    var blue2 = document.querySelector(".cellphone", ":before"); // var circles = new Vivus('straight-svg', {duration: 150,  animTimingFunction: Vivus.EASE_IN});

    var tl = new TimelineLite();
    tl.set("path", {
      drawSVG: 0
    }) // Initial Blue circles
    .fromTo(blue1, 1, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    }).fromTo(blue2, 1, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    }, "-=2") // Cellphone
    .fromTo(".cellphone img", 1, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    }) // Icons
    .fromTo("#executive-icon", 0.5, {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }).fromTo("#data-icon", 0.5, {
      x: 50,
      opacity: 0
    }, {
      x: "-22%",
      opacity: 1
    }).fromTo("#reporting-icon", 0.5, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }).fromTo("#benchmarking-icon", 0.5, {
      x: -50,
      opacity: 0
    }, {
      x: "25%",
      opacity: 1
    }) // Dotted line
    .staggerFromTo("#dotted-svg path", 0.5, {
      opacity: 0,
      scale: 0
    }, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone
    }, 0.05).fromTo("#executive-title", 0.5, {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }).fromTo("#data-title", 0.5, {
      x: 50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }).fromTo("#reporting-title", 0.5, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }).fromTo("#benchmarking-title", 0.5, {
      x: -50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }); // Executive

    setTimeout(function () {
      var tl2 = new TimelineLite();
      tl2 // Executive
      .fromTo(".titles-to-appear#executive-icon", 1, {
        scale: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1.2
      }).fromTo(".titles-to-appear#executive-title", 0.1, {
        scale: 1.2,
        delay: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 0
      });
    }, 8500);
    setTimeout(function () {
      var tl3 = new TimelineLite();
      tl3.fromTo(".text-to-appear .titles-to-appear-text#executive-title-text", 1, {
        opacity: 0,
        x: -50,
        ease: Power1.easeOut
      }, {
        x: 0,
        ease: Power1.easeOut,
        opacity: 1
      }).fromTo(".text-to-appear p", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        y: -10
      }, {
        y: 0,
        ease: Power1.easeOut,
        opacity: 1
      });
    }, 9600);
    setTimeout(function () {
      var tl4 = new TimelineLite();
      tl4.fromTo(".titles-to-appear#executive-icon", 1, {
        scale: 1.2,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      }).fromTo(".titles-to-appear#executive-title", 0.1, {
        scale: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      });
    }, 10700);
    setTimeout(function () {
      var tl5 = new TimelineLite();
      tl5.fromTo(".text-to-appear .titles-to-appear-text#executive-title-text", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1").fromTo(".text-to-appear p", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1");
    }, 11800); // Data

    setTimeout(function () {
      var tl6 = new TimelineLite();
      tl6.fromTo(".titles-to-appear#data-icon", 1, {
        scale: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1.2
      }).fromTo(".titles-to-appear#data-title", 0.1, {
        scale: 1.2,
        delay: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 0
      });
    }, 12900);
    setTimeout(function () {
      var tl7 = new TimelineLite();
      tl7.fromTo(".text-to-appear .titles-to-appear-text#data-title-text", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        x: -50
      }, {
        x: 0,
        ease: Power1.easeOut,
        opacity: 1
      }).fromTo(".text-to-appear p", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        y: -10
      }, {
        y: 0,
        ease: Power1.easeOut,
        opacity: 1
      });
    }, 14000);
    setTimeout(function () {
      var tl8 = new TimelineLite();
      tl8.fromTo(".titles-to-appear#data-icon", 1, {
        scale: 1.2,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      }).fromTo(".titles-to-appear#data-title", 0.1, {
        scale: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      });
    }, 15100);
    setTimeout(function () {
      var tl9 = new TimelineLite();
      tl9.fromTo(".text-to-appear .titles-to-appear-text#data-title-text", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1").fromTo(".text-to-appear p", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1");
    }, 16200); // Reporting

    setTimeout(function () {
      var tl10 = new TimelineLite();
      tl10.fromTo(".titles-to-appear#reporting-icon", 1, {
        scale: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1.2
      }).fromTo(".titles-to-appear#reporting-title", 0.1, {
        scale: 1.2,
        delay: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 0
      });
    }, 17300);
    setTimeout(function () {
      var tl11 = new TimelineLite();
      tl11.fromTo(".text-to-appear .titles-to-appear-text#reporting-title-text", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        x: -50
      }, {
        x: 0,
        ease: Power1.easeOut,
        opacity: 1
      }).fromTo(".text-to-appear p", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        y: -10
      }, {
        y: 0,
        ease: Power1.easeOut,
        opacity: 1
      });
    }, 18400);
    setTimeout(function () {
      var tl12 = new TimelineLite();
      tl12.fromTo(".titles-to-appear#reporting-icon", 1, {
        scale: 1.2,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      }).fromTo(".titles-to-appear#reporting-title", 0.1, {
        scale: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      });
    }, 19510);
    setTimeout(function () {
      var tl13 = new TimelineLite();
      tl13.fromTo(".text-to-appear .titles-to-appear-text#reporting-title-text", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1").fromTo(".text-to-appear p", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1");
    }, 20600); // Benchmarking

    setTimeout(function () {
      var tl14 = new TimelineLite();
      tl14.fromTo(".titles-to-appear#benchmarking-icon", 1, {
        scale: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1.2
      }).fromTo(".titles-to-appear#benchmarking-title", 0.1, {
        scale: 1.2,
        delay: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 0
      });
    }, 21700);
    setTimeout(function () {
      var tl15 = new TimelineLite();
      tl15.fromTo(".text-to-appear .titles-to-appear-text#benchmarking-title-text", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        x: -50
      }, {
        x: 0,
        ease: Power1.easeOut,
        opacity: 1
      }).fromTo(".text-to-appear p", 1, {
        opacity: 0,
        ease: Power1.easeOut,
        y: -10
      }, {
        y: 0,
        ease: Power1.easeOut,
        opacity: 1
      });
    }, 22800);
    setTimeout(function () {
      var tl16 = new TimelineLite();
      tl16.fromTo(".titles-to-appear#benchmarking-icon", 1, {
        scale: 1.2,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      }).fromTo(".titles-to-appear#benchmarking-title", 0.1, {
        scale: 0,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        scale: 1
      });
    }, 23900);
    setTimeout(function () {
      var tl17 = new TimelineLite();
      tl17.fromTo(".text-to-appear .titles-to-appear-text#benchmarking-title-text", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1").fromTo(".text-to-appear p", 1, {
        opacity: 1,
        ease: Power1.easeOut
      }, {
        ease: Power1.easeOut,
        opacity: 0
      }, "-=1");
    }, 25000);
    setTimeout(function () {
      // completeCircle();
      new Vivus("straight-svg", {
        duration: 150,
        animTimingFunction: Vivus.EASE_IN
      });
    }, 2000);
  });
});