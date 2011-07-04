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

    var json = eval('(' + response + ')');
    
    for (var i=0;i<json.length;i++){
        $("#numeros").append(
            "<div>"+json[i]+"</div>"
            );
    }

    connect();
};

function bingo(){

    $.ajax({
        type : 'GET',
        url  : 'write.php?opcion=1',
        async : true,
        cache : false
    });

    //aqui tiene que llamarse al metodo que valida......
    var test=Math.floor(Math.random()*2);
    if (test==1)
    {
        $.ajax({
            type : 'GET',
            url  : 'write.php?opcion=2',
            async : true,
            cache : false
        });
    }
    
    $.ajax({
        type : 'GET',
        url  : 'write.php?opcion=3',
        async : true,
        cache : false
    });

	
}

function pedircantados(){
    $.post('pedircantados.php', {}, recibircantados);
};

