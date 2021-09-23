let laserCriado = false;

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
        if (posicaoNaveTop >= 550) {
            posicaoNaveTop += 0;
        } else {
            posicaoNaveTop += 11;
            nave.style.top = `${posicaoNaveTop}px`;
        }
    }

    if (tecla === 32) {
        criaTiro();
    }
}

const criaTiro = () => {
    laserCriado = true;
    let laser = elementoTiroCriado();
    areaJogo.appendChild(laser);
    moveTiro(laser);
}

const elementoTiroCriado = () => {
    let tiroHorizontal = parseInt(window.getComputedStyle(nave).getPropertyValue('left'));
    let tiroVertical = parseInt(window.getComputedStyle(nave).getPropertyValue('top'));
    let novoTiro = document.createElement('img');
    novoTiro.src = 'img/disparo.png';
    novoTiro.classList.add('tiro-nave');
    novoTiro.style.left = `${tiroHorizontal - 580}px`;
    novoTiro.style.top = `${tiroVertical}px`;

    return novoTiro;
}

const moveTiro = laser => {
    let laserIntervalo = setInterval(() => {
        let posicaoHorizontal = parseInt(laser.style.left);
        let aliens = document.querySelectorAll('.alien');
        if (posicaoHorizontal >= 640) {
            laser.remove();
        } else {
             laser.style.left = `${posicaoHorizontal + 8}px`;
             colisaoTiroInimigo(laser)
        }
    }, 10);
}
