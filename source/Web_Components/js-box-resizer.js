// A PURE JAVASCRIPT CONTAINER RESIZER
// FOR GRID BASED BOXES
// "In case anyone needed a javascript only function to resize heights of boxes in a grid"

var target = "class-name";

// GET HEIGHT OF THE LONGEST BOX
function getMaxBoxHeight(target){
	maxHeight = 0;
	var boxArr = document.getElementsByClassName(target);
	for(i=0;i<boxArr.length;i++){
		if (boxArr[i].offsetHeight > maxHeight){
			maxHeight = boxArr[i].offsetHeight;
		}
	}
	return maxHeight;
}

// SET HEIGHT OF EACH BOX TO THE LONGEST
function setMinBoxHeight(maxHeight){
	var boxArr = document.getElementsByClassName(target);
	for(i=0;i<boxArr.length;i++){
		boxArr[i].style.minHeight = maxHeight+"px";
	}
}

// HANDLE GET/SET OF BOX HEIGHTS
function resizeBoxes(target){
	// RESET MINIMUM HEIGHTS IN CASE BOXES SHRINK
	setMinBoxHeight(0);
	// SET BOX HEIGHT TO SIZE OF LARGEST BOX
	setMinBoxHeight( getMaxBoxHeight(target) );
}

// SET WINDOW EVENTS TO LISTEN FOR CHANGES IN SIZE
window.onload = resizeBoxes(target);
window.addEventListener('resize', resizeStepBoxes);
