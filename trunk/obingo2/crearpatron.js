


function crearpatron(){
    var posiciones=new Array();
    var cont=0;
    var nombre=$('#nombrepatron').val();
    if (nombre==""){
        $.blockUI({message:'<p id="modal2">Introduzca un nombre'});
        setTimeout($.unblockUI, 2000);
    }else{
        for (var i=0;i<24;i++){
            if ($("#patron"+i).css("backgroundColor")!="rgb(52, 94, 155)"){
                cont++;
            }else{
                posiciones.push(i);
            }
        }
        if (cont==24){
            $.blockUI({message:'<p id="modal2">Seleccione al menos una casilla'});
            setTimeout($.unblockUI, 2000);
        }
        else{
            $.post("crearpatron.php?nombre="+nombre+"&posiciones="+posiciones,function(){
                $.blockUI({message:'<p id="modal">Patron creado!'});
                      setTimeout(function() {
                            $.unblockUI({
                                onUnblock: function(){ location.reload(true);}
                            });
                      }, 2000); 
            });
             
        }
    } 
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