"use strict";
let luiSupJacke = {
    ueberschrift: "LuisVitton Supreme Jacke",
    bild: "luisupjacke.jpg",
    beschreibung: "Wer zuerst kommt, der hats verdient",
    preis: "13 899€"
};
let luisupbag = {
    ueberschrift: "LuisVitton Supreme Bag RED",
    bild: "Louis-Vuitton-Supreme.jpg",
    beschreibung: "Genug Platz für arme Studenten",
    preis: "16 899€"
};
let phillipPlainJacket = {
    ueberschrift: "PhillipPlainJacket",
    bild: "phillipplainjacke.jpg",
    beschreibung: "Entweder oder!",
    preis: "1989,00€"
};
let phillipplainhose = {
    ueberschrift: "PhillipPlain Jeans",
    bild: "phillipplainhose.jpg",
    beschreibung: "Bequemer als man denkt",
    preis: "904,90€"
};
let phillipPlainWeste = {
    ueberschrift: "PhillipPlain Weste",
    bild: "ppweste.jpg",
    beschreibung: "Flexen!",
    preis: "900,07€"
};
let gcs = {
    ueberschrift: "GucciSupreme Jogger",
    bild: "guccisupjogger.jpg",
    beschreibung: "Nur noch Gucci Bratan",
    preis: "980,00€"
};
let offWhite = {
    ueberschrift: "OffWhite Gürtel",
    bild: "offwhiteG.jpeg",
    beschreibung: "AirPort Lifestyle",
    preis: "150,99€"
};
let gucciCap = {
    ueberschrift: "Gucci Cap 2.0",
    bild: "gucciCap.jpg",
    beschreibung: "Perfekt für den Sommer",
    preis: "250,99€"
};
let offWhitePulli = {
    ueberschrift: "OffWhite Pulli",
    bild: "offwhitePulli.jpg",
    beschreibung: "lalalalalalal",
    preis: "650,99€"
};
let gucciLO = {
    ueberschrift: "Gucci SurpriseBox",
    bild: "gucciLO.png",
    beschreibung: "mind. 2 GucciArtikel",
    preis: "1500,00€"
};
let stoneIslandhoddy = {
    ueberschrift: "StoneIsland Pulli",
    bild: "stoneIslandhoddy.jpg",
    beschreibung: "Der Klassiker!",
    preis: "589,98€"
};
let stoneisland = {
    ueberschrift: "StoneIsland Shirt",
    bild: "stoneisland.jpg",
    beschreibung: "Gönn Dir!",
    preis: "238,00€"
};
let nike90offwhite = {
    ueberschrift: "Nike 90 OffWhite BLACK",
    bild: "offwhiot90.jpg",
    beschreibung: "Der legendäre 90er AirMax mit zusammenarbeit von OffWhite in schönstem Schwarz",
    preis: "699,99€"
};
let offWhiteS = {
    ueberschrift: "90 Airmax OffWhite",
    bild: "offwhiot90.jpg",
    beschreibung: "Skurr Skurr",
    preis: "1899€"
};
let airJordanBLUEBLACK = {
    ueberschrift: "Air Jordan BLUE&BLACK",
    bild: "airJordanblueblack.jpg",
    beschreibung: "darf es etwas auffälliger werden, dann ist dieser Schuh der Richtige für dich!",
    preis: "999,00€"
};
let nikebacktofuture = {
    ueberschrift: "Nike 720 back to future 2019",
    bild: "nike720backfuture.jpg",
    beschreibung: "Ein echtes Sammlersück für den kleinen Mann",
    preis: "280€"
};
let nikebj = {
    ueberschrift: "Nike Ben & Jerry Edition",
    bild: "nikeBenandJerrys.jpeg",
    beschreibung: "Für echte Eis Liebhaber!",
    preis: "200,07€"
};
let airMAG = {
    ueberschrift: "Nike Nike AirMAG",
    bild: "nikeAirmag.jpg",
    beschreibung: "Schonmal den Filmklassiker zurück in die Zukunft geschaut?",
    preis: "16980,00€"
};
let bts = {
    ueberschrift: "Balenciaga TripleS BLACK",
    bild: "balenciagaTripleSblack.jpg",
    beschreibung: "Die ersten Wochen etwas unbequem, dann aber ein Traum",
    preis: "750,99€"
};
let btsw = {
    ueberschrift: "Balenciaga TripleS WHITE",
    bild: "balenciageTripleSwhite.jpg",
    beschreibung: "Für den kleinen Geldbeutel",
    preis: "750,99€"
};
let yeezyBoost = {
    ueberschrift: "YeezyBOOST350 V2 Zebra",
    bild: "yeezyboost350v2zebra.jpg",
    beschreibung: "Für den FLEX",
    preis: "850,99€"
};
let yeezy = {
    ueberschrift: "YeezyBOOST350 V2",
    bild: "gucciLO.png",
    beschreibung: "mind. 2 GucciArtikel",
    preis: "1000,00€"
};
let ys = {
    ueberschrift: "Yeezy SUPREME",
    bild: "yeezysupreme.jpg",
    beschreibung: "SammlerSTÜCK",
    preis: "6589,98€"
};
let nSup = {
    ueberschrift: "Nike SUPREME",
    bild: "NIKEsupreme.jpeg",
    beschreibung: "Hast du Ihn schon?",
    preis: "5676,99€"
};
let specialedition = [luiSupJacke, luisupbag, phillipPlainJacket, phillipplainhose,
    phillipPlainWeste, gcs, offWhite, gucciCap, offWhitePulli, gucciLO, stoneIslandhoddy, stoneisland];
