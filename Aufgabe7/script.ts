namespace Aufgabe07 {
    //Interface

    export function createArtikel(): void {
        for (let i: number = 0; i < artikel.length; i++) {

            if (artikel[i].kategorie == 1) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            if (artikel[i].kategorie == 2) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            //IMG
            let bildElement: HTMLImageElement = document.createElement("img");
            bildElement.src = artikel[i].bild;
            document.getElementById("div" + i)?.appendChild(bildElement);

            //NAME
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerHTML = artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);

            //DESCRIPTION
            let beschreibung: HTMLParagraphElement = document.createElement("p");
            beschreibung.innerHTML = artikel[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);

            //PREIS
            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(preis);

            //BUY
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", artikel[i].preis.toString());
        }
    }

    //Einkaufswagen
    let summe: number = 0;
    let count: number = 0;
    let artikelCounter: number = 0;
    let blasenDiv: HTMLDivElement = document.createElement("div");

    let cartArtikel: Artikel[] = [];

    export function handleTrolley(_event: Event): void {

        if (artikelCounter >= 0) {
            document.getElementById("warencounter")?.appendChild(blasenDiv);
        }

        artikelCounter++;
        blasenDiv.innerHTML = artikelCounter + "";

        if ((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")) {
            summe = count + parseInt((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
            count = summe;
        }
        console.log(summe.toFixed(0));

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);

        cartArtikel.push(artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), artikel[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), artikel[indexNr].name);
        localStorage.setItem("artikel_beschreibung" + (cartArtikel.length - 1), artikel[indexNr].beschreibung);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());


    }

    let allCategory: HTMLAnchorElement = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "All";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);

    let specialCategory: HTMLAnchorElement = document.createElement("a");
    specialCategory.id = "special";
    specialCategory.innerHTML = "Specials";
    specialCategory.addEventListener("click", handleKategorie);
    document.getElementById("specialButton")?.appendChild(specialCategory);

    let shoeCategory: HTMLAnchorElement = document.createElement("a");
    shoeCategory.id = "shoe";
    shoeCategory.innerHTML = "Shoes";
    shoeCategory.addEventListener("click", handleKategorie);
    document.getElementById("shoeButton")?.appendChild(shoeCategory);

    function handleKategorie(_event: Event): void {

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "all") {
            (<HTMLDivElement>document.getElementById("specialsBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("shoesBlock")).style.display = "block";
            console.log("all");
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "special") {
            (<HTMLDivElement>document.getElementById("specialsBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("shoesBlock")).style.display = "none";
            console.log("specials");
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "shoe") {
            (<HTMLDivElement>document.getElementById("specialsBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("shoesBlock")).style.display = "block";
            console.log("shoes");
        }
    }

}
