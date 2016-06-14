var colors = ["#E1E1FF", "#FFECFF","#DBEBFF", "#ECFAFF", "#D6F8DE"];
var amount_colors = colors.length;

function show_correction(){
	
}

function isHighlighted(sentence){
	var notSet = sentence.style.backgroundColor === "";
	var isTransparent = sentence.style.backgroundColor === "transparent"; 
	var isHighlighted = !isTransparent && !notSet;
	return isHighlighted;
}
function showOrHide(){
	var correction_sentences = document.querySelectorAll(".correction");
	var correction_boxes = document.querySelectorAll(".correction-box");
	// make sure there are as many highlighted sentences as corrections.
	if (correction_sentences.length === correction_boxes.length){
		for (var i = 0;i<correction_sentences.length;i++){
		if (isHighlighted(correction_sentences[i])){
			correction_sentences[i].style.backgroundColor = "transparent";
			correction_boxes[i].style.visibility = "hidden";
		} else {
			correction_sentences[i].style.backgroundColor = colors[i%amount_colors];
			correction_boxes[i].style.visibility = "visible";
			correction_boxes[i].style.borderColor = colors[i%amount_colors];
			correction_boxes[i].style.backgroundColor = colors[i%amount_colors];
		}
	}	
	}
	
}