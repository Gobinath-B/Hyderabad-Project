(function ($) {
  "use strict";

  /*=============================================
    =            menu sticky and scroll to top            =
    =============================================*/

  /*----------  Menu sticky ----------*/

  var windows = $(window);
  var sticky = $(".header-sticky");
  var $body = $("body");

  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    var headerHeight = sticky.height();

      if (scroll < headerHeight) {
        sticky.removeClass("is-sticky");
      } else {
        sticky.addClass("is-sticky");
      }
  });

  /*----------  Scroll to top  ----------*/

  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }

  scrollToTop();

  /*=====  End of menu sticky and scroll to top  ======*/

  windows.on("load", function () {
    /*=============================================
        =            preloader active            =
        =============================================*/
    $(".preloader-activate").removeClass("preloader-active");
    /*=====  End of preloader active  ======*/

    if ($("#doughnut-chart").length) {
      /* Note: Edit Here Your Data */
      new Chart(document.getElementById("doughnut-chart"), {
        type: "pie",
        data: {
          labels: ["One", "Two", "Three"],
          datasets: [
            {
              backgroundColor: ["#d8c6ad", "#e08a33", "#a568e2"],
              hoverBackgroundColor: ["#d8c6ad", "#e08a33", "#a568e2"],
              data: ["25", "30", "45"],
              borderWidth: 0
            }
          ]
        },
        options: {
          animation: { duration: 2000 },
          maintainAspectRatio: true,
          cutoutPercentage: 50,
          tooltips: {
            enabled: true,
            bodySpacing: 8,
            titleSpacing: 6,
            cornerRadius: 8,
            xPadding: 10,
            footerFontSize: 15,
            footerFontColor: "#222222"
          },
          legend: {
            display: true,
            position: "right",
            labels: { usePointStyle: true, padding: 30, boxWidth: 16 }
          }
        }
      });
    }

    if ($("#pie-chart").length) {
      /* Note: Edit Here Your Data */
      new Chart(document.getElementById("pie-chart"), {
        type: "pie",
        data: {
          labels: ["One", "Two", "Three"],
          datasets: [
            {
              backgroundColor: ["#b76eef", "#e08164", "#71aefe"],
              hoverBackgroundColor: ["#b76eef", "#e08164", "#71aefe"],
              data: ["25", "45", "30"],
              borderWidth: 0
            }
          ]
        },
        options: {
          animation: { duration: 2000 },
          maintainAspectRatio: true,
          cutoutPercentage: 0,
          tooltips: {
            enabled: true,
            bodySpacing: 8,
            titleSpacing: 6,
            cornerRadius: 8,
            xPadding: 10,
            footerFontSize: 15,
            footerFontColor: "#222222"
          },
          legend: {
            display: true,
            position: "right",
            labels: { usePointStyle: true, padding: 30, boxWidth: 16 }
          }
        }
      });
    }

    if ($("#bar-chart").length) {
      /* Note: Edit Here Your Data */
      new Chart(document.getElementById("bar-chart"), {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [
            {
              label: "One",
              backgroundColor: "#ff8585",
              borderColor: "#ff8585",
              data: ["10", "15", "20", "25", "28", "25", "23", "25"],
              borderWidth: "0"
            },
            {
              label: "Two",
              backgroundColor: "#759cff",
              borderColor: "#759cff",
              data: ["25", "18", "16", "17", "20", "25", "30", "35"],
              borderWidth: "0"
            }
          ]
        },
        options: {
          animation: { duration: 2000 },
          maintainAspectRatio: true,
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
            bodySpacing: 8,
            titleSpacing: 6,
            cornerRadius: 8,
            xPadding: 10
          },
          legend: {
            display: true,
            position: "bottom",
            labels: { usePointStyle: false, padding: 20, boxWidth: 16 }
          },
          scales: {
            yAxes: [
              {
                ticks: { fontColor: "222", beginAtZero: true },
                gridLines: {
                  color: "rgba(43, 43, 43, 0.2)",
                  zeroLineColor: "rgba(43, 43, 43, 0.6)"
                }
              }
            ]
          }
        }
      });
    }

    if ($("#curve-chart").length) {
      /* Note: Edit Here Your Data */
      new Chart(document.getElementById("curve-chart"), {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ],
          datasets: [
            {
              label: "Cost",
              fill: true,
              backgroundColor: "rgba(255,192,206,0.42)",
              borderColor: "rgba(255,0,51,0.42)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              spanGaps: false,
              showLine: true,
              steppedLine: false,
              pointStyle: "circle",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 1,
              hidden: false,
              lineTension: 0.3515,
              data: ["-27", "60", "-98", "4", "17", "18", "72"],
              borderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 3
            },
            {
              label: "Revenue",
              fill: true,
              backgroundColor: "rgba(197,222,255,0.56)",
              borderColor: "rgba(0,70,253,0.56)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              spanGaps: false,
              showLine: true,
              steppedLine: false,
              pointStyle: "circle",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 1,
              hidden: false,
              lineTension: 0.3515,
              data: ["-37", "16", "63", "4", "-10", "60", "0"],
              borderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 3
            }
          ]
        },
        options: {
          animation: { duration: 2000 },
          maintainAspectRatio: true,
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
            bodySpacing: 8,
            titleSpacing: 6,
            cornerRadius: 8,
            xPadding: 10
          },
          legend: {
            display: true,
            position: "bottom",
            labels: { usePointStyle: false, padding: 20, boxWidth: 16 }
          },
          scales: {
            yAxes: [
              {
                ticks: { fontColor: "222", beginAtZero: true },
                gridLines: {
                  color: "rgba(43, 43, 43, 0.2)",
                  zeroLineColor: "rgba(43, 43, 43, 0.6)"
                }
              }
            ]
          }
        }
      });
    }
  });

  /*=============================================
    =            background image            =
    =============================================*/

  var bgSelector = $(".bg-img");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
      bgSource = element.data("bg");
    element.css("background-image", "url(" + bgSource + ")");
  });

  /*=====  End of background image  ======*/

  /*=============================================
    =            mobile menu active            =
    =============================================*/

  $("#mobile-menu-trigger").on("click", function () {
    $("#mobile-menu-overlay").addClass("active");
    $body.addClass("no-overflow");
  });

  $("#mobile-menu-close-trigger").on("click", function () {
    $("#mobile-menu-overlay").removeClass("active");
    $body.removeClass("no-overflow");
  });

  /*=====  End of mobile menu active  ======*/

  /*=============================================
    =            offcanvas mobile menu            =
    =============================================*/

  var $offCanvasNav = $(".offcanvas-navigation"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  /*=====  End of offcanvas mobile menu  ======*/

  /*=============================================
    =            search overlay active            =
    =============================================*/

  $("#search-overlay-trigger").on("click", function (e) {
    e.preventDefault();
    $("#search-overlay").addClass("active");
  });

  $("#popup-search-close").on("click", function (e) {
    $("#search-overlay").removeClass("active");
  });

  /*=====  End of search overlay active  ======*/

  /*=============================================
    =            minicart active            =
    =============================================*/

  $("#minicart-trigger").on("click", function (event) {
    event.stopPropagation();
    $("#minicart-box").toggleClass("active");
  });

  $body.on("click", function () {
    $("#minicart-box").removeClass("active");
  });

  /*=====  End of minicart active  ======*/

  /*=============================================
    =            swiper slider activation            =
    =============================================*/

  $(document).ready(function () {
    var headerInfoSlider = new Swiper(".header-info-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000
      },
      // Responsive breakpoints
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 30
        },

        767: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

    var headerInfoSliderTwo = new Swiper(".header-info-slider-two", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000
      },
      // Responsive breakpoints
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 30
        },

        768: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

    var featureProjectSlider = new Swiper(".feature-project-slider-container", {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination-1",
        type: "bullets",
        clickable: true
      }
    });

    var featureProjectTwoSlider = new Swiper(
      ".featured-project-two-slider-container",
      {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        pagination: {
          el: ".swiper-pagination-2",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".ht-swiper-button-next-1",
          prevEl: ".ht-swiper-button-prev-1"
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 3
          },

          991: {
            slidesPerView: 2
          },

          767: {
            slidesPerView: 2
          },

          575: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      }
    );

    if (
      $(".industry-slider-nav-container").length &&
      $(".industry-slider-content-container").length
    ) {
      var industryNavSlider = new Swiper(".industry-slider-nav-container", {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        loopedSlides: 5,
        centeredSlides: true,
        watchSlidesVisibility: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: ".ht-swiper-button-next-2",
          prevEl: ".ht-swiper-button-prev-2"
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 3
          },

          991: {
            slidesPerView: 2
          },

          767: {
            slidesPerView: 1
          },

          575: {
            slidesPerView: 1
          }
        }
      });

      var industryContentSlider = new Swiper(
        ".industry-slider-content-container",
        {
          loop: true,
          speed: 1000,
          loopedSlides: 5
        }
      );

      industryContentSlider.controller.control = industryNavSlider;
      industryNavSlider.controller.control = industryContentSlider;
    }

    var testimonialSlider = new Swiper(".testimonial-slider__container", {
      slidesPerView: 2,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-3",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".ht-swiper-button-next-3",
        prevEl: ".ht-swiper-button-prev-3"
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 2
        },

        991: {
          slidesPerView: 1
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    });

    var industryTwoSlider = new Swiper(".industry-two-slider__container", {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-11",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".ht-swiper-button-next-4",
        prevEl: ".ht-swiper-button-prev-4"
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

    var brandLogoSlider = new Swiper(".brand-logo-slider__container", {
      slidesPerView: 5,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000
      },

      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 5
        },

        991: {
          slidesPerView: 3
        },

        767: {
          slidesPerView: 3
        },

        575: {
          slidesPerView: 2
        }
      }
    });

    var blogPostSlider = new Swiper(".blog-post-slider__container", {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000
      }
    });

    var testimonialTwoSlider = new Swiper(
      ".testimonial-slider-two__container",
      {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        centeredSlides: true,
        spaceBetween: 200,
        slidesOffsetBefore: -175,
        pagination: {
          el: ".swiper-pagination-4",
          type: "bullets",
          clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
            centeredSlides: false
          },

          991: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
            centeredSlides: false
          },

          767: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
            centeredSlides: false
          },

          575: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
            centeredSlides: false
          }
        }
      }
    );

    var twitterFeedSlider = new Swiper(".twitter-feed-slider__container", {
      slidesPerView: 1,
      spaceBetween: 170,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: ".ht-swiper-button-next-5",
        prevEl: ".ht-swiper-button-prev-5"
      }
    });

    var featuredProjectThreeSlider = new Swiper(
      ".featured-project-three-slider__container",
      {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        width: 1170,
        slidesOffsetBefore: 365,
        centeredSlides: true,
        spaceBetween: 170,
        pagination: {
          el: ".swiper-pagination-5",
          type: "fraction",
          clickable: true
        },
        navigation: {
          nextEl: ".ht-swiper-button-next-6",
          prevEl: ".ht-swiper-button-prev-6"
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 1,
            loop: true,
            speed: 1000,
            slidesOffsetBefore: 0,
            centeredSlides: true,
            spaceBetween: 170
          },

          1199: {
            slidesPerView: 1,
            width: 960,
            loop: true,
            speed: 1000,
            slidesOffsetBefore: 0,
            centeredSlides: false,
            spaceBetween: 170
          },

          991: {
            slidesPerView: 1,
            width: 720,
            loop: true,
            speed: 1000,
            slidesOffsetBefore: 0,
            centeredSlides: false,
            spaceBetween: 170
          },

          767: {
            slidesPerView: 1,
            width: 540,
            loop: true,
            speed: 1000,
            slidesOffsetBefore: 0,
            centeredSlides: false,
            spaceBetween: 170
          },

          575: {
            slidesPerView: 1,
            width: 480,
            loop: true,
            speed: 1000,
            slidesOffsetBefore: 0,
            centeredSlides: false,
            spaceBetween: 170
          },

          479: {
            slidesPerView: 1,
            width: 320,
            loop: true,
            speed: 1000,
            slidesOffsetBefore: 0,
            centeredSlides: false,
            spaceBetween: 170
          }
        }
      }
    );

    var industryThreeSlider = new Swiper(".industry-three-slider__container", {
      slidesPerView: 2,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: ".ht-swiper-button-next-7",
        prevEl: ".ht-swiper-button-prev-7"
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 2
        },

        991: {
          slidesPerView: 1
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    });

    var testimonialThreeSlider = new Swiper(
      ".testimonial-slider-three__container",
      {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 1
          },

          991: {
            slidesPerView: 1
          },

          767: {
            slidesPerView: 1
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    );

    var testimonialSliderFour = new Swiper(
      ".testimonial-slider-four__container",
      {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 2
          },

          991: {
            slidesPerView: 1
          },

          767: {
            slidesPerView: 1
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    );

    var industryFourSlider = new Swiper(".industry-four-slider__container", {
      slidesPerView: 4,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".ht-swiper-button-next-8",
        prevEl: ".ht-swiper-button-prev-8"
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 4
        },
        1199: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 2
        },

        575: {
          slidesPerView: 1
        }
      }
    });

    var industryFiveSlider = new Swiper(".industry-five-slider__container", {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-6",
        type: "bullets",
        clickable: true
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 2
        },
        1199: {
          slidesPerView: 2
        },

        991: {
          slidesPerView: 1
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    });

    var testimonialSliderFive = new Swiper(
      ".testimonial-slider__container--style2",
      {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".swiper-pagination-7",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".ht-swiper-button-next-9",
          prevEl: ".ht-swiper-button-prev-9"
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 2
          },

          991: {
            slidesPerView: 1
          },

          767: {
            slidesPerView: 1
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    );

    var industrySixSlider = new Swiper(".industry-six-slider__container", {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-8",
        type: "bullets",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
      },
      autoplay: {
        delay: 5000
      }
    });

    var industrySevenSlider = new Swiper(".industry-seven-slider__container", {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      autoplay: {
        delay: 5000
      },

      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 2
        },

        991: {
          slidesPerView: 1
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    });

    if (
      $(".testimonial-slider-six__author-container").length &&
      $(".testimonial-slider-six__content-container").length
    ) {
      var testimonialSliderSixAuthor = new Swiper(
        ".testimonial-slider-six__author-container",
        {
          slidesPerView: 3,
          loop: true,
          speed: 1000,
          loopedSlides: 3,
          centeredSlides: true,
          spaceBetween: 30,
          watchSlidesVisibility: true,
          slideToClickedSlide: true,

          // Responsive breakpoints
          breakpoints: {
            1499: {
              slidesPerView: 3
            },

            991: {
              slidesPerView: 1
            },

            767: {
              slidesPerView: 1
            },

            575: {
              slidesPerView: 1
            }
          }
        }
      );

      var testimonialSliderSixContent = new Swiper(
        ".testimonial-slider-six__content-container",
        {
          loop: true,
          speed: 1000,
          loopedSlides: 3,
          pagination: {
            el: ".swiper-pagination-9",
            type: "bullets",
            clickable: true
          },
          navigation: {
            nextEl: ".ht-swiper-button-next-10",
            prevEl: ".ht-swiper-button-prev-10"
          }
        }
      );

      testimonialSliderSixContent.controller.control = testimonialSliderSixAuthor;
      testimonialSliderSixAuthor.controller.control = testimonialSliderSixContent;
    }

    var industryIconSlider = new Swiper(".industry-icon__container", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: ".ht-swiper-button-next-11",
        prevEl: ".ht-swiper-button-prev-11"
      },

      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 4
        },

        991: {
          slidesPerView: 3
        },

        767: {
          slidesPerView: 2
        },

        575: {
          slidesPerView: 2
        },

        479: {
          slidesPerView: 1
        }
      }
    });

    var blogPostTwoSlider = new Swiper(".blog-post-two__container", {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        },

        479: {
          slidesPerView: 1
        }
      }
    });

    var testimonialSliderSeven = new Swiper(
      ".testimonial-slider-seven__container",
      {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-10",
          type: "bullets",
          clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 3
          },

          991: {
            slidesPerView: 2
          },

          767: {
            slidesPerView: 1
          },

          575: {
            slidesPerView: 1
          },

          479: {
            slidesPerView: 1
          }
        }
      }
    );

    if (
      $(".image-gallery-slider-big__container").length &&
      $(".image-gallery-slider-small__container").length
    ) {
      var imageGalleryBigSlider = new Swiper(
        ".image-gallery-slider-big__container",
        {
          slidesPerView: 1,
          loop: true,
          loopedSlides: 6,
          speed: 1000,
          spaceBetween: 30,
          navigation: {
            nextEl: ".ht-swiper-button-next-12",
            prevEl: ".ht-swiper-button-prev-12"
          }
        }
      );

      var imageGallerySmallSlider = new Swiper(
        ".image-gallery-slider-small__container",
        {
          loop: true,
          loopedSlides: 6,
          slidesPerView: 6,
          speed: 1000,
          centeredSlides: true,
          spaceBetween: 30,
          slideToClickedSlide: true,
          // Responsive breakpoints
          breakpoints: {
            1499: {
              slidesPerView: 6
            },

            991: {
              slidesPerView: 4
            },

            767: {
              slidesPerView: 4
            },

            575: {
              slidesPerView: 3
            },

            479: {
              slidesPerView: 2
            }
          }
        }
      );

      imageGalleryBigSlider.controller.control = imageGallerySmallSlider;
      imageGallerySmallSlider.controller.control = imageGalleryBigSlider;
    }

    var blogCommonCarousel = new Swiper(".common-blog-carousel__container", {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-12",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".ht-swiper-button-next-13",
        prevEl: ".ht-swiper-button-prev-13"
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    });

    var blogCommonCarousel2 = new Swiper(
      ".common-blog-carousel__container--style2",
      {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-14",
          type: "bullets",
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 2
          },

          991: {
            slidesPerView: 2
          },

          767: {
            slidesPerView: 1
          },

          575: {
            slidesPerView: 1
          }
        }
      }
    );

    var blogPostGallery = new Swiper(".blog-post-gallery__container", {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination-13",
        type: "bullets",
        clickable: true
      }
    });

    var testimonialSliderEight = new Swiper(
      ".testimonial-slider__container--style3",
      {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        spaceBetween: 30,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".swiper-pagination-14",
          type: "bullets",
          clickable: true
        }
      }
    );

    var teamMemberSlider = new Swiper(".team-slider__container", {
      slidesPerView: 4,
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      navigation: {
        nextEl: ".ht-swiper-button-next-14",
        prevEl: ".ht-swiper-button-prev-14"
      },

      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 4
        },

        991: {
          slidesPerView: 3
        },

        767: {
          slidesPerView: 2
        },

        575: {
          slidesPerView: 2
        },

        479: {
          slidesPerView: 1
        }
      }
    });

    var relatedProductSlider = new Swiper(
      ".related-product-slider__container",
      {
        slidesPerView: 4,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
          nextEl: ".ht-swiper-button-next-15",
          prevEl: ".ht-swiper-button-prev-15"
        },

        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 4
          },

          991: {
            slidesPerView: 3
          },

          767: {
            slidesPerView: 2
          },

          575: {
            slidesPerView: 2
          },

          479: {
            slidesPerView: 1
          }
        }
      }
    );

    var productDetailsGallery = new Swiper(
      ".product-details__image-slider-container",
      {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination-15",
          type: "bullets",
          clickable: true
        }
      }
    );
  });

  /*=====  End of swiper slider activation  ======*/

  /*=============================================
    =            light gallery active            =
    =============================================*/

  $(".video-popup").lightGallery();
  $(".image-popup").lightGallery({
    selector: ".single-gallery-thumb"
  });

  /*=====  End of light gallery active  ======*/

  /*=============================================
    =            counter up active            =
    =============================================*/

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  /*=====  End of counter up active  ======*/

  /*=============================================
    =            overlay menu            =
    =============================================*/

  /*Variables*/
  var $verticalCollapsibleMenu = $("#vertical-collapsible-menu"),
    $verticalCollapsibleSubMenu = $verticalCollapsibleMenu.find(".sub-menu");

  /*Close Off Canvas Sub Menu*/
  $verticalCollapsibleSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $verticalCollapsibleMenu.on("click", "li a", function (e) {
    var $this = $(this);
    if ($this.siblings(".sub-menu").length) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp();
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  $("#overlay-menu-icon").on("click", function () {
    $("#overlay-navigation-menu")
      .removeClass("overlay-navigation-inactive")
      .addClass("overlay-navigation-active");
  });

  $("#overlay-menu-close-icon").on("click", function () {
    $("#overlay-navigation-menu")
      .removeClass("overlay-navigation-active")
      .addClass("overlay-navigation-inactive");
  });

  /*=====  End of overlay menu  ======*/

  /*=============================================
    =            mailchimp active            =
    =============================================*/

  if ("#mc-form".length) {
    $("#mc-form").ajaxChimp({
      language: "en",
      callback: mailChimpResponse,
      // ADD YOUR MAILCHIMP URL BELOW HERE!
      url:
        "https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
    });

    function mailChimpResponse(resp) {
      if (resp.result === "success") {
        $(".mailchimp-success")
          .html("" + resp.msg)
          .fadeIn(900);
        $(".mailchimp-error").fadeOut(400);
      } else if (resp.result === "error") {
        $(".mailchimp-error")
          .html("" + resp.msg)
          .fadeIn(900);
      }
    }
  }

  /*=====  End of mailchimp active  ======*/

  /*=============================================
    =            ajax contact form active            =
    =============================================*/

  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessages = $(".form-message");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });

  /*=====  End of ajax contact form active  ======*/

  /*=============================================
    =            isotope active            =
    =============================================*/

  var activeId = $(".project-filter-menu li");
  $(".project-isotope").isotope();

  activeId.on("click", function () {
    var $this = $(this),
      filterValue = $this.data("filter");

    $(".project-isotope").isotope({
      filter: filterValue,
      layoutMode: "fitRows",
      hiddenStyle: {
        opacity: 0
      },
      visibleStyle: {
        opacity: 1
      }
    });

    activeId.removeClass("active");
    $this.addClass("active");
  });

  /*=====  End of isotope active  ======*/

  /*=============================================
    =            masonry activation            =
    =============================================*/

  var $masonryLayout = $(".masonry-layout");
  var $grid = $(".grid-item");
  $grid.hide();
  if ($masonryLayout.length) {
    $masonryLayout.imagesLoaded(function () {
      $grid.fadeIn();
      $masonryLayout.masonry({
        itemSelector: ".grid-item",
        columnWidth: ".grid-item--width2",
        percentPosition: true
      });
    });
  }

  /*=====  End of masonry activation  ======*/

  /*=============================================
    =            progress bar active            =
    =============================================*/

  var skillsBar = $(".progress-line-bar");
  skillsBar.appear(function () {
    skillsBar.each(function (index, elem) {
      var elementItem = $(elem),
        skillBarAmount = elementItem.data("percent");
      elementItem.animate(
        {
          width: skillBarAmount
        },
        600
      );

      elementItem.siblings(".progress-line-dot").css(
        {
          left: skillBarAmount
        },
        600
      );
      elementItem
        .closest(".progress-bar-item")
        .find(".percent")
        .text(skillBarAmount);
    });
  });

  /*=====  End of progress bar active  ======*/

  /*=============================================
    =            quantity counter            =
    =============================================*/

  $(".pro-qty").append(
    '<a href="#" class="inc qty-btn"><i class="ion-arrow-up-b"></i></a>'
  );
  $(".pro-qty").append(
    '<a href="#" class= "dec qty-btn"><i class="ion-arrow-down-b"></i></a>'
  );
  $(".qty-btn").on("click", function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  /*=====  End of quantity counter  ======*/

  /*=============================================
    =            payment method select            =
    =============================================*/

  $('[name="payment-method"]').on("click", function () {
    var $value = $(this).attr("value");

    $(".single-method p").slideUp();
    $('[data-method="' + $value + '"]').slideDown();
  });

  /*=====  End of payment method select  ======*/

  /*=============================================
    =            shipping form active            =
    =============================================*/

  $("[data-shipping]").on("click", function () {
    if ($("[data-shipping]:checked").length > 0) {
      $("#shipping-form").slideDown();
    } else {
      $("#shipping-form").slideUp();
    }
  });

  /*=====  End of shipping form active  ======*/
})(jQuery);
