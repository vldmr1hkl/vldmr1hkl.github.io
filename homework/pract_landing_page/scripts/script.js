let iconMenu = document.getElementById('iconMenu')

let iconOpen = document.getElementById('iconOpen')
let iconClose = document.getElementById('iconClose')

let burger = document.getElementById('burger')

iconMenu.addEventListener('click', () => {
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
	burger.classList.toggle('show-menu')
})