function criandoInimigos() {
    let inimigo = document.createElement("img");
    let posInimigoTop = parseInt(Math.random() * 455);
    
    inimigo.src = "img/foguete.gif";
    inimigo.classList.add('inimigo');

    inimigo.style.left = '1000px';
    inimigo.style.top = `${posInimigoTop}px`;

    areaJogo.appendChild(inimigo);
    moverInimigo(inimigo);
}

function moverInimigo(inimigo) {
    let remove =false;
    let intervaloInimigo = setInterval(() => {
        let posInimigoLeft = parseInt(window.getComputedStyle(inimigo).getPropertyValue('left'));
        if (posInimigoLeft >= 0) {
            inimigo.style.left = `${posInimigoLeft -= 4}px`;
        }
        else if(posInimigoLeft <= 0){
           inimigo.remove();
           remove = true;
           return criandoInimigos();
        }
    }, 30);
}