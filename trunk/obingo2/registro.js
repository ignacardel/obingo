/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function registro(){
    var nombres=$('#nombres').val();
    var apellidos=$('#apellidos').val();
    var email=$('#email').val();
    var direccion=$('#direccion').val();
    var telf=$('#telf').val();
    
    if (nombres=="" ||apellidos=="" ||email=="" ||direccion=="" || telf=="")
    {
        $.blockUI({message:'<p id="modal2">Llene todo los campos!'});
        setTimeout($.unblockUI, 2000);
    }else{
        $.post("registro.php?nombres="+nombres+"&apellidos="+apellidos+"&email="+email+"&direccion="+direccion+"&telf="+telf,function(){
                $.blockUI({message:'<p id="modal">Registro Exitoso!'});
                      setTimeout(function() {
                            $.unblockUI({
                                onUnblock: function(){ location="index.html";}
                            });
                      }, 2000);
            });
       
    }

}