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






// Botões de navegação
btnAnterior.addEventListener("click", () => {
    mostrarPagina(paginaAtual - 1);
});

btnSeguinte.addEventListener("click", () => {
    mostrarPagina(paginaAtual + 1);
});

// Lista de páginas
for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => mostrarPagina(i));
    listaPaginas.appendChild(btn);
}

// Alternar tema
btnTema.addEventListener("click", () => {
    body.classList.toggle("escuro");
    body.classList.toggle("claro");
    btnTema.textContent = body.classList.contains("escuro") ? "☀ Claro" : "🌙 Escuro";
});

// Inicializa
mostrarPagina(paginaAtual);
