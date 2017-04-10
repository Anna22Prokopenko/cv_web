$(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top - $('.header').height();
       $('html,body').animate( { scrollTop: destination }, 1100 );
   });
 });