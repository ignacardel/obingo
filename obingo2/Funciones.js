/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var timestamp = null;
var pausa=0;
function callComplete(response) {
    //alert("Response received is: "+response);
    var json = eval('(' + response + ')');
    if (json['msg']!='Bingo'){
        pausa=0;
        $("#numeros").append(
            "<div>"+json['msg']+"</div>"
            );
    }else if (json['msg']=='Bingo')
    {
        if (pausa==0){
            alert("cantaron bingo");
            $('#numeros').empty();
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
    $("#numeros").append(
        "<div>"+response+"</div>"
        );

    connect();
};

function pedircantados(){
    $.post('pedircantados.php', {}, recibircantados);
};

