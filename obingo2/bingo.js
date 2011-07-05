/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var idpatron=null;
var nombrepatron=null;
var posicionespatron=new Array();

function bingo(){

var valido=true;
    //$.post("write.php?opcion=1",despegar());

    //aqui tiene que llamarse al metodo que valida......
    
    var test=Math.floor(Math.random()*2);
    if (test==1)
    {

        // $.post("write.php?opcion=2");

        $.post("write.php?opcion=2",function(data) {
            if (data==0){
                //redirecciona al ganador!!
                window.location = "http://www.google.com/";
            }
        });
    }

//$.post("write.php?opcion=3");
}


function pedirpatron(){
    posicionespatron=new Array();
    $.post("pedirpatron.php",function(data) {
        var json = eval('(' + data + ')');
        idpatron=json['id'];
        nombrepatron=json['nombre'];
        pedirposicionespatron();
         $("#patron").html(nombrepatron);
    });
    
}

function pedirposicionespatron(){
    $.post("pedirposicionespatron.php?patron="+idpatron,function(data) {
        var json = eval('(' + data + ')');
        for (var i=0;i<json.length;i++){
            posicionespatron.push(json[i]);
        }
    });
}