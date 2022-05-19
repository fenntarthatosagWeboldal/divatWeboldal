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


function init() {
  ruhaoldalminden();
}
var localbolkapott = localStorage.getItem("aktualis")
var aktualis = JSON.parse(localbolkapott)

function ruhaoldalminden() {

  let txt = "";
  for (let index = 0; index < aktualis.kepek.length; index++) {
    txt += `<img class='mySlides' src=ruhakepek/zerowaste/${aktualis.kepek[index]}.jpg style="width:100%">`
    console.log(txt)
  }

  txt += `<div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
  <div class="w3-left w3-hover-text-khaki" >&#10094;</div>
  <div class="w3-right w3-hover-text-khaki" >&#10095;</div>`

  ID("Slideshow").innerHTML = txt;
  txt = `<p>${aktualis.Leiras}</p>`;

  ID("leiras").innerHTML = txt;
  txt = `<h1>Tervező neve: ${aktualis.alkotoNev}</h1>`
  txt += `<h2>${aktualis.Model}</h2>`

  ID("Nevek").innerHTML = txt
  
  

  var tomb1 = Class("w3-left w3-hover-text-khaki")
  for (let index = 0; index < tomb1.length; index++) {
    tomb1[index].addEventListener("click", minus);
  }
  var tomb2 = Class("w3-right w3-hover-text-khaki");

  for (let index = 0; index < tomb2.length; index++) {
    tomb2[index].addEventListener("click", plusz);
  }

  function minus(){
    showDivs(slideIndex += -1);
  }
  function plusz(){
    showDivs(slideIndex += 1);
  }


  var slideIndex = 1;
  showDivs(slideIndex);

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
  }
}






function slideShow() {

}