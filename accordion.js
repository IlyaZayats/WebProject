// Функция внутри $( document ).ready() срабатывает после загрузки DOM.
$(document).ready(function() {
 $(".accordion-group:first").addClass("toggle");
 $(".accordion-header:first").addClass("active");
 $(".accordion-content:not(:first)").hide();
 $(".accordion-header").click(function () {
   $(this).next().slideToggle("slow");
   $(".accordion-content").not($(this).next()).slideUp("slow");
   $(this).toggleClass("active");
   $(".accordion-header").not($(this)).removeClass("active");
   $(this).parent().toggleClass("toggle");
   $(".accordion-group").not($(this).parent()).removeClass("toggle");
 });

    
}); 
