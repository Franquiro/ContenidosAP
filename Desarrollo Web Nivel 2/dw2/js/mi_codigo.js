//Parte 1
/*var indice_pregunta_actual = 0;
var total_puntos = 0;
const nombre_alumno = "Francisco Quiroga y Medus";
const maximo_pregutnas_por_jugada = 10;
const puntos_resultado_bien = 25;

console.log("Indice de la pregunta actual:\t"+indice_pregunta_actual);
console.log("Puntaje total:\t"+total_puntos);
console.log("Nombre:\t"+nombre_alumno);
console.log("Preguntas:\t"+maximo_pregutnas_por_jugada);
console.log("Puntos por pregunta:\t"+puntos_resultado_bien);*/

//PARTE 2
/*var indice_pregunta_actual = 0;
var total_puntos = 0;
const nombre_alumno = "Francisco Quiroga y Medus";
const maximo_pregutnas_por_jugada = 10;
const puntos_resultado_bien = 25;

if(total_puntos >= puntos_resultado_bien) console.log("Muy bien!");
else  console.log("La próxima será...");
console.log("Puntaje total:\t"+total_puntos);*/

//PARTE 3
/*var indice_pregunta_actual = 0;
var total_puntos = 0;
const nombre_alumno = "Francisco Quiroga y Medus";
const maximo_pregutnas_por_jugada = 10;
const puntos_resultado_bien = 25;

function mostrarResultado(){
  if(total_puntos >= puntos_resultado_bien) console.log("Muy bien!");
  else  console.log("La próxima será...");
  console.log("Puntaje total:\t"+total_puntos);
}
function obtenerSiguientePregunta(){
  indice_pregunta_actual++;
  return indice_pregunta_actual;
}
function mostrarPregunta(pregunta){
  console.log("La pregunta actual es:");
  console.log(pregunta);
}

var siguiente_pregunta =obtenerSiguientePregunta();
mostrarPregunta(siguiente_pregunta);
mostrarResultado();*/


//PARTE 4
/*
var indice_pregunta_actual = 0;
var total_puntos = 0;
const nombre_alumno = "Francisco Quiroga y Medus";
const maximo_pregutnas_por_jugada = 10;
const puntos_resultado_bien = 25;

function mostrarResultado(){
  if(total_puntos >= puntos_resultado_bien){var acierto = "Muy Bien!";}
  else{var acierto = "La próxima será...";}
  console.log(acierto+" "+acierto.toUpperCase());
  console.log("El mensaje anterior tiene "+acierto.length+" caracteres");
  console.log("Puntos totales hasta el momento:\t"+total_puntos);
}
function obtenerSiguientePregunta(){
  indice_pregunta_actual++;
  return indice_pregunta_actual;
}
function mostrarPregunta(pregunta){
  console.log(pregunta+")¿Pregunta?");
}

var siguiente_pregunta =obtenerSiguientePregunta();
mostrarPregunta(siguiente_pregunta);
mostrarResultado();*/

//PARTE 5
/*var indice_pregunta_actual = 0;
var total_puntos = 0;
const nombre_alumno = "Francisco Quiroga y Medus";
const maximo_pregutnas_por_jugada = 10;
const puntos_resultado_bien = 25;

function mostrarResultado(){
  if(total_puntos >= puntos_resultado_bien){var acierto = "Muy Bien!";}
  else{var acierto = "La próxima será...";}
  console.log(acierto+" "+acierto.toUpperCase());
  console.log("El mensaje anterior tiene "+acierto.length+" caracteres");
  console.log("Puntos totales hasta el momento:\t"+total_puntos);
}
function obtenerSiguientePregunta(){
  indice_pregunta_actual++;
  return indice_pregunta_actual;
}
function mostrarPregunta(pregunta){
  console.log(pregunta+")¿Pregunta?");
}

function iniciarJuego(){
  document.querySelector("#pantalla-inicio").classList.add("d-none");
  document.querySelector("nav").classList.add("d-none");
  document.querySelector("#header").classList.remove("d-none");
  document.querySelector("#pantalla-juego").classList.remove("d-none");
  indice_pregunta_actual=0;
  total_puntos=0;
  mostrarPregunta(indice_pregunta_actual);
}

var siguiente_pregunta =obtenerSiguientePregunta();
mostrarPregunta(siguiente_pregunta);
mostrarResultado();
var boton_inicio =document.querySelector("#inicio-boton-jugar");
boton_inicio.addEventListener("click",iniciarJuego);
//if(!document.querySelector("#pantalla-acerca_de").classList.contains("d-none"))
 //  console.log(document.querySelector(".nombre-alumno").innerHTML = nombre_alumno);
*/

