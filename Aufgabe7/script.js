"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Interface
    function createArtikel() {
        for (let i = 0; i < Aufgabe07.artikel.length; i++) {
            if (Aufgabe07.artikel[i].kategorie == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].kategorie == 2) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //IMG
            let bildElement = document.createElement("img");
            bildElement.src = Aufgabe07.artikel[i].bild;
            document.getElementById("div" + i)?.appendChild(bildElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = Aufgabe07.artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //DESCRIPTION
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = Aufgabe07.artikel[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);
            //PREIS
            let preis = document.createElement("p");
            preis.innerHTML = Aufgabe07.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(preis);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Aufgabe07.artikel[i].preis.toString());
        }
    }
    Aufgabe07.createArtikel = createArtikel;
    //Einkaufswagen
    let summe = 0;
    let count = 0;
    let artikelCounter = 0;
    let blasenDiv = document.createElement("div");
    let cartArtikel = [];
    function handleTrolley(_event) {
        if (artikelCounter >= 0) {
            document.getElementById("warencounter")?.appendChild(blasenDiv);
        }
        artikelCounter++;
        blasenDiv.innerHTML = artikelCounter + "";
        if (_event.currentTarget?.getAttribute("preis")) {
            summe = count + parseInt(_event.currentTarget?.getAttribute("preis"));
            count = summe;
        }
        console.log(summe.toFixed(0));
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNr = parseInt(indexButton);
        cartArtikel.push(Aufgabe07.artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].name);
        localStorage.setItem("artikel_beschreibung" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].beschreibung);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());
    }
    Aufgabe07.handleTrolley = handleTrolley;
    let allCategory = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "All";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);
    let specialCategory = document.createElement("a");
    specialCategory.id = "special";
    specialCategory.innerHTML = "Specials";
    specialCategory.addEventListener("click", handleKategorie);
    document.getElementById("specialButton")?.appendChild(specialCategory);
    let shoeCategory = document.createElement("a");
    shoeCategory.id = "shoe";
    shoeCategory.innerHTML = "Shoes";
    shoeCategory.addEventListener("click", handleKategorie);
    document.getElementById("shoeButton")?.appendChild(shoeCategory);
    function handleKategorie(_event) {
        if (_event.currentTarget.getAttribute("id") == "all") {
            document.getElementById("specialsBlock").style.display = "block";
            document.getElementById("shoesBlock").style.display = "block";
            console.log("all");
        }
        else if (_event.currentTarget.getAttribute("id") == "special") {
            document.getElementById("specialsBlock").style.display = "block";
            document.getElementById("shoesBlock").style.display = "none";
            console.log("specials");
        }
        else if (_event.currentTarget.getAttribute("id") == "shoe") {
            document.getElementById("specialsBlock").style.display = "none";
            document.getElementById("shoesBlock").style.display = "block";
            console.log("shoes");
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map