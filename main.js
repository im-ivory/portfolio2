// var element = document.querySelector('.spot');
// var h = element.clientHeight;

// $( 'html, body' ).stop().animate( { scrollTop : $( ".spot" ).height()} ) 
// $( 'html, body' ).stop().animate( { scrollTop : '+=$( ".spot" ).height()' } )

function fnMove(seq){
  var offset = $("#section" + seq).offset();
  $('html, body').animate({scrollTop : offset.top}, 400);
}



var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });