
// ESTE CÓDIGO SE REFERE AO CÁLCULO E VALIDAÇÕES DO PRIMEIRO SEMESTRE!
var Checkpoints1 = document.querySelector(".Checkpoints");
var GlobalSolution1 = document.querySelector(".GlobalSolution");
var mediaSem = document.querySelector(".mediaSem h3");
var barra = document.querySelector("#barra");
var barraStyle = document.getElementById("#barra");


function CalculoSem1() {
    var media1Sem = (Checkpoints1.value * 0.4) + (GlobalSolution1.value * 0.6);
    mediaSem.innerHTML = media1Sem.toFixed(1);
    barra.style.width = media1Sem + "%";

    if (media1Sem > 60) {
        barra.style.backgroundColor = "chartreuse";
        mediaSem.setAttribute("style", "color: chartreuse");
    }

    if (media1Sem < 59 & media1Sem > 40) {
        barra.style.backgroundColor = "orange";
        mediaSem.setAttribute("style", "color: orange");
    }

    if (media1Sem < 39) {
        barra.style.backgroundColor = "red";
        mediaSem.setAttribute("style", "color: red");
    }
}
// ESTE CÓDIGO SE REFERE AO CÁLCULO E VALIDAÇÕES DO PRIMEIRO SEMESTRE!



// ESTE CÓDIGO SE REFERE AO CÁLCULO E VALIDAÇÕES DO SEGUNDO SEMESTRE!
var Checkpoints2 = document.querySelector(".Checkpoints2");
var GlobalSolution2 = document.querySelector(".GlobalSolution2");
var mediaSem2 = document.querySelector(".mediaSem2 h3");
var barra2 = document.querySelector("#barra2");
var barraStyle2 = document.getElementById("#barra2");


function CalculoSem2() {
    var media2Sem = (Checkpoints2.value * 0.4) + (GlobalSolution2.value * 0.6);
    mediaSem2.innerHTML = media2Sem.toFixed(1);
    barra2.style.width = media2Sem + "%";

    if (media2Sem > 60) {
        barra2.style.backgroundColor = "chartreuse";
        mediaSem2.setAttribute("style", "color: chartreuse");
    }

    if (media2Sem < 59 & media2Sem > 40) {
        barra2.style.backgroundColor = "orange";
        mediaSem2.setAttribute("style", "color: orange");
    }

    if (media2Sem < 39) {
        barra2.style.backgroundColor = "red";
        mediaSem2.setAttribute("style", "color: red");
    }
    
}
// ESTE CÓDIGO SE REFERE AO CÁLCULO E VALIDAÇÕES DO SEGUNDO SEMESTRE!


// ESTE CÓDIGO SE REFERE AO CÁLCULO DA MÉDIA FINAL

function CalcMediaFinal () {
    var media1Sem = (Checkpoints1.value * 0.4) + (GlobalSolution1.value * 0.6);
    var media2Sem = (Checkpoints2.value * 0.4) + (GlobalSolution2.value * 0.6);
    var MediaFinal = (media1Sem * 0.4) + (media2Sem * 0.6);
    var circle = document.getElementById("circleProgress");
    var numero = document.querySelector(".box h1");
    var resultado = document.querySelector(".Resultados h2");


    numero.innerHTML = MediaFinal.toFixed(1);

    circle.style.strokeDashoffset = 754 - (754 * MediaFinal) /100
    
    if (MediaFinal > 60) {
        circle.style.stroke = "chartreuse";
        numero.setAttribute("style", "color : chartreuse");
        resultado.innerHTML = "Você foi aprovado!";
        resultado.setAttribute("style", "color : chartreuse");
    }

    if (MediaFinal < 59 & MediaFinal > 40) {
        circle.style.stroke = "orange";
        numero.setAttribute("style", "color : orange");
        resultado.innerHTML = "Você está de recuperação!";
        resultado.setAttribute("style", "color : orange");
    }

    if (MediaFinal < 39) {
        circle.style.stroke = "red";
        numero.setAttribute("style", "color : red");
        resultado.innerHTML = "Você não foi aprovado!";
        resultado.setAttribute("style", "color : red");
    }
    
    alert(MediaFinal);

    
}

