script.js
// ======================================
// PORTAFOLIO ISAAC DAVID SARKAR MACHADO
// script.js
// ======================================

// ---------- Contadores animados ----------

function animarContador(id, objetivo, velocidad) {

    let contador = document.getElementById(id);

    if (!contador) return;

    let numero = 0;

    const intervalo = setInterval(() => {

        numero++;

        contador.textContent = numero;

        if (numero >= objetivo) {

            clearInterval(intervalo);

        }

    }, velocidad);

}

window.addEventListener("load", () => {

    animarContador("anios", 8, 150);

    animarContador("convocatorias", 2, 350);

    animarContador("equipos", 4, 250);

});

// ---------- Fondo interactivo ----------

document.addEventListener("mousemove", (e) => {

    let x = e.clientX / window.innerWidth * 100;

    let y = e.clientY / window.innerHeight * 100;

    document.body.style.background =

`radial-gradient(circle at ${x}% ${y}%,
#6fe8ff,
#0a5d87,
#04253f,
#021220)`;

});

// ---------- Hover 3D para tarjetas ----------

const tarjetas = document.querySelectorAll(

".logro, .stat, .objetivo-card, .contenido"

);

tarjetas.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotX = -(y - rect.height / 2) / 18;

        const rotY = (x - rect.width / 2) / 18;

        card.style.transform =

`perspective(900px)
 rotateX(${rotX}deg)
 rotateY(${rotY}deg)
 scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

"perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

});

// ---------- Aparición al hacer scroll ----------

const elementos = document.querySelectorAll(

".glass,.evento,.logro,.stat,.foto,.objetivo-card,.frase"

);

const mostrar = () => {

    elementos.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(60px)";

    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", mostrar);

mostrar();

// ---------- Botón volver arriba ----------

const boton = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        boton.style.display = "block";

    } else {

        boton.style.display = "none";

    }

});

boton.style.display = "none";

boton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ---------- Resplandor en la imagen principal ----------

const foto = document.querySelector(".hero-imagen img");

if (foto) {

    foto.addEventListener("mousemove", (e) => {

        const rect = foto.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        foto.style.boxShadow =

`${(x-rect.width/2)/8}px
 ${(y-rect.height/2)/8}px
 40px cyan`;

    });

    foto.addEventListener("mouseleave", () => {

        foto.style.boxShadow =

"0 0 35px cyan";

    });

}

// ---------- Efecto de escritura ----------

const titulo = document.querySelector(".hero-texto h2");

if (titulo) {

    const texto = titulo.textContent;

    titulo.textContent = "";

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            titulo.textContent += texto.charAt(i);

            i++;

            setTimeout(escribir, 70);

        }

    }

    escribir();

}

// ---------- Partículas flotantes ----------

const fondo = document.querySelector(".particles");

if (fondo) {

    for (let i = 0; i < 35; i++) {

        const p = document.createElement("span");

        p.style.position = "absolute";

        p.style.width = "4px";

        p.style.height = "4px";

        p.style.background = "#72e8ff";

        p.style.borderRadius = "50%";

        p.style.left = Math.random() * 100 + "%";

        p.style.top = Math.random() * 100 + "%";

        p.style.opacity = Math.random();

        p.style.animation =

`flotar ${5 + Math.random()*8}s linear infinite`;

        fondo.appendChild(p);

    }

}

// ---------- Animación de partículas ----------

const estilo = document.createElement("style");

estilo.innerHTML = `

@keyframes flotar{

0%{

transform:translateY(0);

opacity:.2;

}

50%{

opacity:1;

}

100%{

transform:translateY(-250px);

opacity:0;

}

}

`;

document.head.appendChild(estilo);

// ---------- Mensaje de bienvenida ----------

setTimeout(() => {

    console.log(

"Bienvenido al Portafolio Deportivo de Isaac David Sarkar Machado"

    );

}, 1000);