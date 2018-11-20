
$(function(){

// --- basic styles --- //

    // --- cursor ---//
    // --- based off Fernando Saldana code --- //

    // var canvas = $('body'),
    // target = $('#cursor');

    // canvas.mousemove(function (event) {
    //   var x = event.pageX,
    //       y = event.pageY;
    //   setOffset(x, y);
    // });

    // function setOffset(x, y) {
    //   target.offset({
    //     top: y - (target.height() / 2),
    //     left: x - (target.width() / 2)
    //   });
    // }

    // --- page loader --- //

    
        setTimeout(function(){
            $("#page-loader").fadeTo('slow', function() {
                $(this).remove();
            $("#page-loader").addClass('container-transition');
            });
        });
    


    // --- page transition --- //


    
       setTimeout(function(){
            $("#page-transition").fadeOut(3000, function() {
            $(".container-transition").css("display", "none");
        });
        }, 2500);
 

    //each nav element will need a click handler
    //click handler will call pageTransition(target);
    function pageTransition(target){        
        $(".container").hide();
        $(target).fadeIn();
        $(".container-transition").css("display", "flex");
        setTimeout(function(){
            $("#page-transition").fadeOut(3000, function() {
            $(".container-transition").css("display", "none");
        });
        }, 2500);
    }

    // $(function(){ 
    //     $(window).on("load", function(){
    //     $('#preloader').fadeOut('slow', function() {
    //     $(this).remove();
    //     });
    // });
    // });

// --- introduction --- //
    
    
        $(".enter-homepage").on('click', function() {

        })
  

// --- page change --- //

        $(function(){

            $("#home").on("click", function(){
                show(".page-b");
            });
            
            $("#vision").on("click", function(){
                show(".page-c");
            });

            $("#services").on("click", function(){
                show(".services");
            });

            $("#contact").on("click", function(){
                show(".contact");
            });


        });



    function pageTransition(target){

    }

    //     function pageTransition(target) {
    //     var page = document.getElementByClass('home');

    //     if (image.src.match("pedroThePoop.gif")) {
    //         image.src = "img/fly.gif";
    //     }

    //     else {
    //         image.src = "img/pedroThePoop.gif";
    //     }
    // }


// --- homepage --- //

    // --- nav --- //

    $(function(){

        $(".hamburger img").on('click', function() {

        $(this).toggleClass("on");

        if ($(this).hasClass('on')) {
            $(this).attr('src', $(this).attr('data-on-src'));
            $('#nav').css('right', 0)
         }
         else {
            $(this).attr('src', $(this).attr('data-off-src'));
            $('#nav').css('right', '-100%')
         }

        });
    });

    // --- particles --- //
    // --- based off Alex Boffey code --- //

    // Ref canvas & context
    const canvas = document.getElementById('sand-particles');
    const ctx = canvas.getContext('2d');

    // Set canvas width & height
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Variables
    const colour = "#EFEFEF";
    const maxParticles = 5000;
    const rads = [0.25, 0.5, 0.75, 1, 1.25];
    const particles = [];
    let cx;
    let cy;

    // // Tracking mouse position

    target = $('#cursor');

    document.querySelector('.layout').addEventListener('mousemove', (event) => {
        cx = event.clientX;
        cy = event.clientY;
        setOffset(cx, cy);
    }, false);
 
    function setOffset(cx, cy) {
        target.offset({
            top: cy - (target.height() / 2),
            left: cx - (target.width() / 2)
        });
    }
    // -------
    // canvas.addEventListener('mousemove', (event) => {
    //     cx = e.clientX;
    //     cy = e.clientY;
    // }, false);

    // var canvas = $('body'),
    // target = $('#cursor');

    // canvas.mousemove(function (event) {
    //   var x = event.pageX,
    //       y = event.pageY;
    //   setOffset(x, y);
    // });

    // function setOffset(x, y) {
    //   target.offset({
    //     top: y - (target.height() / 2),
    //     left: x - (target.width() / 2)
    //   });
    // }

    // Particle class
    class Particle {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }
        move(cx, cy) {
            // Move particles
            this.x += Math.sin(this.y / 10) * Math.cos(this.y / 10);
            this.y += Math.sin(this.x / 10) * Math.cos(this.x / 10);

            if (this.x - cx > 0) {
                this.x += 0.5;
            }
            if (this.y - cy > 0) {
                this.y += 0.5;
            }
            if (this.x - cx < 0) {
                this.x -= 0.5;
            }
            if (this.x - cx < 0) {
                this.y -= 0.5;
            }

            if (this.x < 0 || this.x > width) {
                this.x = cx;
            }
            if (this.y < 0 || this.y > height) {
                this.y = cy;
            }

        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = colour;
            ctx.fill();
        }
    }
    // Create particles & push to array
    for (let i = 0; i < maxParticles; i++) {
        let p = new Particle(
            Math.floor(Math.random() * width),
            Math.floor(Math.random() * height),
            rads[Math.floor(Math.random() * rads.length)]
        );
        particles.push(p);
    }

    // Animation loop
    function loop() {

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw & move particles
        for (let particle of particles) {
            particle.draw(ctx);
            particle.move(cx, cy);
        }

        // Animation frame
        requestAnimationFrame(loop);
    }
    // First call to loop
    loop();

// --- vision --- //

//     --- page slider --- //

    // function toggleDivs() {
    // var slide = $(".page-c");

    // // See which <divs> should be animated in/out.
    // if (slide.position().left == 0) {
    //     slide.animate({
    //         // left: "-400px"
    //     });
    // }
    // else {
    //     slide.animate({
    //         left: "0px"
    //     });
    // }

    // }

    // $(".pagenation").bind("click", function() {
    //     toggleDivs();
    // });





});














