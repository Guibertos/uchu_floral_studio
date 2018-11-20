// --- basic styles --- //

    // --- cursor ---//
    
    var canvas = $('body'),
    target = $('#cursor');

    canvas.mousemove(function (event) {
      var x = event.pageX,
          y = event.pageY;
      setOffset(x, y);
    });

    function setOffset(x, y) {
      target.offset({
        top: y - (target.height() / 2),
        left: x - (target.width() / 2)
      });
    }

    // --- logo --- //

    $('.logo').on('mouseover',function(){
        $('.logo').removeClass('animated pulse');
        setTimeout(function(){
            $('.logo').addClass('animated pulse');
        },75);
    });

    // --- page loader --- //

    $(function(){
        $(".container-loader").css("display", "flex");
        $(".container-transition").css("display", "flex");
        setTimeout(function(){
            $("#page-loader").hide(50, function() {
                $(this).hide();
                transition();
                $(".container-loader").css("display", "none");
            });
        }, 5500);
    });

    // --- page transition --- //


    function transition(){
            $("#page-transition").css("display", "flex");
            $(".container-transition").css("display", "flex");
       setTimeout(function(){
            $("#page-transition").fadeOut(1000, function() {
            $(".container-transition").css("display", "none");
        });
        }, 1500);
    };


// --- introduction --- //



// --- page change --- //

    var hereNow = ".intro";

    function pageTransition(target){
        console.log(target);
        if(target==".vision" || target==".services" || target==".contact"){
            hideNav();
        }

        if(target == hereNow){
            return;
        }

        //hide herenow
        $(hereNow).hide(50);

        //show transition
        transition();
        
        //show target
        setTimeout(function(){
            $(target).show();
        }, 1000)
        

        //herenow = target

        hereNow = target;

    }


// --- homepage --- //

    // --- nav --- //
    var burger = $(".hamburger img");

    function hideNav(){
        burger.attr('src', burger.attr('data-off-src'));           
        $('#nav').css('right', '-100%');
        burger.toggleClass("on");
    }

    function showNav(){
        burger.attr('src', burger.attr('data-on-src'));
        $('#nav').css('right', 0);
        burger.toggleClass("on");
    }
    
    $(function(){

        burger.on('click', function() {
            console.log('i ah burger');
            if (!burger.hasClass('on')) {
              showNav(); 
            } else {
            hideNav();
            }

        });
    });

// --- vision --- //

    // --- page slider --- //

    $(function(){
        $('.scroll-right').on('click',function(){
            $('.page-c').addClass('animated fadeInLeft');
            $('.page-d').css('display', 'flex');
            $('.page-c').css('display', 'none');
        });

        $('.scroll-right-1').on('click', function(){
            $('.page-d').addClass('animated fadeInLeft');
            $('.page-e').css('display', 'flex');
            $('.page-d').css('display', 'none');
        });

        $('.scroll-back').on('click', function(){
            $('.page-d').addClass('animated fadeInRight');
            $('.page-c').css('display', 'flex');
            $('.page-d').css('display', 'none');
        });

        $('.scroll-back-1').on('click', function(){
            $('.page-e').addClass('animated fadeInRight');
            $('.page-d').css('display', 'flex');
            $('.page-e').css('display', 'none');
        });
    });

// --- services --- //

    // --- page slider --- //

    $(function(){
        $('.scroll-right').on('click',function(){
            $('.page-f').addClass('animated fadeInLeft');
            $('.page-g').css('display', 'flex');
            $('.page-f').css('display', 'none');
        });

        $('.scroll-back').on('click', function(){
            $('.page-g').addClass('animated fadeInRight');
            $('.page-f').css('display', 'flex');
            $('.page-g').css('display', 'none');
        })
    });












