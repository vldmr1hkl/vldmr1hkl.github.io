const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelectorAll(".jsCloseMenu");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  //menuBtn.classList.toggle("open");
  
  document.body.classList.toggle('openedMenu')
  //menuItems.classList.toggle("open");
});

// // mobile menu expand
// expandBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("open");
//   });
// });


menuItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.classList.remove('openedMenu')
  });
});






$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 2,
		// slidesToScroll:1,
		speed: 1000,
		// infinite: true,
		// initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 1500,
		// pauseOnFocus: true,
		// pauseOnHover: true,
		// pauseOnDotsHover: true,
		draggable: false,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		// швидко перелистуються слайди
		centerMode: true,
		variableWidth: true,
		// rows: 2,
		// slidesPerRow: 2,
		// vertical: false,
		// verticalSwiping: true,
		// fade: true,
		// asNavFor: ".sliderbig",
		// звязати два слайдера з одинаковою кількістю слайдів,
		responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: false,
			}
		}],
		mobileFirst: false,
		// appendArrows: $(".content"),
		// appendDots: $(".content"),
		// перемістити в іншій div

	});
	// $('.slider')on('beforeChange', function(event, slick, currentSlide, nextSide){

	// })

});