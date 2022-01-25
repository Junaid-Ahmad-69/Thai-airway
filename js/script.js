$(document).ready(function(){
    $(".slider-hold").slick({
        infinity:false,
        autoplay:true,
        autoplayspeed:1000,
        dots:true,
        arrows:false,
        prevArrow:false,
        nextArrow:false,
    });
});
$(document).ready(function(){
    $("ul.nav-bars a").click(function (e) {
        e.preventDefault();  
          $(this).tab('show');
      });
      
});
$(document).ready(function(){
    $('.special-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:1000,
      arrows: true,
      prevArrow:'.left-arrow',
      nextArrow:'.right-arrow',
      fade: true,
      dots: false,
      asNavFor: '.feature-main',
    });
    $('.feature-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.special-content',
      dots: false,
      arrows:false, 
      focusOnSelect: true,
    });
  });
  $(document).ready(function(){
    $('.context').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:2000,
      arrows: true,
      prevArrow:'.left-arrow-1',
      nextArrow:'.right-arrow-1',
      fade: true,
      dots: false,
      asNavFor: '.content-holder',
    });
    $('.content-holder').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.context',
      dots: false,
      arrows:false, 
      focusOnSelect: true,
    });
  });