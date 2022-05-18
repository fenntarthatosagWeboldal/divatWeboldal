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
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit1);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit2);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit3);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit4);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit5);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit6);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit7);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit8);
  beolvas(cikkekTomb, "js/cikkek.json", megjelenit9);
}

function megjelenit1() {
  const tarolo = ID("cikk1");
  let txt = "";
  for (let index = 0; index < 3; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo.innerHTML = txt
}
function megjelenit2() {
  const tarolo2 = ID("cikk2");
  let txt = "";
  for (let index = 3; index < 6; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo2.innerHTML = txt
}
function megjelenit3() {
  const tarolo3 = ID("cikk3");
  let txt = "";
  for (let index = 6; index < 7; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo3.innerHTML = txt
}
function megjelenit4() {
  const tarolo4 = ID("cikk4");
  let txt = "";
  for (let index = 7; index < 19; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo4.innerHTML = txt
}
function megjelenit5() {
  const tarolo5 = ID("cikk5");
  let txt = "";
  for (let index = 19; index < 23; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo5.innerHTML = txt
}
function megjelenit6() {
  const tarolo6 = ID("cikk6");
  let txt = "";
  for (let index = 23; index < 32; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo6.innerHTML = txt
}
function megjelenit7() {
  const tarolo7 = ID("cikk7");
  let txt = "";
  for (let index = 32; index < 37; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo7.innerHTML = txt
}
function megjelenit8() {
  const tarolo8 = ID("cikk8");
  let txt = "";
  for (let index = 37; index < 58; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo8.innerHTML = txt
}
function megjelenit9() {
  const tarolo9 = ID("cikk9");
  let txt = "";
  for (let index = 58; index < 74; index++) {
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
        txt += `<img src="${cikkekTomb[index][key]}"alt="" width=100>`
      }
      else if (key.includes("felsorolas")) {
        console.log(cikkekTomb[index][key])
        txt += `<ul class="cikkekFels">`
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
      else if(key.includes("link5")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/ruhak-masodkezbol-legjobb-lelohelyek/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link6")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/2019/09/03/hasznalt-ruha-szeptember-magyarorszag-turkalo/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link7")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/fenntarthato-es-etikus-magyar-tervezok-alkotok/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }
      else if(key.includes("link8")){
        txt += `<div class="bekezdes"><a href="https://holyduck.hu/hol-vasaroljak/etikus-divat-magyar-webshop/" target="_blank">${cikkekTomb[index][key]}</a></div>`;
      }

    }
  }
  tarolo9.innerHTML = txt
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
