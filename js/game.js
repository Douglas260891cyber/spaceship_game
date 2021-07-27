const btnStart = document.querySelector('.iniciar');
const nave = document.querySelector('.nave');
const vida = document.querySelector('.barra-vida'); 
const tamanhoTelaHor = window.innerWidth; //Recebe a largura da tela
const tamanhoTelaVert = window.innerHeight; //Recebe a altura da tela

let posicaoNaveTop = tamanhoTelaVert/2; //Inicializa no meio da tela
let posicaoNaveLeft = 10; 
let frame = false;  

const iniciarJogo = () => {
    nave.style.display = 'flex'; 
    btnStart.style.display = 'none'; 
    vida.style.display = 'flex'; 
    //Inicializa a função que movimenta a nave.
    document.addEventListener('keydown', moveNave); 
    document.addEventListener('keydown', tiro); 
}

btnStart.addEventListener('click', iniciarJogo);


