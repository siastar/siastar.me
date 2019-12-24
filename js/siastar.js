// Used to toggle the menu on small screens when clicking on the menu button
     function toggleButton() {
         var x = document.getElementById("navDemo");
         if (x.className.indexOf("w3-show") == -1) {
             x.className += " w3-show";
         } else {
             x.className = x.className.replace(" w3-show", "");
         }
     }

// //ID of your back to top button

// var backToTop = $("#mobile-header");
// //The pixel amount scrolled before back to top button appears
// var scrollAmount = 150;

// $(window).scroll( function() {
//   if ($(this).scrollTop() > scrollAmount) {
//     backToTop.fadeIn();
//   } else {
//     backToTop.fadeOut();
//   }
// });

// backToTop.click( function(e) {
//   $("html, body").animate({scrollTop: 0}, 750);
// });
