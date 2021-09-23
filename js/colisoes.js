function colisaoTiroInimigo(tiro) {
    let inimigos = document.getElementsByClassName('inimigo');
    let totalInimigos = inimigos.length;

    //Entender
    for (let i = 0; i < totalInimigos; i++) {
        if (inimigos[i]) {
            if (((tiro.offsetTop <= inimigos[i].offsetTop) && (tiro.offsetLeft >= inimigos[i].offsetLeft)) ||
                ((tiro.offsetTop >= inimigos[i].offsetTop) && (tiro.offsetLeft >= inimigos[i].offsetLeft))) {
                    alert('teste');
                    tiro.remove(inimigos[i].remove());  
            }

        }
    }
}

