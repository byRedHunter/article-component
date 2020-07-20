const $icono = document.querySelector('#icono')
const $share = document.querySelector('#share')

$icono.addEventListener('click', () => {
	$share.classList.toggle('showShare')
})
