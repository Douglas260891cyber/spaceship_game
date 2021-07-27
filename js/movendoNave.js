const acaoNave = event => {
    let tecla = event.keyCode;
    //37-esquerda 38-cima 39-direita 40-baixo espaço-32
    if (tecla === 37) {
        if (posicaoNaveLeft <= 4) {
            posicaoNaveLeft -= 0;
        } else {
            posicaoNaveLeft -= 11; //O 10 é o tamanho do deslocamento/salto;
            nave.style.left = `${posicaoNaveLeft}px`;
        }
    } else if (tecla === 39) {
        if (posicaoNaveLeft >= 690) {
            posicaoNaveLeft += 0;
        } else {
            posicaoNaveLeft += 11;
            nave.style.left = `${posicaoNaveLeft}px`;
        }
    }
    if (tecla === 38) {
        if (posicaoNaveTop <= 4) {
            posicaoNaveTop += 0
        } else {
            posicaoNaveTop -= 11;
            nave.style.top = `${posicaoNaveTop}px`;
        }
    } else if (tecla === 40) {
        if (posicaoNaveTop >= 454) {
            posicaoNaveTop += 0;
        } else {
            posicaoNaveTop += 11;
            nave.style.top = `${posicaoNaveTop}px`;
        }
    } if (tecla === 32) {
        tiro(posicaoNaveTop, posicaoNaveLeft);
    }
}

const tiro = (posicaoTiroY, posicaoTiroX) => {
    console.log("tiro");
    let divTiro = document.createElement('div');
    let atributo1 = document.createAttribute('class');
    let atributo2 = document.createAttribute('style');
    atributo1.value = 'tiro-nave';
    atributo2.value = 'top:' + posicaoTiroY + 'px'; 'left:' + posicaoTiroX + 'px';
    divTiro.setAttributeNode(atributo1);
    divTiro.setAttributeNode(atributo2);

    document.body.appendChild(divTiro); //Adiciona a div na tela

}