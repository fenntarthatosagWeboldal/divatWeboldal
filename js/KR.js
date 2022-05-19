window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

const krRuhak = []
for (let i = 1; i <= 54; i++) {
  esemenyKepek.push(i)
}
function init() {
  beolvas("ruhaoldal.json", krRuhak, "kreativ", feltoltRuhak)
}
