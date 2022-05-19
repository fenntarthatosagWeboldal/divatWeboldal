window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
function ß(elem) {
    return document.querySelector(elem);
}
function Class(elem) {
    return document.getElementsByClassName(elem);
}


function init(){

}
var localbolkapott = localStorage.getItem("aktualis")
var aktualis = JSON.parse(localbolkapott)

var zerowasteruhak = [];
var kreativruhak =  [];



function feltoltRuhak(tomb) {

  let txt = "";
  for (let index = 0; index < aktualis.kepek.length; index++) {
    txt += `<img class='mySlides' src=ruhakepek/zerowaste/${aktualis.kepek[index]}.jpg>`
    }
  ID("Slideshow").innerHTML = txt; 
  txt = `<p>${aktualis.leiras}</p>`;
  ID("leiras").innerHTML = txt;
  txt = `<h1>Tervező neve: ${aktualis.alkotoNev}</h1>`
  txt += `<h2>${aktualis.Model}</h2>`
  ID("Nevek").innerHTML = txt

}





function slideShow(){
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
}