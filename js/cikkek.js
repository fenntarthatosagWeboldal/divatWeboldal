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
        console.log(cikkekTomb[index][key])
        txt += `<ul>`
        cikkekTomb[index][key].forEach(felsEleme => {
          txt += `<li>${felsEleme}</li>`
        });
        txt += `</ul>`
      }
      else if (key.includes("szerzo")) {
        txt += `<div class="bekezdes">${cikkekTomb[index][key]}</div>`;
      }
      else if(key.includes("link1")){
        txt += `<div class="bekezdes"><a href="https://vitafutura.hu/mit-jelent-a-fenntarthatosag/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link2")){
        txt += `<div class="bekezdes"><a href="https://www.tisztajovo.hu/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link3")){
        txt += `<div class="bekezdes"><a href="https://www.fenntarthatosagi.temahet.hu/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link4")){
        txt += `<div class="bekezdes"><a href="https://xforest.hu/oceanok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
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
        tomb.push(cikk)
      });
      callbackfv()
      //console.log(tomb)
    })
    .catch(err => { console.log(err) });
}
