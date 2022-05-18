window.addEventListener("load", init)
function ID(elem) {
    return document.getElementById(elem)
}
function Class(elem) {
    return document.getElementsByClassName(elem)
}
function $(elem) {
    return document.querySelectorAll(elem)
}
function $1(elem) {
    return document.querySelector(elem)
}
//memória -- gyerek
const kepek = [];

function memoria() {
    var txt = "<div>"
    for (let index = 0; index < kepek.length; index++) {
        txt += `<img src="${kepek[index].kepeleres}" alt="${kepek[index].kepalt}">`
    }
    txt += "</div>"
    //console.log(txt)
    ID("kecske").innerHTML = txt
}
//kép-szó párosító -- gyerek

//mozgó kép kérdésekkel -- felnőtt

//wordle -- felnőtt

//init
function init() {
    feltolt()
    mutat()
    //memoria()
}

function feltolt() {
    fetch("js/jatekok.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.memoriaj)
            data.memoriaj.forEach(elem => {
                kepek.push(elem)
            })
            console.log(kepek)
        })
        .catch((err) => {
            console.log(err)
        });
}

function mutat(){
    var divkep = Class("kepek")
    for (let i = 0; i < divkep.length; i++) {
        divkep[i].addEventListener("click", memoria)
        divkep[i].addEventListener("mouseover", hover)
        divkep[i].addEventListener("mouseout", hoverOff) 
    }
    
}

function hover(){
    event.target.className += " cursor"
}

function hoverOff(){
    event.target.className = "kepek"
}