// Total de páginas (altera se necessário)
const totalPaginas = 25;
let paginaAtual = 1;

const imgPagina = document.getElementById("pagina");
const btnAnterior = document.getElementById("anterior");
const btnSeguinte = document.getElementById("seguinte");
const listaPaginas = document.getElementById("lista-paginas");
const btnTema = document.getElementById("toggle-tema");
const body = document.body;
const paginasDuplas = {
    23: "imagen/pagina23-24.png",
    24: "imagen/pagina24-25.png",
}


function mostrarPagina(num) {
    if (num < 1) num = 1;
    if (num > totalPaginas) num = totalPaginas;
    paginaAtual = num;

    // Verifica se a página é dupla
    if (paginasDuplas[paginaAtual]) {
        imgPagina.src = paginasDuplas[paginaAtual];
    } else {
        imgPagina.src = `imagen/pagina${paginaAtual}.png`;
    }
}



// Lista de capítulos (apenas texto)
const capitulos = [
  "0x1: Sol e a Lua, pt 1",
  "0x2: Sol e a Lua, pt 2",
  "0x3: Cidade Terramoto, pt 1",
  "0x4: cidade do terramoto, pt 2"
];

let capAtual = 0; // começa no primeiro capítulo

const btnAnterior = document.getElementById("cap-anterior");
const btnSeguinte = document.getElementById("cap-seguinte");
const titulo = document.querySelector(".chapter-title");
const subtitulo = document.querySelector(".chapter-subtitle");

function mostrarCapitulo(num) {
    if (num < 0) num = 0;
    if (num >= capitulos.length) num = capitulos.length - 1;
    capAtual = num;

    // Atualiza título e subtítulo
    titulo.textContent = capitulos[capAtual].split(":")[0];
    subtitulo.textContent = capitulos[capAtual].split(":")[1] || "";
    
    // Desabilita botão anterior no primeiro capítulo
    btnAnterior.disabled = (capAtual === 0);
    // Desabilita botão seguinte no último capítulo
    btnSeguinte.disabled = (capAtual === capitulos.length - 1);
}

btnAnterior.addEventListener("click", () => mostrarCapitulo(capAtual - 1));
btnSeguinte.addEventListener("click", () => mostrarCapitulo(capAtual + 1));

// Inicializa
mostrarCapitulo(capAtual);
