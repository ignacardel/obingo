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
    
    if ($(celda).css("backgroundColor")!="rgb(52, 94, 155)"){
        $("#"+celda.id).animate({
            backgroundColor: "#345E9B",
            color: "#FFF"
        }, 500);
           
    }else{
        $("#"+celda.id).animate({
            backgroundColor: "#eee",
            color: "#333333"
        }, 500);
            
    }
}

function pintarcantado(i){
    $("#"+i+"cantados").animate({
        backgroundColor: "#345E9B",
        color: "#FFF"
    }, 500);
}

function pintarcantado2(i){
    $("#"+i+"cantados").animate({
        backgroundColor: "#345E9B",
        color: "#FFF"
    });

}

function despintarcantados(){
    for (var i=1;i<76;i++){
        $("#"+i+"cantados").animate({
            backgroundColor: "#eee",
            color: "#333333"
        });
    
    }
}

function despintarmarcados(carton){
    for (var i=0;i<23;i++){
        $("#square"+i+"carton"+carton).animate({
            backgroundColor: "#eee",
            color: "#333333"
        });

    }
}

function pedircarton(){
    $("#carton"+carton).toggle("slow");
    newCard();
	
    if (carton==5){
        $("#botonpedircarton").toggle();
    }
}


function repintarelementos(){

    carton=1;
    $("#carton1").toggle("slow");
    $("#botonpedircarton").toggle();
    newCard();
    pedirpatron();
}

function despintarelementos(){
    $("#nombrepatron").html('');
    for (i=1;i<carton;i++){
        $("#carton"+i).toggle("slow");
        despintarmarcados(i);
    }
    if (carton!=5){
    $("#botonpedircarton").toggle();}
    despintarcantados();
    cantados=new Array();
}