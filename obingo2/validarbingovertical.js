/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function vertical(carton){
    if(hayBingoCol1(carton)){
        return true;
    }

    if(hayBingoCol2(carton)){
        return true;
    }

    if(hayBingoCol3(carton)){
        return true;
    }

    if(hayBingoCol4(carton)){
        return true;
    }

    if(hayBingoCol5(carton)){
        return true;
    }

    return false;
}

function hayBingoCol1(carton){
    var cont=0;
    if ($("#square0carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square0carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square5carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square5carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square10carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square10carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square14carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square14carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square19carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square19carton"+carton).html())!=(-1)) cont++;
    }

    if (cont==5) return true;
    else return false;
}

function hayBingoCol2(carton){

    var cont=0;
    if ($("#square1carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square1carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square6carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square6carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square11carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square11carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square15carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square15carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square20carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square20carton"+carton).html())!=(-1)) cont++;
    }

    if (cont==5)return true;
    else return false;
}

function hayBingoCol3(carton){

    var cont=0;
    if ($("#square2carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square2carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square7carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square7carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square16carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square16carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square21carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square21carton"+carton).html())!=(-1)) cont++;
    }

    if (cont==4)return true;
    else return false;
}

function hayBingoCol4(carton){
    
    var cont=0;
    if ($("#square3carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square3carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square8carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square8carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square12carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square12carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square17carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square17carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square22carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square22carton"+carton).html())!=(-1)) cont++;
    }

    if (cont==5)return true;
    else return false;
}

function hayBingoCol5(carton){

    var cont=0;
    if ($("#square4carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square4carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square9carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square9carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square13carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square13carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square18carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square18carton"+carton).html())!=(-1)) cont++;
    }

    if ($("#square23carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){

        if (cantados.indexOf($("#square23carton"+carton).html())!=(-1)) cont++;
    }

    if (cont==5)return true;
    else return false;
}