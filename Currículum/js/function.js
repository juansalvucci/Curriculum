document.querySelector("#botones").addEventListener("click", (evt) => {
  if (!evt.target.matches("a")) return;

  const target = evt.target.id;

  if (target === "boton1") {
    resetColor();
    document.getElementById("boton1").style.backgroundColor = "#55D3BF";
  }
  if (target === "boton2") {
    resetColor();
    document.getElementById("boton2").style.backgroundColor = "#55D3BF";
  }
  if (target === "boton3") {
    resetColor();
    document.getElementById("boton3").style.backgroundColor = "#55D3BF";
  }
  if (target === "boton4") {
    resetColor();
    document.getElementById("boton4").style.backgroundColor = "#55D3BF";
  }
  if (target === "boton5") {
    resetColor();
    document.getElementById("boton5").style.backgroundColor = "#55D3BF";
  }
});

document.querySelector("#secciones").addEventListener("mouseover", (evt) => {
  if (!evt.target.matches("section")) return;
  const target = evt.target.id;
  if (target === "home") {
    resetColor();
  }
  if (target === "personal") {
    resetColor();
    document.getElementById("boton1").style.backgroundColor = "#55D3BF";
  }
  if (target === "academicos") {
    resetColor();
    document.getElementById("boton2").style.backgroundColor = "#55D3BF";
  }
  if (target === "habilidades") {
    resetColor();
    document.getElementById("boton3").style.backgroundColor = "#55D3BF";
  }
  if (target === "experiencia") {
    resetColor();
    document.getElementById("boton4").style.backgroundColor = "#55D3BF";
  }
  if (target === "contacto") {
    resetColor();
    document.getElementById("boton5").style.backgroundColor = "#55D3BF";
  }
});

document.querySelector("#secciones").addEventListener("click", (evt) => {
  if (!evt.target.matches("section")) return;
  const target = evt.target.id;
  if (target === "home") {
    window.location.href = "#home";
  }
  if (target === "personal") {
    window.location.href = "#personal";
  }
  if (target === "academicos") {
    window.location.href = "#academicos";
  }
  if (target === "habilidades") {
    window.location.href = "#habilidades";
  }
  if (target === "experiencia") {
    window.location.href = "#experiencia";
  }
  if (target === "contacto") {
    window.location.href = "#contacto";
  }
});

document.getElementById("homeIcon").addEventListener("click", function () {
  resetColor();
});

function resetColor() {
  const collection = document.getElementsByClassName("boton");
  for (let index = 0; index < collection.length; index++) {
    collection[index].style.backgroundColor = "antiquewhite";
  }
}

document.getElementById("botonInfo").addEventListener("click", function () {
  document.getElementById("info").style.display = "block";
});

document.getElementById("botonCierre").addEventListener("click", function () {
  document.getElementById("info").style.display = "none";
});
