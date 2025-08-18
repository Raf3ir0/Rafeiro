// --- Configurações ---
const capitulos = [
  {
    titulo: "0x1: Sol e a Lua, pt 1",
    paginas: [
      "imagen/pagina1.png",
      "imagen/pagina2.png",
      "imagen/pagina3.png",
      "imagen/pagina4.png",
      "imagen/pagina5.png",
      "imagen/pagina6.png",
      "imagen/pagina7.png",
      "imagen/pagina8.png",
      "imagen/pagina9.png",
      "imagen/pagina10.png",
      "imagen/pagina11.png",
      "imagen/pagina12.png",
      "imagen/pagina13.png",
      "imagen/pagina14.png",
      "imagen/pagina15.png",
      "imagen/pagina16.png",
      "imagen/pagina17.png",
      "imagen/pagina18.png",
      "imagen/pagina19.png",
      "imagen/pagina20.png",
      "imagen/pagina21.png",
      "imagen/pagina22.png",
      "imagen/pagina23-24.png",
      "imagen/pagina25-26.png"
    ]
  },
  {
    titulo: "0x2: Sol e a Lua, pt 2",
    paginas: [
      "imagen/pagina27.png",
      "imagen/pagina28.png"
      // Adiciona mais conforme necessário
    ]
  },
  {
    titulo: "0x3: Cidade Terramoto, pt 1",
    paginas: [
      "imagen/pagina29.png"
    ]
  },
  {
    titulo: "0x4: Cidade Terramoto, pt 2",
    paginas: [
      "imagen/pagina30.png"
    ]
  }
];

let capAtual = 0;

// --- Elementos ---
const tituloEl = document.querySelector(".chapter-title");
const subtituloEl = document.querySelector(".chapter-subtitle");
const paginasDiv = document.getElementById("paginas");
const btnAnterior = document.getElementById("cap-anterior");
const btnSeguinte = document.getElementById("cap-seguinte");

// --- Funções ---
function mostrarCapitulo(num) {
  if (num < 0) num = 0;
  if (num >= capitulos.length) num = capitulos.length - 1;
  capAtual = num;

  // Atualiza título e subtítulo
  const [titulo, subtitulo] = capitulos[capAtual].titulo.split(":");
  tituloEl.textContent = titulo.trim();
  subtituloEl.textContent = subtitulo ? subtitulo.trim() : "";

  // Limpa páginas antigas
  paginasDiv.innerHTML = "";

  // Adiciona todas as páginas do capítulo
  capitulos[capAtual].paginas.forEach((imgPath, index) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.alt = `Página ${index + 1}`;
    paginasDiv.appendChild(img);
  });

  // Atualiza botões
  btnAnterior.disabled = (capAtual === 0);
  btnSeguinte.disabled = (capAtual === capitulos.length - 1);

  btnAnterior.textContent = capAtual > 0 ? `← ${capitulos[capAtual - 1].titulo}` : "Anterior";
  btnSeguinte.textContent = capAtual < capitulos.length - 1 ? `${capitulos[capAtual + 1].titulo} →` : "Próximo";
}

// --- Eventos ---
btnAnterior.addEventListener("click", () => mostrarCapitulo(capAtual - 1));
btnSeguinte.addEventListener("click", () => mostrarCapitulo(capAtual + 1));

// --- Inicializa ---
mostrarCapitulo(capAtual);
