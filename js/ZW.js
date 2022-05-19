window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

const zwRuhak = []

function init() {
  beolvas("ruhaoldal.json", zwRuhak, "zerowaste", feltoltRuhak)
}