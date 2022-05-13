window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function Class(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function init() {
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit);

}

function megjelenit() {
  const tarolo = $("article")[0];
  let txt = "";
  for (let index = 0; index < cikkekTomb.length; index++) {
    for (const key in cikkekTomb[index]) {
      if (key.includes("focim")) {
        txt += `<h1>${cikkekTomb[index][key]}</h1>`
      }
      else if (key.includes("alcim")) {
        txt += `<h2>${cikkekTomb[index][key]}</h2>`
      }
      else if (key.includes("bekezdes")) {
        txt += `<div class="bekezdes">${cikkekTomb[index][key]}</div>`
      }
      else if (key.includes("kep")) {
        txt += `<img src="${cikkekTomb[index][key]}"alt="">`
      }
      else if (key.includes("felsorolas")) {
        txt += `<ul>`
        txt += `<li>${cikkekTomb[index][key]}</li>`
        txt += `</ul>`
      }
      else if (key.includes("szerzo")) {
        txt += `<p>${cikkekTomb[index][key]}</p>`;
      }

    }


    // txt+=`<div class="alcim">${cikkekTomb[index].alcim}</div>`
    // txt+=`<div class="bekezdes">${cikkekTomb[index].bekezdes}</div>`
    // txt+=`<div class="kep">${cikkekTomb[index].kep}</div>`
    // txt+=`<div class="felsorolas">${cikkekTomb[index].felsorolas}</div>`
    // txt+=`<div class="szerzo">${cikkekTomb[index].szerzo}</div>`
  }
  tarolo.innerHTML = txt
}

const cikkekTomb = [];

function beolvas(tomb, fajlnev, callbackfv) {
  fetch(fajlnev)
    .then(valasz => valasz.json())
    .then(adat => {
      console.log(adat)
      console.log(adat.cikkek);
      adat.cikkek.forEach(cikk => {
        console.log(cikk)
        tomb.push(cikk)
      });
      callbackfv()
      //console.log(tomb)
    })
    .catch(err => { console.log(err) });
}
