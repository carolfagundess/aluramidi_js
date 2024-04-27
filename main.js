function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento  && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado");
  }
}

const listaTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaTeclas.length; contador++) {
  const tecla = listaTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function (event) {
    console.log(event.code);
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.remove("ativa");
    }
  };
}
