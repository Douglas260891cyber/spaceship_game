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
    }

    if (tecla === 32) {
        criaTiro();
    }
}

const criaTiro = () => {
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

        aliens.forEach(alien => {
            if(colisaoTiroInimigo(laser, alien)){
                alien.src = 'img/explosao.gif';
                alien.classList.remove('alien');
                alien.classList.add('dead-alien');
            }
        });

        if (posicaoHorizontal >= 640) {
            laser.remove();
        } else {
            laser.style.left = `${posicaoHorizontal + 8}px`;
        }
    }, 10);
}

const createAliens = () => {
    alert('alien criado');
    let newAlien = document.createElement('img');
    let alienSprite = Math.floor(Math.random() * inimigos.length);
    newAlien.src = alienSprite;
    newAlien.classList.add('alien') //Add uma classe/tag com o nome 'inimigo'.
    newAlien.classList.add('alien-tansacao') //Animação para quando o inimigo for atingido.

    newAlien.style.left = '370px';
    newAlien.style.top = `${Math.floor(Math.random() * 370) + 30}`;
    areaJogo.appendChild(newAlien);
    moverAlien(newAlien);
}

const moverAlien = (alien) => {
    let moveAlienInterval = setInterval(() => {
        let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
        if (xPosition <= 50) {
            if (Array.from(alien.classList).includes('dead-alien')) {
                alien.remove();
            } else {
                //gameOver
            }
        } else {
            alien.style.left = `${xPosition - 4}px`;
        }
    }, 30);
}

const colisaoTiroInimigo = (laser, alien) => {
    let laserLeft = parseInt(laser.style.left);
    let laserTop = parseInt(laser.style.top);
    let laserBottom = laserTop - 20;
    let alienLeft = parseInt(laser.style.left);
    let alienTop = parseInt(laser.style.top);
    let alienBottom = alienTop - 30;

    if (laserLeft != 340 && laserLeft + 40 >= alienLeft) {
        if (laserTop <= inimigoTop && laserTop >= inimigoBottom) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}