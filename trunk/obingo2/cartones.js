window.onload = newCard;

var usedNums = new Array(76);
var carton=1;

function newCard() {
	usedNums = new Array(76);

     if (document.getElementById) {
        for (var i=0; i<24; i++) {
           setSquare(i);
        }
		carton=carton+1;
     }
     else {
        alert("Sorry, your browser doesn't support this script");
     }
}

function setSquare(thisSquare) {
     var currSquare = "square" + thisSquare;
     var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
     var colBasis = colPlace[thisSquare] * 15;
     var newNum;
     do {
        newNum = colBasis + getNewNum() + 1;
     }
     while (usedNums[newNum]);

     usedNums[newNum] = true;
     document.getElementById(currSquare+"carton"+carton). innerHTML = newNum;
}
	 
	

function getNewNum() {
     return Math.floor(Math.random() * 15);
}

function pintar(celda){
	
    $("#"+celda.id).animate({ backgroundColor: "#68BFEF" }, 500);		
	
}

function pedircarton(){
		$("#carton"+carton).toggle("slow");
		newCard();
	
	if (carton==5){
		$("#botonpedircarton").toggle();
	}
}


