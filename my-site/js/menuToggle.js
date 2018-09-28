var menuToggle = document.querySelector('.nav-menu-toggle');
menuToggle.addEventListener('click', 
									function() {
									  const navs = document.querySelectorAll('.nav-menu')
									  
									  navs.forEach(nav => nav.classList.toggle('nav-menu-show'));
									});
//TODO: how to pass function as a variable