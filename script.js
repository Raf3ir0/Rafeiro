// Lista de capítulos
const capitulos = [
  "0x1: Sol e a Lua, pt 1",
  "0x2: Sol e a Lua, pt 2",
  "0x3: Cidade Terramoto, pt 1",
  "0x4: Cidade do Terramoto, pt 2"
];

// Página inicial de cada capítulo (corresponde ao id do <img>)
const paginaInicialCap = [1, 6, 11, 16];

let capAtual = 0;

const btnCapAnterior = document.getElementById("cap-anterior");
const btnCapSeguinte = document.getElementById("cap-seguinte");
const titulo = document.querySelector(".chapter-title");
const subtitulo = document.querySelector(".chapter-subtitle");

function mostrarCapitulo(num) {
    if (num < 0) num = 0;
    if (num >= capitulos.length) num = capitulos.length - 1;
    capAtual = num;

    // Atualiza título e subtítulo
    titulo.textContent = capitulos[capAtual].split(":")[0];
    subtitulo.textContent = capitulos[capAtual].split(":")[1] || "";

    // Desabilita botões
    btnCapAnterior.disabled = (capAtual === 0);
    btnCapSeguinte.disabled = (capAtual === capitulos.length - 1);

    // Scroll para a página inicial do capítulo
    const paginaId = `pagina${paginaInicialCap[capAtual]}`;
    const elementoPagina = document.getElementById(paginaId);
    if (elementoPagina) {
        elementoPagina.scrollIntoView({ behavior: "smooth" });
    }
}

btnCapAnterior.addEventListener("click", () => mostrarCapitulo(capAtual - 1));
btnCapSeguinte.addEventListener("click", () => mostrarCapitulo(capAtual + 1));

// Inicializa no primeiro capítulo
mostrarCapitulo(capAtual);
