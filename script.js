function toggleMenu() {
	document.getElementById('nav-icon').classList.toggle('open');
	document.getElementById('nav-menu').classList.toggle('open');
}

function shufflePicture(type) {
	var counts = {
		t: 7,
		s: 7,
		p: 7
	};
		
	document.getElementById(type).src = 'assets/' + type + '-style/' + type + '-style-' + parseInt((Math.random() * counts[type])+1) + '.PNG';
}