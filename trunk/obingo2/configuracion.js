/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function configurarjuego(i){
    var valor;
    if(i==1){
        valor=$('#tnumeros').val();
        if (valor<3 || valor>15){
            alert("Introduzca un valor entre 3 y 15 segundos");
        }else{
            $.post("configurar.php?opcion=1&valor="+(valor*1000));
            $.blockUI({message:'<p id="modal"><img src="blue-loading.gif"/>Guardando</p>'});
            setTimeout($.unblockUI, 2000);
        }
    }
    if(i==2){
        valor=$('#tpartida').val();
        if (valor<5 || valor>120){
            alert("Introduzca un valor entre 5 y 120 segundos");
        }
        else{
            $.post("configurar.php?opcion=2&valor="+(valor*1000));
            $.blockUI({message:'<p id="modal"><img src="blue-loading.gif"/>Guardando</p>'});
            setTimeout($.unblockUI, 2000);
        }
    }
    if(i==3){
        valor=$('#cnumero').val();
        if (valor<5 || valor>75){
            alert("Introduzca un valor entre 5 y 75");
        }
        else{
            $.post("configurar.php?opcion=3&valor="+valor);
            $.blockUI({message:'<p id="modal"><img src="blue-loading.gif"/>Guardando</p>'});
            setTimeout($.unblockUI, 2000);
        }
    }
    
    pedirconfiguracion();

}

function pedirconfiguracion(){
    $.post('pedirconfiguracion.php?opcion='+1,function(data){
        var json = eval('(' + data + ')');
        $('#tnumeros').val(json/1000);
    });
    $.post('pedirconfiguracion.php?opcion='+2,function(data){
        var json = eval('(' + data + ')');
        $('#tpartida').val(json/1000);
    });
    $.post('pedirconfiguracion.php?opcion='+3,function(data){
        var json = eval('(' + data + ')');
        $('#cnumero').val(json);
    });
}