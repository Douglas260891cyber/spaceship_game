const moveNave = event => {
    let tecla = event.keyCode;
    //37-esquerda 38-cima 39-direita 40-baixo espaço-32
    if (tecla === 37) {
        if (posicaoNaveLeft <= 4) {
            posicaoNaveLeft -= 0;
        } else {
            posicaoNaveLeft -= 10; //O 10 é o tamanho do deslocamento/salto;
            nave.style.left = `${posicaoNaveLeft}px`;
        }
    } else if (tecla === 39) {
        if (posicaoNaveLeft >= 690) {
            posicaoNaveLeft += 0;
        } else {
            posicaoNaveLeft += 10;
            nave.style.left = `${posicaoNaveLeft}px`;
        }
    }
    if (tecla === 38) {
        if (posicaoNaveTop <= 4) {
            posicaoNaveTop += 0
        } else {
            posicaoNaveTop -= 10;
            nave.style.top = `${posicaoNaveTop}px`;
        }
    } else if (tecla === 40) {
        if (posicaoNaveTop >= 454) {
            posicaoNaveTop += 0;
        } else {
            posicaoNaveTop += 10;
            nave.style.top = `${posicaoNaveTop}px`;
        }
    }
}

const tiro = () => {
    if (tecla === 32) {
        //BARRA DE ESPAÇO => ATIRA
    }
}