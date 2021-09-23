const btnStart = document.querySelector('.iniciar');
const nave = document.querySelector('.nave');
const vida = document.querySelector('.barra-vida');
const alien = document.querySelector('.alien-2');
const tamanhoTelaHor = window.innerWidth; //Recebe a largura da tela
const tamanhoTelaVert = window.innerHeight; //Recebe a altura da tela
const areaJogo = document.getElementById('area_jogo');

let posicaoNaveTop = tamanhoTelaVert / 2; //Inicializa no meio da tela
let posicaoNaveLeft = 0;
let frame = false;
let jogo = false;

const iniciarJogo = () => {
    jogo = true;
    nave.style.display = 'flex';
    btnStart.style.display = 'none';
    vida.style.display = 'flex';
    alien.style.display = 'none';
    //Inicializa a função que movimenta a nave.
    document.addEventListener('keydown', acaoNave);
    let inimigos = setInterval(criandoInimigos, 2800);
}

btnStart.addEventListener('click', iniciarJogo);



