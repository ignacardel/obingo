/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var timestamp = null;
var pausa=1;
var cantados=new Array();

function callComplete(response) {
    //alert("Response received is: "+response);
    var json = eval('(' + response + ')');
    if (json['msg']!='Bingo' && json['msg']!='Fin'){
        if (pausa==1){
            pausa=0;
            repintarelementos()
        }
        $.unblockUI();
        pintarcantado(json['msg']);
        cantados.push(json['msg']);
    //        $("#numeros").append(
    //            "<div>"+json['msg']+"</div>"
    //            );
    }else if (json['msg']=='Bingo')
    {
        if (pausa==0){
            despintarelementos();
            $.blockUI({
                message: '<p id="modal"><img src="blue-loading.gif"/>Cantaron Bingo!</p>'
            });
            //$('#numeros').empty();
            pausa=1;
        }
    }else if (json['msg']=='Fin'){
        if (pausa==0){
            despintarelementos();
            $.blockUI({
                message: '<p id="modal"><img src="blue-loading.gif"/>Partida finalizada!</p>'
            });
            //$('#numeros').empty();
            pausa=1;
        }
    }
    timestamp  = json['timestamp'];
    // reconnect to the server
    connect();
};

function connect() {
    // when the call completes, callComplete() will be called along with
    // the response returned
    $.post('script.php?timestamp='+timestamp, {}, callComplete);
};

function recibircantados(response){
    var json = eval('(' + response + ')');
    if (json['msg']!='pausa'){   
        for (var i=0;i<json.length;i++){
            pintarcantado2(json[i]);
            cantados.push(json[i]);
        //            $("#numeros").append(
        //                "<div>"+json[i]+"</div>"
        //                );

        }
    }else{
        $.blockUI({
            message: '<p id="modal"><img src="blue-loading.gif"/>Preparando nueva partida!</p>'
        });
        pausa=1;
    }
    
    connect();
};

function pedircantados(){
    $.post('pedircantados.php', {}, recibircantados);
};

