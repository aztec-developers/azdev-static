function toggleMenu() {
	var nav = document.getElementById("responsive");
	var links = document.getElementById('links');
	if(nav.style.display == 'flex'){
		nav.classList.add('shrink');
		setTimeout(function(){ links.style.display = 'none'; }, 300);
		setTimeout(function(){ nav.style.display = 'none'; }, 500);
		return;
	}
	nav.classList.remove('shrink');
	nav.classList.add('expand');
	nav.style.display = 'flex';
	links.style.display = 'flex';
}
