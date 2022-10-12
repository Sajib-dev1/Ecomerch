// ==============back to top start======================
$(".back") .on("click",function(){
    $("html,boddy") .animate({scrollTop:0},1000)
  });

  $(window).on ('scroll',function(){
    var scroll=$(this).scrollTop()
    if(scroll > 50) {
      $(".back") .fadeIn(500)
    }
    else{
      $('.back') .fadeOut(500)
    }
    if(scroll>50){
      $('.navbar').addClass('sticke-menu')
  }
    else{
      $('.navbar').removeClass('sticke-menu')
    }
  })
// ==============back to top end======================
// ============side bar part============
    $('.show').on('click',function(){
       $('.slide-bar').css('left','0px')
    });
    $('.close').on('click',function(){
       $('.slide-bar').css('left','-100%')
    });
    $('.nav-link').on('click',function (){
       $('.slide-bar').css({left:'-100%'});
    });
// ============side bar part============
// ==============heart icon change start======================
let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-regular");

btn.onclick =function (){
    if(icon.classList.contains("fa-regular")){
        icon.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon change end====================
// ================heart icon shop1 end====================
let btn2 = document.querySelector(".shop-toggle");
let icon2 = btn2.querySelector(".fa-regular");

btn2.onclick =function (){
    if(icon2.classList.contains("fa-regular")){
        icon2.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon2.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop1 end====================
// ================heart icon shop3 end====================
let btn3 = document.querySelector(".shop-toggle3");
let icon3 = btn3.querySelector(".fa-regular");

btn3.onclick =function (){
    if(icon3.classList.contains("fa-regular")){
        icon3.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon3.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop3 end====================
// ================heart icon shop4 end====================
let btn4 = document.querySelector(".shop-toggle4");
let icon4 = btn4.querySelector(".fa-regular");

btn4.onclick =function (){
    if(icon4.classList.contains("fa-regular")){
        icon4.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon4.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop4 end====================
// ================heart icon shop4 end====================
let btn5 = document.querySelector(".shop-toggle5");
let icon5 = btn5.querySelector(".fa-regular");

btn5.onclick =function (){
    if(icon5.classList.contains("fa-regular")){
        icon5.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon5.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop4 end====================
// ================heart icon shop4 end====================
let btn6 = document.querySelector(".shop-toggle6");
let icon6 = btn6.querySelector(".fa-regular");

btn6.onclick =function (){
    if(icon6.classList.contains("fa-regular")){
        icon6.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon6.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop4 end====================
// ================heart icon shop4 end====================
let btn7 = document.querySelector(".shop-toggle7");
let icon7 = btn7.querySelector(".fa-regular");

btn7.onclick =function (){
    if(icon7.classList.contains("fa-regular")){
        icon7.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon7.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop4 end====================
// ================heart icon shop4 end====================
let btn8 = document.querySelector(".shop-toggle8");
let icon8 = btn8.querySelector(".fa-regular");

btn8.onclick =function (){
    if(icon8.classList.contains("fa-regular")){
        icon8.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon8.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop4 end====================
// ================heart icon shop4 end====================
let btn9 = document.querySelector(".shop-toggle9");
let icon9 = btn9.querySelector(".fa-regular");

btn9.onclick =function (){
    if(icon9.classList.contains("fa-regular")){
        icon9.classList.replace("fa-regular","fa-solid");
    }
    else{
        icon9.classList.replace("fa-solid","fa-regular")
    }
}
// ================heart icon shop4 end====================




