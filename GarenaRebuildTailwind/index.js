// slick slider
$(document).ready(function(){
  $('.list-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 1200,
    dots: true,
    arrows:true,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'</i></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'</i></button>`,
  });
});	
$(document).ready(function(){
  $('.slider-2').slick({
    infinite: true,
    centerMode: true,
    autoplay:true,
    autoplaySpeed: 1200,
    centerPadding: '20%',
    slidesToShow: 1,
    dots:true,
        prevArrow:
        `<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'</i></button>`,
        nextArrow:
        `<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'</i></button>`,
      });
})
const cards = document.querySelectorAll(".card__box--deck");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
        card.classList.toggle("unactive");
    })
});