//PARTE 6
var indice_pregunta_actual = 0;
var total_puntos = 0;
var opciones = document.querySelectorAll(".trivia-opcion");
const nombre_alumno = "Francisco Quiroga y Medus";
const maximo_pregutnas_por_jugada = 4;
const puntos_resultado_bien = 25;
const puntosAprobado = puntos_resultado_bien*maximo_pregutnas_por_jugada*0.6;


function mostrarResultado(){
  document.querySelector("#pantalla-juego").classList.add("d-none");
  document.querySelector("#pantalla-resultado").classList.remove("d-none");
  document.querySelector("#resultado-puntos").innerHTML = String(total_puntos);
  if(total_puntos >= puntosAprobado){
    //crack
  }
  else{
    //choto
  }
  /*if(total_puntos >= puntos_resultado_bien){var acierto = "Muy Bien!";}
  else{var acierto = "La próxima será...";}
  console.log(acierto+" "+acierto.toUpperCase());
  console.log("El mensaje anterior tiene "+acierto.length+" caracteres");
  console.log("Puntos totales hasta el momento:\t"+total_puntos);
*/}

function obtenerSiguientePregunta(){
  indice_pregunta_actual++;
if(indice_pregunta_actual <maximo_pregutnas_por_jugada){
  reiniciarInputs();
  mostrarPregunta(indice_pregunta_actual);
}
else{
  mostrarResultado();
}

}

function mostrarPregunta(pregunta){
    document.querySelector("#pregunta-numero").innerText = String(pregunta+1)+")";
    document.querySelector("#pregunta-texto").innerText = preguntas[pregunta].pregunta;
    document.querySelector("#pregunta-imagen").setAttribute("src",preguntas[pregunta].imagen_src);
    for(var i =0; i<3 ; i++){
      opciones[i].querySelector("label").innerText = preguntas[pregunta].opciones[i];
    }
    document.querySelector("#boton-verificar").addEventListener("click",verificarRespuesta);
}

function iniciarJuego(){
  document.querySelector("#pantalla-inicio").classList.add("d-none");
  document.querySelector("nav").classList.add("d-none");
  document.querySelector("#header").classList.remove("d-none");
  document.querySelector("#pantalla-juego").classList.remove("d-none");
  indice_pregunta_actual=0;
  total_puntos=0;
  reiniciarInputs();
  mostrarPregunta(indice_pregunta_actual);
}

function verificarRespuesta(){
  for(var i = 0; i<3; i++){
    if(opciones[i].querySelector("input").checked){
      if(opciones[i].querySelector("label").innerText == preguntas[indice_pregunta_actual].respuesta_correcta){
        document.querySelector("#pregunta-imagen").setAttribute("src","img/feedback-bien.jpg");
        opciones[i].style.backgroundColor = '#009900';
        total_puntos += puntos_resultado_bien;
      }
      else{
        opciones[i].style.backgroundColor='#FF0000';
        document.querySelector("#pregunta-imagen").setAttribute("src","img/feedback-mal.jpg");
        for(var j=0;j<3;j++){
          if(opciones[j].querySelector("label").innerText == preguntas[indice_pregunta_actual].respuesta_correcta){
            opciones[j].style.backgroundColor = '#009900';
            break;
          }
        }
      }
    }
  }
  document.querySelector("#boton-verificar").classList.add("d-none");
  document.querySelector("#boton-siguiente").classList.remove("d-none");
  document.querySelector("#boton-siguiente").addEventListener("click",obtenerSiguientePregunta);
}

function reiniciarInputs(){

  for (var i =0 ; i<3 ; i++){
    opciones[i].querySelector("input").checked = false;
    opciones[i].style.backgroundColor = "#FFF";
  }
  document.querySelector("#boton-verificar").classList.remove("d-none");
  document.querySelector("#boton-siguiente").classList.add("d-none");
}

var boton_inicio =document.querySelector("#inicio-boton-jugar");
boton_inicio.addEventListener("click",iniciarJuego);
