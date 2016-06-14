var colors = ["#E1E1FF", "#DBEBFF", "#ECFAFF", "#D6F8DE", "#FFECFF"];
var amount_colors = colors.length;

function show_correction(){
	
}

function isHighlighted(sentence){
	var isHighlighted = true;
	var i = 0;
	while (isHighlighted && i<amount_colors) {
		isHighlighted = isHighlighted && sentence.style.backgroundColor == colors[i];
		i++;
	}
	return isHighlighted;
}
function highlight(){
	var correction_sentences = document.querySelectorAll(".correction");
	var correction_boxes = document.querySelectorAll(".correction_box");
	


	// make sure there are as many highlighted sentences as corrections.
	if (correction_sentences.length == correction_boxes.length){
		for (var i = 0;i<correction_sentences.length;i++){
		if (isHighlighted(correction_sentences[i])){
			correction_sentences[i].style.backgroundColor = "transparent";
			correction_boxes[i].style.display = "none";
		} else {
			correction_sentences[i].style.backgroundColor = colors[i%amount_colors];
			correction_boxes[i].style.display = "block";
			correction_sentences.style.borderColor = colors[i%amount_colors];
		}
	}	
	}
	
}