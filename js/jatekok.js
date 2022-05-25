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
var kepek = []
const eredetikepek = []
const felforditottkepek = []

function memoria() {
    var txt = "<div class=memoriakepek>"
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 2; j++) {
            txt += `<img class="${kepek[i].kepalt}" src="${kepek[i].kepeleres}" alt="${kepek[i].kepalt}">` 
            eredetikepek.push(`kepek/kep${i + 1}.jpg`)
        }
    }
    txt += "</div>"
    console.log(txt)
    ID("fo").innerHTML = txt
}
//kép-szó párosító -- gyerek

//mozgó kép kérdésekkel -- felnőtt

//wordle -- felnőtt



function feltolt() {
    fetch("js/jatekok.json")
        .then((response) => response.json())
        .then((data) => {
            data.memoriaj.forEach(elem => {
                kepek.push(elem)
            })
            console.log(kepek)
            memoria()
            kepekElrejt()
            kepreKattintas()
        })
        .catch((err) => {
            console.log(err)
        });
}


//init
function init() {
    feltolt()
}

function kepekElrejt() {
    const kepTomb = $(".memoriakepek img")
    console.log(kepTomb)
    kepTomb.forEach(function (kepTombElem) {
        kepTombElem.src = "jatekKepek/hatter.jpg"
    });
}

function kepreKattintas() {
    const kepTomb = $(".memoriakepek img")
    kepTomb.forEach(function (kepTombElem, index) {
        kepTombElem.addEventListener("click", kepMutat)
    });
}

function kepMutat() {
    if (felforditottkepek.length < 2) {
        event.target.src = `jatekKepek/${event.target.className}.jpg`
        felforditottkepek.push(event.target.className)
        console.log(felforditottkepek)
    }
    if (felforditottkepek.length === 2) {
        ellenorzes()
        felforditottkepek.splice(0)
    }
}

function ellenorzes() {
    if (felforditottkepek[0] === felforditottkepek[1]) {
        const kepTomb = $(".memoriakepek img")
        kepTomb.forEach(function (elem) {
            if (elem.className === felforditottkepek[0]) {
                //elem.style.display = "none"
                elem.removeEventListener("click", kepMutat)
            }
        })
    }
    else {
        setTimeout(function () {
            felforditottkepek   .forEach(function (elem) {
                Class(elem).src = `jatekKepek/${event.target.className}.jpg`
            })
        }, 1000)
        const kepTomb = $(".memoriakepek img")
        kepTomb.forEach(function (elem,) {
            elem.src = "jatekKepek/hatter.jpg"
        })
    }
} 