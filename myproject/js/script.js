document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM loaded')

	const menuBtn = document.querySelector(".menu-btn");
	const menuItems = document.querySelectorAll(".jsCloseMenu");
	const expandBtn = document.querySelectorAll(".expand-btn");

	menuBtn.addEventListener("click", () => {
		document.body.classList.toggle('openedMenu');
	});

	menuItems.forEach((btn) => {
  	btn.addEventListener("click", (e) => {
    	document.body.classList.remove('openedMenu')
    });
  });

async function populate() {
		const requestURL = 'https://vldmr1hkl.github.io/homework/product-card.json'
		const request = new Request(requestURL)

		const response = await fetch(request)
		const productCards = await response.json()

		console.log(productCards)

		populateCard(productCards)
	}


	function populateCard(obj) {
		const myDiv = document.createElement('div')
		myDiv.classList.add('slider__item', 'd-flex')

		const cards = obj.productCards

		console.log(cards)


		for(const card of cards) {

			console.log(card)

			const myDiv = document.createElement('div')
			myDiv.classList.add('slider__item', 'd-flex')

			const myImg = document.createElement('img')

			const divProductInfo = document.createElement('div')
			divProductInfo.classList.add('product-info', 'd-flex', 'justify-between')

			const divName = document.createElement('div')
			divName.classList.add('name')

			const divPrice = document.createElement('div')
			divPrice.classList.add('price')


			divName.textContent = card.name
			divPrice.textContent = `${card.price}$`
			myImg.src  = card.img

			myDiv.appendChild(myImg)
			myDiv.appendChild(divProductInfo)
			divProductInfo.appendChild(divName)
			divProductInfo.appendChild(divPrice)
			

			document.getElementById('product-card-slider').appendChild(myDiv)

		


		}
		$(document).ready(function(){
			$('.slider').slick({
				rows: 2,
				dots: true,
				variableWidth: true,
				arrows: false,
				dots: true,
				adaptiveHeight: true,
				slidesToShow: 2,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 1500,
				draggable: false,
				swipe: true,
				touchThreshold: 10,
				touchMove: true,
				waitForAnimate: false,
				centerMode: false,
				variableWidth: false,
				responsive:[{
				breakpoint: 768,
				settings: {

					rows: 1,
					slidesToShow: 4,
					arrows: true,
					dots: true,
					variableWidth: true,
					centerMode: true,
				}
			}],
			mobileFirst: true,
		});
	});

		
	}


	populate()
})