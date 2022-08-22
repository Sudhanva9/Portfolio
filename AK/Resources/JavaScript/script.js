$(document).ready(function () {


    /* For Sticky navigation */
    
    $('.js--section-signin').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px'
    });


    /* Scroll on buttons */

    $('.js--scroll-to-signin').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-signin').offset().top
        }, 1000);
    });

    $('.js--scroll-to-fields').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-fields').offset().top
        }, 1000);
    });


    /* Navigation scroll */

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    
    /* Animation on scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        $(".js--wp-1").addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $(".js--wp-2").addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $(".js--wp-3").addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $(".js--wp-4").addClass('animated fadeInDown');
    }, {
        offset: '50%'
    });
    
   
    /* Mobile Navi */
    
    
    
    
    /* Maps */
    var map = new GMaps({
      div: '.map',
      lat: 17.5203479,
      lng: 78.465226,
      zoom: 12
});
    
 
    map.addMarker({
  lat: 17.5203479,
  lng: 78.365226,
  title: 'GRIET',
  infoWindow: {
  content: '<p>Gokaraju Rangaraju Institute</p>'

  }
});




});
