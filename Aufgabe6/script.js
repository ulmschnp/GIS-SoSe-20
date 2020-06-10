"use strict";
// intaface fürs erte Kategorie
var namespace06;
(function (namespace06) {
    let luiSupJacke = {
        name: "LuisVitton Supreme Jacke",
        bild: "luisupjacke.jpg",
        beschreibung: "Wer zuerst kommt, der hats verdient",
        preis: 13.899,
        kategorie: "specials"
    };
    let luisupbag = {
        name: "LuisVitton Supreme Bag RED",
        bild: "Louis-Vuitton-Supreme.jpg",
        beschreibung: "Genug Platz für arme Studenten",
        preis: 16899,
        kategorie: "specials"
    };
    let phillipPlainJacket = {
        name: "PhillipPlainJacket",
        bild: "phillipplainjacke.jpg",
        beschreibung: "Entweder oder!",
        preis: 1989,
        kategorie: "specials"
    };
    let phillipplainhose = {
        name: "PhillipPlain Jeans",
        bild: "phillipplainhose.jpg",
        beschreibung: "Bequemer als man denkt",
        preis: 904.90,
        kategorie: "specials"
    };
    let phillipPlainWeste = {
        name: "PhillipPlain Weste",
        bild: "ppweste.jpg",
        beschreibung: "Flexen!",
        preis: 900.07,
        kategorie: "specials"
    };
    let gcs = {
        name: "GucciSupreme Jogger",
        bild: "guccisupjogger.jpg",
        beschreibung: "Nur noch Gucci Bratan",
        preis: 980,
        kategorie: "specials"
    };
    let offWhite = {
        name: "OffWhite Gürtel",
        bild: "offwhiteG.jpeg",
        beschreibung: "AirPort Lifestyle",
        preis: 150.99,
        kategorie: "specials"
    };
    let gucciCap = {
        name: "Gucci Cap 2.0",
        bild: "gucciCap.jpg",
        beschreibung: "Perfekt für den Sommer",
        preis: 250.99,
        kategorie: "specials"
    };
    let offWhitePulli = {
        name: "OffWhite Pulli",
        bild: "offwhitePulli.jpg",
        beschreibung: "lalalalalalal",
        preis: 650.99,
        kategorie: "specials"
    };
    let gucciLO = {
        name: "Gucci SurpriseBox",
        bild: "gucciLO.png",
        beschreibung: "mind. 2 GucciArtikel",
        preis: 1500,
        kategorie: "specials"
    };
    let stoneIslandhoddy = {
        name: "StoneIsland Pulli",
        bild: "stoneIslandhoddy.jpg",
        beschreibung: "Der Klassiker!",
        preis: 589.98,
        kategorie: "specials"
    };
    let stoneisland = {
        name: "StoneIsland Shirt",
        bild: "stoneisland.jpg",
        beschreibung: "Gönn Dir!",
        preis: 238,
        kategorie: "specials"
    };
    let nike90offwhite = {
        name: "Nike 90 OffWhite BLACK",
        bild: "offwhiot90.jpg",
        beschreibung: "Der legendäre 90er AirMax mit zusammenarbeit von OffWhite in schönstem Schwarz",
        preis: 699.99,
        kategorie: "schuhe"
    };
    let offWhiteS = {
        name: "90 Airmax OffWhite",
        bild: "offwhiot90.jpg",
        beschreibung: "Skurr Skurr",
        preis: 1899,
        kategorie: "schuhe"
    };
    let airJordanBLUEBLACK = {
        name: "Air Jordan BLUE&BLACK",
        bild: "airJordanblueblack.jpg",
        beschreibung: "darf es etwas auffälliger werden, dann ist dieser Schuh der Richtige für dich!",
        preis: 999.00,
        kategorie: "schuhe"
    };
    let nikebacktofuture = {
        name: "Nike 720 back to future 2019",
        bild: "nike720backfuture.jpg",
        beschreibung: "Ein echtes Sammlersück für den kleinen Mann",
        preis: 280,
        kategorie: "schuhe"
    };
    let nikebj = {
        name: "Nike Ben & Jerry Edition",
        bild: "nikeBenandJerrys.jpeg",
        beschreibung: "Für echte Eis Liebhaber!",
        preis: 200.07,
        kategorie: "schuhe"
    };
    let airMAG = {
        name: "Nike Nike AirMAG",
        bild: "nikeAirmag.jpg",
        beschreibung: "Schonmal den Filmklassiker zurück in die Zukunft geschaut?",
        preis: 16980.00,
        kategorie: "schuhe"
    };
    let bts = {
        name: "Balenciaga TripleS BLACK",
        bild: "balenciagaTripleSblack.jpg",
        beschreibung: "Die ersten Wochen etwas unbequem, dann aber ein Traum",
        preis: 750.99,
        kategorie: "schuhe"
    };
    let btsw = {
        name: "Balenciaga TripleS WHITE",
        bild: "balenciageTripleSwhite.jpg",
        beschreibung: "Für den kleinen Geldbeutel",
        preis: 750.99,
        kategorie: "schuhe"
    };
    let yeezyBoost = {
        name: "YeezyBOOST350 V2 Zebra",
        bild: "yeezyboost350v2zebra.jpg",
        beschreibung: "Für den FLEX",
        preis: 850.99,
        kategorie: "schuhe"
    };
    let yeezy = {
        name: "YeezyBOOST350 V2",
        bild: "gucciLO.png",
        beschreibung: "mind. 2 GucciArtikel",
        preis: 1000.00,
        kategorie: "schuhe"
    };
    let ys = {
        name: "Yeezy SUPREME",
        bild: "yeezysupreme.jpg",
        beschreibung: "SammlerSTÜCK",
        preis: 6589.98,
        kategorie: "schuhe"
    };
    let nSup = {
        name: "Nike SUPREME",
        bild: "NIKEsupreme.jpeg",
        beschreibung: "Hast du Ihn schon?",
        preis: 5676.99,
        kategorie: "schuhe"
    };
    // atickel is array geladen 
    let artikel = [luiSupJacke, luisupbag, luisupbag, phillipPlainJacket, phillipplainhose, phillipPlainWeste, gcs, offWhite, gucciCap, offWhitePulli, gucciLO, stoneIslandhoddy, stoneisland, nike90offwhite, offWhiteS, airJordanBLUEBLACK, nikebacktofuture, nikebj, airMAG, bts, btsw, yeezyBoost, yeezy, ys, nSup];
    let kategorien = ["special", "schuhe"];
    // schleife zum seite generieren 
    for (let index = 0; index < artikel.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "Artikel" + index;
        newDiv.setAttribute("class", "box");
        document.getElementById("Kategorie1")?.appendChild(newDiv);
        let newH = document.createElement("h2"); //Name
        newH.innerHTML = artikel[index].name;
        document.getElementById("Artikel" + index)?.appendChild(newH);
        let bild = document.createElement("img"); //Bild
        bild.src = artikel[index].bild;
        document.getElementById("Artikel" + index)?.appendChild(bild);
        let newP = document.createElement("p"); //Beschreib.
        newP.innerHTML = artikel[index].beschreibung;
        document.getElementById("Artikel" + index)?.appendChild(newP);
        let newPreis = document.createElement("p"); //Preis
        newPreis.innerHTML = artikel[index].preis.toFixed(2) + "€";
        document.getElementById("Artikel" + index)?.appendChild(newPreis);
        let newB = document.createElement("button"); //Kaufen
        newB.value = "Kaufen";
        newB.type = "submit";
        document.getElementById("Artikel" + index)?.appendChild(newB);
        newB.addEventListener("click", kaufen);
    }
    // zaehler variable
    let anzahl = 0;
    let summe = 0;
    // element für sichtbarkeit der Eingelagerten Produkte
    let newZ = document.createElement("div");
    newZ.id = "anz";
    // Funktion fur den Kaufbutton 
    function kaufen(_event) {
        //einbelenden des Kreises 
        if (anzahl < 1) {
            document.getElementById("header")?.appendChild(newZ);
        }
        anzahl += 1;
        newZ.innerHTML = "" + anzahl;
        //zusammenrechnen der presie 
        let test = _event.currentTarget.parentElement.getAttribute("id");
        let test2 = test.split("Artikel");
        console.log(parseInt(test2[1]));
        // Summe der Preise  
        summe += artikel[parseInt(test2[1])].preis;
        console.log(summe + "€");
    }
    // ersellung der navigation
    let newul = document.createElement("ul");
    document.getElementById("zuweisung")?.appendChild(newul);
    for (let index = 0; index < kategorien.length + 1; index++) {
        let newli = document.createElement("li");
        let newa = document.createElement("a");
        newa.href = "#";
        newa.id = "a" + index;
        if (kategorien.length > index) {
            newa.innerHTML = kategorien[index];
        }
        else {
            newa.innerHTML = "Alles";
        }
        newul.appendChild(newli);
        newli.appendChild(newa);
        newa.addEventListener("click", springen);
    }
    // Ausund einblede Event
    function springen(_event) {
        //alle möglichkeiten für kategorien newue mussen per hand nachgereicht werden
        switch (_event.currentTarget.getAttribute("id")) {
            case "a0":
                //nur Büroanzeigen
                document.getElementById("kategorie1").style.display = "flex";
                document.getElementById("kategorie2").style.display = "none";
                document.getElementById("k1").style.display = "flex";
                document.getElementById("k2").style.display = "none";
                console.log("Special");
                break;
            case "a1":
                //nur Gartenartikel anzeigfen
                document.getElementById("kategorie1").style.display = "none";
                document.getElementById("kategorie2").style.display = "flex";
                document.getElementById("k1").style.display = "none";
                document.getElementById("k2").style.display = "flex";
                console.log("Shoes");
                break;
            case "a2":
                //alles anzeigen
                document.getElementById("kategorie1").style.display = "flex";
                document.getElementById("kategorie2").style.display = "flex";
                document.getElementById("k1").style.display = "flex";
                document.getElementById("k2").style.display = "flex";
                console.log("Alle");
                break;
            default:
                break;
        }
    }
})(namespace06 || (namespace06 = {}));
//# sourceMappingURL=script.js.map