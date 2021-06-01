const btnStart = document.querySelector('.iniciar');
const nave = document.querySelector('.nave'); 
let posicaoNaveTop = 250;
let posicaoNaveLeft = 10;  

const moveNave = event => {
    let tecla = event.keyCode;
    //37-esquerda 38-cima 39-direita 40-baixo
    if (tecla === 37) {
      posicaoNaveLeft-= 10; //O 10 é o tamanho do deslocamento/salto;
      nave.style.left = `${posicaoNaveLeft}px`;
    } else if (tecla === 39) {
      posicaoNaveLeft += 10;
      nave.style.left = `${posicaoNaveLeft}px`;
    } else if (tecla === 38) {
      posicaoNaveTop -= 10;
      nave.style.top = `${posicaoNaveTop}px`;
    } else if (tecla === 40) {
      posicaoNaveTop += 10;
      nave.style.top = `${posicaoNaveTop}px`;
    }
  }

const iniciarJogo = () => {
    nave.style.zIndex = 15; 
    btnStart.style.zIndex = -1; 
    
    //Inicializa a função que movimenta a nave.
    document.addEventListener('keydown', moveNave); 
}

btnStart.addEventListener('click', iniciarJogo);


