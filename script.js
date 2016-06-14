function show_correction(){
	
}

function highlight(){
	var correction_elements = document.querySelectorAll(".correction");
	console.log(Object.keys(correction_elements[0]));
	var i = 0;
	for (i;i<correction_elements.length;i++){
		correction_elements[i].style.backgroundColor="green";
	}
	console.log(Object.keys(correction_elements[0].style));
	console.log("hi");
}