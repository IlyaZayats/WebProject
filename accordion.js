$(document).ready(function() {
  /*
   $(".accordion-group:first").addClass("toggle");
 $(".accordion-header:first").addClass("active"); первый элемент включен?
 $(".accordion-content:not(:first)").hide();
  */
 let oldelem=null;
 $(".accordion-content").hide();
 $(".accordion-header").click(function () {
   if($(this).next().is(":animated")) return;
   $(this).next().slideToggle();
   $(this).toggleClass("active");
   $(this).parent().toggleClass("toggle");
   if(oldelem===this) return;
   //$(".accordion-content").not($(this).next()).slideUp();
   $(oldelem).next().slideUp();
   //$(".accordion-header").not($(this)).removeClass("active");
   $(oldelem).removeClass("active");
   $(oldelem).parent().removeClass("toggle");
   oldelem=this;
   //$(".accordion-group").not($(this).parent()).removeClass("toggle");
 });

    
}); 