$(document).ready(function(){
  
    $('.list-group-item').click(function(){
     
      var targetPos = $('.contentTop').offset().top;
      var scrollPos = $(window).scrollTop();
  if(targetPos<scrollPos){   $('html,body').animate({scrollTop:targetPos},500);
    }  
    });
    
    $('.searchStart').click(function(e){
      e.preventDefault();
      $('.searchBar').addClass('d-block fadeIn');
      $('.searchStart').removeClass( "searchStart" );
     
    });
    
  });