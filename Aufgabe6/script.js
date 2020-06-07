"use strict";
let luiSupJacke = {
    ueberschrift: "LuisVitton Supreme Jacke",
    bild: "luisupjacke.jpg",
    beschreibung: "Wer zuerst kommt, der hats verdient",
    preis: "13899€"
};
let luisupbag = {
    ueberschrift: "LuisVitton Supreme Bag RED",
    bild: "Louis-Vuitton-Supreme.jpg",
    beschreibung: "Genug Platz für arme Studenten",
    preis: "16899€"
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
for (let i = 0; i < specialedition.length; i++) {
    let nDiv = document.createElement("div");
    nDiv.id = "Special" + i;
    nDiv.setAttribute("class", "box");
    document.getElementById("Kategorie1")?.appendChild(nDiv);
    let headline = document.createElement("p"); //Name
    headline.innerHTML = specialedition[i].ueberschrift;
    document.getElementById("Special" + i)?.appendChild(headline);
    let img = document.createElement("img"); //Bild
    img.src = specialedition[i].bild;
    document.getElementById("Special" + i)?.appendChild(img);
    let content = document.createElement("p"); //Beschreib.
    content.innerHTML = specialedition[i].beschreibung;
    document.getElementById("Special" + i)?.appendChild(content);
    let price = document.createElement("p"); //Preis
    price.innerHTML = specialedition[i].preis;
    price.className = "specialPrice"
    document.getElementById("Special" + i)?.appendChild(price);
    let einkaufen = document.createElement("button"); //Kaufen
    einkaufen.innerHTML = "Kaufen";
    einkaufen.className = "buySpecial";
    document.getElementById("Special" + i)?.appendChild(einkaufen);
}
// ---------------------------for--------------------------------------------------------
for (let i = 0; i < shoes.length; i++) {
    let nDiv = document.createElement("div");
    nDiv.id = "SpecialShoes" + i;
    nDiv.setAttribute("class", "box");
    document.getElementById("Kategorie2")?.appendChild(nDiv);
    let headline = document.createElement("p"); //Name
    headline.innerHTML = shoes[i].ueberschrift;
    document.getElementById("SpecialShoes" + i)?.appendChild(headline);
    let img = document.createElement("img"); //bild
    img.src = shoes[i].bild;
    document.getElementById("SpecialShoes" + i)?.appendChild(img);
    let content = document.createElement("p"); //Beschreibung
    content.innerHTML = shoes[i].beschreibung;
    document.getElementById("SpecialShoes" + i)?.appendChild(content);
    let price = document.createElement("p"); //Preis
    price.innerHTML = shoes[i].preis;
    price.className = "shoePrice";
    document.getElementById("SpecialShoes" + i)?.appendChild(price);
    let kaufen = document.createElement("button"); //Einkaufswagen
    kaufen.className = "buyShoe";
    kaufen.innerHTML = "Kaufen";
    document.getElementById("SpecialShoes" + i)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map




//Load page dynamically###########################################################################################
//buttons #######################################################################################################
let specialsButton = document.getElementById('specials');
specialsButton.addEventListener('click', showSpecials);

let shoesButton = document.getElementById('schuhe');
shoesButton.addEventListener('click', showShoes);

let allProductsButton = document.getElementById('alleProdukte');
alleProdukte.addEventListener('click', showAllProducts);

let specialProducts = document.getElementById('Kategorie1');

let shoeProducts = document.getElementById('Kategorie2');




function handleProducts(_click) {
    switch(this.getAttribute('id')) {
        case 'specials':
            showSpecials();
            break;
        case 'shoes':
                showShoes();
            break;
        case 'alleProdukte':
            showAllProducts();
            break;   
    }
}

function showSpecials() {
    specialProducts.style.display = 'grid';
    shoeProducts.style.display = 'none';
}

function showShoes() {
    specialProducts.style.display = 'none';
    shoeProducts.style.display = 'grid';
}

function showAllProducts() {
    specialProducts.style.display = "grid";
    shoeProducts.style.display = 'grid';
}




// Variablen######################################
var counter = 0; // Zähler für den Einkaufswagen#
var totalPrice = 0; // Gesamtsumme des Preises##
//#############################################
let shopCart = document.getElementById("cart-count"); // span beim Einkaufswagen

// Special and Shoe Products##################################################################################################
let addToCartButtonsSpecial = document.getElementsByClassName("buySpecial"); // Alle buttons im array für special produkte
for (let i = 0; i < addToCartButtonsSpecial.length; i++) {
    let button = addToCartButtonsSpecial[i];
    button.addEventListener('click', addToCartButtonsSpecialClicked);
}
let addToCartButtons = document.getElementsByClassName("buyShoe"); // Alle buttons im array für shoe produkte
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}
//###################################################################################################################


//Funktionen ###################################################################################################################
// Funktion für special produkte
function addToCartButtonsSpecialClicked(event) {
    counter += 1; // Counter wird um 1 erhöht
    let button = event.target;
    let shopItem = button.parentElement.getElementsByClassName('specialPrice')[0].innerHTML; // erfassen den preis des produktes
    shopItem = parseFloat(shopItem.replace('$', ''));
    totalPrice = totalPrice + Math.round(shopItem * 100) / 100;
    shopCart.innerHTML = counter;
    console.log(counter);
    console.log("Gesamter Preis: " + totalPrice + '$');
}

// funktion für shoe produkte
function addToCartClicked(event) {
    counter += 1;
    let button = event.target;
    let shopItem = button.parentElement.getElementsByClassName('shoePrice')[0].innerHTML;
    shopItem = parseFloat(shopItem.replace('$', ''))
    totalPrice = totalPrice + Math.round(shopItem * 100) / 100;
    shopCart.innerHTML = counter;
    console.log(counter);
    console.log("Gesamter Preis: " + totalPrice + '$');
}











