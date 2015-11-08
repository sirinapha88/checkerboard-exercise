
var makeSquare = function(color) {
    var myDiv = document.createElement("div");
    document.body.appendChild(myDiv);
    myDiv.className = "divBody";
    myDiv.style.width = '11.1%';
	myDiv.style.paddingBottom = ' 11.1%';
	myDiv.style.float = 'left';
	myDiv.style.backgroundColor = color;
};

var theBody = document.getElementsByTagName("body");
randomColor();

function redBoard(){

	for(var i = 0; i < 63; i++){

		if(i%2 === 0){
			makeSquare('black');
		} else {
			
			makeSquare('red');
		}

	}
}


function randomColor(){
	for(var i = 0; i < 63; i++){
		
		makeSquare("#"+((1<<24)*Math.random()|0).toString(16));	

	}	
}





