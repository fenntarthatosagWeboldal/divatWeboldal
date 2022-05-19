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
  beolvas();

}

var zerowasteruhak = [];
var kreativruhak =  [];

function beolvas(fajlnev, tomb, jsonTomb, callback) {
  fetch("js/ruhaoldal.json")
    .then((response) => response.json())
    .then((data) => {
      data.zerowaste.forEach(elem => {
        zerowasteruhak.push(elem)
      })
    }) 



    .then((data) => {
      data.kreativ.forEach(elem => {
        kreativruhak.push(elem)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
function feltoltRuhak(tomb) {

  let txt = "";
  for (let i = 0; i < tomb.length; i++) {
    txt += `<div class = "kepDiv" style="background-image: url(${tomb[i].eleresiUt});"><h3 class="nev">${tomb[i].alkotoNev}</h3></div>`
  }
  ID("content").innerHTML = txt; 

}

function slideshow(){
  
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