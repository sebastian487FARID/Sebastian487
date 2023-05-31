var URLactual = window.location;
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");

switch (URLactual.pathname) {
    case "/index.html":
        m1.style.color = "#7B973F";
        break;

    case "/Inscripciones.html":
        m2.style.color = "#7B973F";
        break;

    case "/Cronograma.html":
        m3.style.color = "#7B973F";
        break;

    case "/Ganadores.html":
        m4.style.color = "#7B973F";
        break;
}

m2.style.left += 500 + "px";
m3.style.left += 700 + "px";
m4.style.left += 900 + "px";