//your JS code here. If required.
const squares = document.querySelectorAll('.square')

squares.forEach((el,i)=>{
	el.addEventListener('mouseover',e=>{
		squares.forEach(el=>{
			if(el!=e.target){
				el.style.backgroundColor = "#6F4E37"
			}
		})
	})
	el.addEventListener('mouseleave',e=>{
		squares.forEach(el=>{
			if(el!=e.target){
				el.style.backgroundColor = "#E6E6FA"
			}
		})
	})
})