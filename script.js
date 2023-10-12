//your JS code here. If required.
const squares = document.querySelectorAll('.square')

squares.forEach((el,i)=>{
	el.addEventListener('mouseover',e=>{
		squares.forEach(el=>{
			if(el!=e.target){
				el.style.backgroundColor = "rgb(230, 230, 250)"
			}
		})
	})
	el.addEventListener('mouseleave',e=>{
		squares.forEach(el=>{
			if(el!=e.target){
				el.style.backgroundColor = "rgb(111, 78, 55)"
			}
		})
	})
})