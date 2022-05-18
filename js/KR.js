window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

const zwRuhak = []
const krRuhak = []
const esemenyKepek = []
for (let i = 1; i <= 54; i++) {
  esemenyKepek.push(i)
}
function init() {
  beolvas("kepek.json", krRuhak, "kreativ", feltoltRuhak)
  atad()
}
function atad() {
  let tomb = Class("kepDiv")
  for (let i = 0; i < tomb.length; i++) {
    tomb[i].addEventListener("click", atad2)
  }
}
function atad2() {
  console.log("atad2")
  let azonIndex
  for (let i = 0; i < krRuhak.length; i++) {
    if (event.target.innerHTML == krRuhak[i].alkotoNev) {
      azonIndex = i
    }
  }
  atadnivalo = i
  localStorage.setItem("azon", krRuhak[azonIndex].azon)
} 