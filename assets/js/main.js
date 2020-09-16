jQuery(function ($) {

        

    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop > $('header').height()) {
            $("#counter").css("padding-top", "150px");
            $('header').addClass('scrollNav');


        }

        else {
            $('header').removeClass('scrollNav');
        }
        if (($(window).scrollTop() + $(window).height()) > $(document).height()) {

            $(".up").stop(true).animate({
                opacity: 1
            }, 100);

        } else {

            $(".up").stop(true).animate({
                opacity: 0
            }, 250);
        }
    
    });
    $(".up").on("click", function () { $("html, body").animate({ scrollTop: 0 }, "slow"); return false; });

    setTimeout(function () {
        $('.EventCarusel').owlCarousel({
          autoplay: true,
          loop: false,
          margin: 15,
          nav:true,
          responsive: {
            0: {
              items: 1,
              nav:false,
             margin:0
    
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            }
          }
        });
        $('.SponserSlider').owlCarousel({
            autoplay: true,
            loop: false,
            margin: 15,
            nav:true,
            responsive: {
              0: {
                items: 1,
                nav:false,
      
              },
              600: {
                items: 2,
              },
              1000: {
                items: 4,
        
              }
         
            }
          });
          owl= $('.TestimonialsCarusel').owlCarousel({
            autoplay: true,
            loop: false,
            margin: 15,
            nav:true,
            items:1,
            dots:true,
            dotsContainer:".Images",
            responsive: {
              0: {
                nav:false,
      
              },
              1000:{
                  nav:true,
              }
         
            }
          });
          $('.OurSpeakersCar').owlCarousel({
            autoplay: true,
            loop: false,
            margin: 15,
            nav:true,
            dotsContainer:".Images",
            responsive: {
              0: {
                items:1,
                nav:false,
      
              },
              600:{
                items:2,

                nav:true,
              },
              1000:{
                items:4,
                  nav:true,
              }
         
            }
          });
        
          $('.Images').on('click', 'li', function(e) {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
          });

      }, 1000);

});

