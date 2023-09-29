const parrafoId = document.getElementById("parrafo-dos");

// const elementosClassName = document.getElementsByClassName("destacado");
// const parrafosTagName = document.getElementsByTagName("p");

const parrafo = document.querySelector("footer p.destacado");

const parrafos = document.querySelectorAll("section p");

// ---

const main = document.querySelector("main");

// const section = document.createElement("section");
// const h2 = document.createElement("h2");
// const h2Texto = document.createTextNode("Sección 2");
// const p = document.createElement("p");
// const pTexto = document.createTextNode("Lorem, ipsum dolor.");

// h2.appendChild(h2Texto);
// p.appendChild(pTexto);

// section.appendChild(h2);
// section.appendChild(p);

// main.appendChild(section);

// document.write("<p>Algo</p>");

// ---

const secciones = [
  {
    h2: "Sección 2",
    p: "1. Lorem, ipsum dolor.",
    foto: "https://picsum.photos/100/50?random=1",
  },
  {
    h2: "Sección 3",
    p: "2. Lorem, ipsum dolor.",
    foto: "https://picsum.photos/100/50?random=2",
  },
  {
    h2: "Sección 4",
    p: "3. Lorem, ipsum dolor.",
    foto: "https://picsum.photos/100/50?random=3",
  },
];

secciones.forEach((seccion) => {
  const html = `
        <section>
            <h2>${seccion.h2}</h2>
            <p>${seccion.p}</p>
            <img src="${seccion.foto}">
        </section>
    `;

  main.innerHTML += html;
});

// ---

const h1 = document.querySelector("h1");

// h1.onclick = () => {
//   console.log("Click en h1 uno");
// };

// h1.onclick = () => {
//   console.log("Click en h1 dos");
// };

h1.addEventListener("click", () => {
  console.log("Click en h1 click");
});

h1.addEventListener("mouseover", () => {
  console.log("Click en h1 mouseover");
});
