// gallery component
document.addEventListener('DOMContentLoaded', function(){
	var rotate = function(component, step){
		// figure out width of container
		var slide = component.querySelector('.slide');
		let slideWidthVw = ((slide.offsetWidth / document.documentElement.clientWidth)+3) * 100;
		var left = Number(slide.style.left.replace('rem', ''));
		left += step * 25;
		if(left > 0) left = 0;
		if(left < -slideWidthVw) left = -slideWidthVw;
		slide.style.left = left+'rem';
	};

	var components = document.querySelectorAll('.gallery');
	for(var i = 0; i < components.length; i++){
		var component = components[i];
		component.querySelector('.left').addEventListener('click', function(){
			rotate(component, 1);
		});
		component.querySelector('.right').addEventListener('click', function(){
			rotate(component, -1);
		});
	}
});