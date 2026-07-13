document.querySelectorAll('.butterfly').forEach(function(el){
	el.addEventListener('mouseover',function(){
		x =Math.random * 300
		y = Math.random * 300
		el.style.left = x + "py"
		el.style.top = y + "py"
	});
});