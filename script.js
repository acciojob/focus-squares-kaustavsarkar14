//your JS code here. If required.
const squares = document.querySelectorAll('.square')

squares.forEach((el,i)=>{
	el.addEventListener('mouseover',e=>{
		squares.forEach(el=>{
			if(el!=e.target){
				el.style.backgroundColor = "rgb(111, 78, 55)"
			}
		})
	})
	el.addEventListener('mouseout',e=>{
		squares.forEach(el=>{
			if(el!=e.target){
				el.style.backgroundColor = "rgb(230, 230, 250)"
			}
		})
	})
})