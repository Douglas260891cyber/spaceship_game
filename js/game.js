const btnStart = document.querySelector('.iniciar');
const nave = document.querySelector('.nave');
const vida = document.querySelector('.barra-vida');
const alien = document.querySelector('.alien');
const tamanhoTelaHor = window.innerWidth; //Recebe a largura da tela
const tamanhoTelaVert = window.innerHeight; //Recebe a altura da tela
const areaJogo = document.getElementById('area_jogo');
const inimigos = ['img/alien_inimigo.gif','img/foguete_inimigo.gif','img/meteoro_2.gif'];

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
    document.addEventListener('keydown',acaoNave);
    criacaoInimigos();
}

btnStart.addEventListener('click', iniciarJogo);


