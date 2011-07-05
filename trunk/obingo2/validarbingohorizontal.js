/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



function horizontal(carton){
    if(hayBingoFila1(carton)){
        return true;
    }

    if(hayBingoFila2(carton)){
        return true;
    }

    if(hayBingoFila3(carton)){
        return true;
    }

    if(hayBingoFila4(carton)){
        return true;
    }

    if(hayBingoFila5(carton)){
        return true;
    }

    return false;
}

function hayBingoFila1(carton){
    var cont= 0;
    if($("#square0"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square0"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square1"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square1"+"carton"+carton).html())!=(-1))
            cont++;
    }
    if($("#square2"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square2"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square3"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square3"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square4"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square4"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if(cont == 5)
        return true;
    else
        return false;
}

function hayBingoFila2(carton){
    var cont= 0;
    if($("#square5"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square5"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square6"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square6"+"carton"+carton).html())!=(-1))
            cont++;
    }
    if($("#square7"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square7"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square8"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square8"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square9"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square9"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if(cont == 5)
        return true;
    else
        return false;
}

function hayBingoFila3(carton){
    var cont= 0;
    if($("#square10"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square10"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square11"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square11"+"carton"+carton).html())!=(-1))
            cont++;
    }
    if($("#square12"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square12"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square13"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square13"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if(cont == 4)
        return true;
    else
        return false;
}

function hayBingoFila4(carton){
    var cont= 0;
    if($("#square14"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square14"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square15"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square15"+"carton"+carton).html())!=(-1))
            cont++;
    }
    if($("#square16"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square16"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square17"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square17"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square19"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square18"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if(cont == 5)
        return true;
    else
        return false;
}

function hayBingoFila5(carton){
    var cont= 0;
    if($("#square19"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square19"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square20"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square20"+"carton"+carton).html())!=(-1))
            cont++;
    }
    if($("#square21"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square21"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square22"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square22"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if($("#square23"+"carton"+carton).css("backgroundColor")=="rgb(52, 94, 155)"){
        if (cantados.indexOf($("#square23"+"carton"+carton).html())!=(-1))
            cont++;
    }

    if(cont == 5)
        return true;
    else
        return false;
}