let shoes = [nike90offwhite, offWhiteS, airJordanBLUEBLACK, nikebacktofuture,
    nikebj, airMAG, bts, btsw, yeezyBoost, yeezy, ys, nSup];
for (let zahl = 0; zahl < specialedition.length; zahl++) {
    let nDiv = document.createElement("div");
    nDiv.id = "Special" + zahl;
    nDiv.setAttribute("class", "box");
    document.getElementById("Kategorie1")?.appendChild(nDiv);
    let headline = document.createElement("p"); //Name
    headline.innerHTML = specialedition[zahl].ueberschrift;
    document.getElementById("Special" + zahl)?.appendChild(headline);
    let img = document.createElement("img"); //Bild
    img.src = specialedition[zahl].bild;
    document.getElementById("Special" + zahl)?.appendChild(img);
    let content = document.createElement("p"); //Beschreib.
    content.innerHTML = specialedition[zahl].beschreibung;
    document.getElementById("Special" + zahl)?.appendChild(content);
    let price = document.createElement("p"); //Preis
    price.innerHTML = specialedition[zahl].preis;
    document.getElementById("Special" + zahl)?.appendChild(price);
    let einkaufen = document.createElement("button"); //Kaufen
    einkaufen.innerHTML = "Einkaufswagen";
    document.getElementById("Special" + zahl)?.appendChild(einkaufen);
}
// ---------------------------for--------------------------------------------------------
for (let zahl = 0; zahl < shoes.length; zahl++) {
    let nDiv = document.createElement("div");
    nDiv.id = "SpecialShoes" + zahl;
    nDiv.setAttribute("class", "box");
    document.getElementById("Kategorie2")?.appendChild(nDiv);
    let headline = document.createElement("p"); //Name
    headline.innerHTML = shoes[zahl].ueberschrift;
    document.getElementById("SpecialShoes" + zahl)?.appendChild(headline);
    let img = document.createElement("img"); //bild
    img.src = shoes[zahl].bild;
    document.getElementById("SpecialShoes" + zahl)?.appendChild(img);
    let content = document.createElement("p"); //Beschreibung
    content.innerHTML = shoes[zahl].beschreibung;
    document.getElementById("SpecialShoes" + zahl)?.appendChild(content);
    let price = document.createElement("p"); //Preis
    price.innerHTML = shoes[zahl].preis;
    document.getElementById("SpecialShoes" + zahl)?.appendChild(price);
    let kaufen = document.createElement("button"); //Einkaufswagen
    kaufen.innerHTML = "Einkaufswagen";
    document.getElementById("SpecialShoes" + zahl)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map