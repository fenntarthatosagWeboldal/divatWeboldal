function beolvas(fajlnev, tomb, jsonTomb, callback) {
  fetch("js/" + fajlnev)
    .then((response) => response.json())
    .then((data) => {
      data[jsonTomb].forEach(elem => {
        tomb.push(elem)
      })
      callback(tomb)
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
  atad(tomb)
}
function atad(ruhaTomb) {
  let tomb = Class("kepDiv")
  localStorage.setItem("aktualis", JSON.stringify({ "eleresiUt": "foKepek/zerowaste/arokszallasi.jpg", "azon": "1", "alkotoNev": "Árokszállási Renáta Andrea", "fotos": "", "Model": "A Modell: A tervező.", "kepek": ["arokszallasi/1_kicsi", "arokszallasi/2_kicsi", "arokszallasi/3_kicsi"], "Leiras": "A ruhát a nyári strandszezonra terveztem, formáját tekintve egyszerű, fürdőruha fölé felvehető lenge ruha. Az anyagmaradékból pedig fejkendő készült a Nap erős sugárzása ellen. A ruha Árokszállási Renáta munkája." }))

  ruhaoldalminden()
  for (let i = 0; i < tomb.length; i++) {
    tomb[i].addEventListener("click", function () {
      localStorage.setItem("aktualis", JSON.stringify(ruhaTomb[i]))
      ID("Slideshow").scrollIntoView({ behavior: 'smooth', block: 'end' })
      ruhaoldalminden();
    })

  }
}

