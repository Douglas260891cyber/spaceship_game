const btnStart = document.querySelector('.iniciar');
const nave = document.querySelector('.nave');
const vida = document.querySelector('.barra-vida');
const alien = document.querySelector('.alien');
const tamanhoTelaHor = window.innerWidth; //Recebe a largura da tela
const tamanhoTelaVert = window.innerHeight; //Recebe a altura da tela

let posicaoNaveTop = tamanhoTelaVert / 2; //Inicializa no meio da tela
let posicaoNaveLeft = 10;
let frame = false;

const iniciarJogo = () => {
    nave.style.display = 'flex';
    btnStart.style.display = 'none';
    vida.style.display = 'flex';
    alien.style.display = 'none';
    //Inicializa a função que movimenta a nave.
    document.addEventListener('keydown',acaoNave);
}

btnStart.addEventListener('click', iniciarJogo);


