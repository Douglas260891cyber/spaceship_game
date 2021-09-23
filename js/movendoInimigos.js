function criandoInimigos() {
    let inimigo = document.createElement("img");
    let posInimigoTop = parseInt(Math.random() * tamanhoTelaVert);

    inimigo.src = "img/foguete.gif";
    inimigo.classList.add('inimigo');

    inimigo.style.left = '1300px';
    inimigo.style.top = `${posInimigoTop}px`;

    areaJogo.appendChild(inimigo);
    moverInimigo(inimigo);
}

function moverInimigo(inimigo) {
    let remove = false;
    
    let intervaloInimigo = setInterval(() => {
        let posInimigoLeft = parseInt(window.getComputedStyle(inimigo).getPropertyValue('left'));
        let posInimigoTop = parseInt(window.getComputedStyle(inimigo).getPropertyValue('top'));
        if (posInimigoLeft >= 0) {
            inimigo.style.left = `${posInimigoLeft -= 4}px`;
        }
        else if (posInimigoLeft <= 0) {
            inimigo.remove();
        }
    }, 30);
}