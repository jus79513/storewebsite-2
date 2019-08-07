$(document).ready(function(){
  

    $(window).scroll(function(){
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      
     
  
   
   //animated
   $('.animated-left').each(function(){
     var thisPos = $(this).offset().top;
     if((windowHeight+scrollPos)>=thisPos){
       $(this).addClass('fadeIn');
     }
     
   });
    
   $('.animated-right').each(function(){
     var thisPos = $(this).offset().top;
     if((windowHeight+scrollPos)>=thisPos){
       $(this).addClass('fadeIn');
     }
     
   });
      
   $('.animated-up').each(function(){
     var thisPos = $(this).offset().top;
     if((windowHeight+scrollPos)>=thisPos){
       $(this).addClass('fadeIn');
     }
     
   });
   
   $('.animated-down').each(function(){
    var thisPos = $(this).offset().top;
    if((windowHeight+scrollPos)>=thisPos){
      $(this).addClass('fadeIn');
    }
    
  });
      
      
      
    $('.character-img').css('transform','translateY('+(scrollPos/2)+'px)')
      
    $('.dynamic-logo').css('transform','translateY('+(scrollPos/2)+'px)')  
     
    });
    
    
    
  });