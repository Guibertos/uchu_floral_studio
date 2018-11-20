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
        }, 2500);
    });

    // --- page transition --- //


    function transition(){
            $("#page-transition").css("display", "flex");
            $(".container-transition").css("display", "flex");
       setTimeout(function(){
            $("#page-transition").fadeOut(1000, function() {
            $(".container-transition").css("display", "none");
        });
        }, 2500);
    };

    // function pageTransition(target){        
    //     $(".container").hide();
    //     $(target).fadeIn();
    //     $(".container-transition").css("display", "flex");
    //     setTimeout(function(){
    //         $("#page-transition").fadeOut(3000, function() {
    //         $(".container-transition").css("display", "none");
    //     });
    //     }, 2500);
    // }

// --- introduction --- //

    /* function enterSite(){
        $(".intro").css("display", "flex");
        setTimeout(function(){
            $(".intro").show(50, function() {
                $(".intro").css("display", "none");
                $('.home').show('slow');     
            });
        }, 1000);
    };*/

// --- page change --- //

// 1

        // function show(whichSection){
        //     $(".container").css("display", "flex");
        //     $("container" + whichSection).css("display", "none");
        // }


        // $(function(){

        //     $("#home").on("click", function(){
        //         show(".page-b");
        //     });
            
        //     $("#vision").on("click", function(){
        //         show(".page-c");
        //     });

        //     $("#services").on("click", function(){
        //         show(".services");
        //     });

        //     $("#contact").on("click", function(){
        //         show(".contact");
        //     });

// 2

        // });

        // function changeSections() {
        //     pb = document.getElementByClass('page-b');
        //     pc = document.getElementByClass('page-c');
        //     pf = document.getElementByClass('page-f');
        //     ph = document.getElementByClass('page-h');
        //     if('pb').css("display" == "none"){
        //         $('pc', 'pf', 'ph').css("display", "none");
        //         $('pb').css("display", "flex");
        //     }

        //     if('pc').css("display" == "none"){
        //         $('pb', 'pf', 'ph').css("display", "none");
        //         $('pc').css("display", "flex");
        //     }


        //     if('pf').css("display" == "none"){
        //         $('pb', 'pc', 'ph').css("display", "none");
        //         $('pf').css("display", "flex");
        //     }


        //     if('ph').css("display" == "none"){
        //         $('pb', 'pc', 'pf').css("display", "none");
        //         $('ph').css("display", "flex");
        //     }
        //     else {

        //     }
        // }


// 4
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

        
        // $("#vision").on('click', function(){
        //     $('.home').fadeOut(50)
        //     $('.vision').show('slow');
        // });

        // $("#services").on('click', function(){
        //     $('.home').fadeOut(50)
        //     $('.services').show('slow');
        // })

        // $("#contact").on('click', function(){
        //     $('.home').fadeOut(50)
        //     $('.contact').show('slow');
        // })

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

    // --- particles --- //
    // --- based off Alex Boffey code --- //

    // // Ref canvas & context
    // const canvas = document.getElementById('sand-particles');
    // const ctx = canvas.getContext('2d');

    // // Set canvas width & height
    // let width = canvas.width = window.innerWidth;
    // let height = canvas.height = window.innerHeight;

    // // Variables
    // const colour = "#EFEFEF";
    // const maxParticles = 5000;
    // const rads = [0.25, 0.5, 0.75, 1, 1.25];
    // const particles = [];
    // let cx;
    // let cy;

    // // // Tracking mouse position

    // target = $('#cursor');

    // canvas.addEventListener('mousemove', (event) => {
    //     cx = event.clientX;
    //     cy = event.clientY;
    //     setOffset(cx, cy);
    // }, false);

    // function setOffset(cx, cy) {
    //     target.offset({
    //         top: cy - (target.height() / 2),
    //         left: cx - (target.width() / 2)
    //     });
    // }
    // // -------
    // // canvas.addEventListener('mousemove', (event) => {
    // //     cx = e.clientX;
    // //     cy = e.clientY;
    // // }, false);

    // // var canvas = $('body'),
    // // target = $('#cursor');

    // // canvas.mousemove(function (event) {
    // //   var x = event.pageX,
    // //       y = event.pageY;
    // //   setOffset(x, y);
    // // });

    // // function setOffset(x, y) {
    // //   target.offset({
    // //     top: y - (target.height() / 2),
    // //     left: x - (target.width() / 2)
    // //   });
    // // }

    // // Particle class
    // class Particle {
    //     constructor(x, y, radius) {
    //         this.x = x;
    //         this.y = y;
    //         this.radius = radius;
    //     }
    //     move(cx, cy) {
    //         // Move particles
    //         this.x += Math.sin(this.y / 10) * Math.cos(this.y / 10);
    //         this.y += Math.sin(this.x / 10) * Math.cos(this.x / 10);

    //         if (this.x - cx > 0) {
    //             this.x += 0.5;
    //         }
    //         if (this.y - cy > 0) {
    //             this.y += 0.5;
    //         }
    //         if (this.x - cx < 0) {
    //             this.x -= 0.5;
    //         }
    //         if (this.x - cx < 0) {
    //             this.y -= 0.5;
    //         }

    //         if (this.x < 0 || this.x > width) {
    //             this.x = cx;
    //         }
    //         if (this.y < 0 || this.y > height) {
    //             this.y = cy;
    //         }

    //     }
    //     draw(ctx) {
    //         ctx.beginPath();
    //         ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    //         ctx.fillStyle = colour;
    //         ctx.fill();
    //     }
    // }
    // // Create particles & push to array
    // for (let i = 0; i < maxParticles; i++) {
    //     let p = new Particle(
    //         Math.floor(Math.random() * width),
    //         Math.floor(Math.random() * height),
    //         rads[Math.floor(Math.random() * rads.length)]
    //     );
    //     particles.push(p);
    // }

    // // Animation loop
    // function loop() {

    //     // Clear canvas
    //     ctx.clearRect(0, 0, width, height);

    //     // Draw & move particles
    //     for (let particle of particles) {
    //         particle.draw(ctx);
    //         particle.move(cx, cy);
    //     }

    //     // Animation frame
    //     requestAnimationFrame(loop);
    // }
    // // First call to loop
    // loop();

// --- vision --- //

//     --- page slider --- //






















