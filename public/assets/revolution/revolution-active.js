var revapi4, tpj;
(function () {
  if (!/loaded|interactive|complete/.test(document.readyState))
    document.addEventListener("DOMContentLoaded", onLoad);
  else onLoad();
  function onLoad() {
    if (tpj === undefined) {
      tpj = jQuery;
      if ("off" == "on") tpj.noConflict();
    }

    // Slider No
    if (tpj("#rev_slider_2_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_2_1");
    } else {
      revapi2 = tpj("#rev_slider_2_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "erinyen",
              enable: true,
              hide_onmobile: false,
              hide_onleave: true,
              hide_delay: 200,
              hide_delay_mobile: 1200,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [790, 768, 760, 720],
          lazyType: "none",
          minHeight: "700px",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_3_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_3_1");
    } else {
      revapi3 = tpj("#rev_slider_3_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [750, 750, 700, 650],
          lazyType: "none",
          minHeight: "750px",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_4_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
      revapi4 = tpj("#rev_slider_4_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [800, 768, 800, 720],
          lazyType: "none",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_15_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_15_1");
    } else {
      revapi15 = tpj("#rev_slider_15_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            onHoverStop: "off"
          },
          responsiveLevels: [1240, 1024, 778, 778],
          visibilityLevels: [1240, 1024, 778, 778],
          gridwidth: [1920, 1024, 778, 778],
          gridheight: [840, 840, 840, 840],
          lazyType: "none",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_12_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_12_1");
    } else {
      revapi12 = tpj("#rev_slider_12_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            onHoverStop: "off"
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [700, 700, 700, 700],
          lazyType: "none",
          parallax: {
            type: "mouse",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [
              5,
              10,
              15,
              20,
              25,
              30,
              35,
              40,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              55
            ]
          },
          shadow: 0,
          spinner: "spinner0",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_11_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_11_1");
    } else {
      revapi11 = tpj("#rev_slider_11_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "auto",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            onHoverStop: "off"
          },
          responsiveLevels: [1240, 1240, 778, 778],
          visibilityLevels: [1240, 1240, 778, 778],
          gridwidth: [1640, 1640, 778, 778],
          gridheight: [1080, 1080, 960, 960],
          lazyType: "none",
          parallax: {
            type: "mouse",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [
              5,
              10,
              15,
              20,
              25,
              30,
              35,
              40,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              55
            ]
          },
          shadow: 0,
          spinner: "spinner0",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_5_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_5_1");
    } else {
      revapi5 = tpj("#rev_slider_5_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [800, 768, 800, 720],
          lazyType: "none",
          minHeight: "700px",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_7_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_7_1");
    } else {
      revapi7 = tpj("#rev_slider_7_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [750, 750, 700, 700],
          lazyType: "none",
          minHeight: "700px",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_8_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_8_1");
    } else {
      revapi8 = tpj("#rev_slider_8_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [800, 768, 800, 720],
          lazyType: "none",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_9_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_9_1");
    } else {
      revapi9 = tpj("#rev_slider_9_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [700, 700, 700, 700],
          lazyType: "none",
          minHeight: "700px",
          shadow: 0,
          spinner: "spinner3",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_10_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_10_1");
    } else {
      revapi10 = tpj("#rev_slider_10_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "auto",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "erinyen",
              enable: true,
              hide_onmobile: false,
              hide_onleave: false,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 0
              }
            }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [550, 550, 550, 550],
          lazyType: "none",
          minHeight: "550px",
          shadow: 0,
          spinner: "spinner0",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_13_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_13_1");
    } else {
      revapi13 = tpj("#rev_slider_13_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "auto",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            onHoverStop: "off"
          },
          viewPort: {
            enable: true,
            outof: "wait",
            visible_area: "80%",
            presize: false
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [770, 770, 670, 480],
          gridheight: [350, 350, 350, 350],
          lazyType: "none",
          shadow: 0,
          spinner: "spinner0",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */

    if (tpj("#rev_slider_14_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_14_1");
    } else {
      revapi14 = tpj("#rev_slider_14_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            onHoverStop: "off"
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 778, 480],
          gridheight: [700, 700, 700, 700],
          lazyType: "none",
          shadow: 0,
          spinner: "spinner0",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    } /* END OF revapi call */
  } /* END OF ON LOAD FUNCTION */
})(); /* END OF WRAPPING FUNCTION */
