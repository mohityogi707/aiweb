// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
  };
  
  var first = true;
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").classList.add('fixed-navbar');
    }
     else {
      document.getElementById("navbar").classList.remove('fixed-navbar');
    }
  }
// slider
$(document).ready(function () {
  (function ($) {
$('.client-carousel').owlCarousel({
  items:5,
  loop:true,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
$( ".owl-prev").html('<img src="assets/img/index/owl-next.svg" alt="client" class="h-100 w-100 img-fluid">');
 $( ".owl-next").html('<img src="assets/img/index/owl-preview.svg" alt="client" class="h-100 w-100 img-fluid">');
})(jQuery);
});

// $('.client-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:2
//       },
//       1000:{
//           items:3
//       }
//   }
// })

