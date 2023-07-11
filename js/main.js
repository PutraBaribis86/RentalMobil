$(document).ready(function(){
  var nilai = 0;
  var arah = "";
  $(".bigContainer").scroll(function(){
    var nScroll = $(this).scrollTop();
    
    if(nilai < nScroll){
      nilai = nScroll;
      arah = "down";
    }
    else if(nilai > nScroll){
      nilai = nScroll;
      arah = "up";
    }
    console.log(nilai)
    if(nilai > 84){
      $(".pupupwa").show("slow");
    }else if(nilai >! 84){
      $(".pupupwa").hide("slow");
    }
    if(nilai > 480){
      $(".bttnscroll").show("slow");
    }else if(nilai >! 480){
      $(".bttnscroll").hide("slow");
    }
    if(nilai > 227){
      $(".navMain").click(function(){
        $(".boxMenuNav").css({
          position: "absolute",
        })
      })
    }
    else if(nilai >! 227){
      $(".boxMenuNav").css({
        position: "relative",
      })
    }
  })
  
  
  $(".bars").click(function(){
    $(".bars").hide();
    $(".close").fadeIn(500);
    $(".boxMenuNav").css({
      height: '250',
      transition: '.5s',
      padding: '10px',
    })
    $(".boxMenuNav h2").css({
      transform: 'translateY(0)',
      transition: '.5s',
    })
  })

  $(".close").click(function(){
    $(".close").hide();
    $(".bars").fadeIn(500);
    $(".boxMenuNav").css({
      height: '0',
      padding: '0',
    })
    $(".boxMenuNav h2").css({
      transform: 'translateY(-200px)',
      transition: '.5s',
    })
  })
  $(".bttnscroll").click(function(){
    $(".bigContainer").animate({scrollTop : 0},1000)
  })
  
  
  
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    fade: false,
    cssEase: 'ease-in-out',
    speed: 1000,
  });
})