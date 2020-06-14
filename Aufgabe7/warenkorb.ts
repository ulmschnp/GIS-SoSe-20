namespace Aufgabe07 {
    let length: number = parseInt(localStorage.getItem("anzahlArtikel")!);
    let preis: number = 0;
    let gesamtpreis: HTMLParagraphElement = document.createElement("p");

    for (let index: number = 0; index <= length - 1; index++) {
        //Div erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        (<HTMLElement>document.getElementById("flexWarenkorb")).appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);

        //Bild
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = localStorage.getItem("artikel_bild" + index)!;
        newDiv.appendChild(imgElement);
        console.log(imgElement);

        //Überschrift
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = localStorage.getItem("artikel_name" + index)!;
        newDiv.appendChild(name);
        console.log(name);

        //Beschreibung
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = localStorage.getItem("artikel_description" + index)!;
        newDiv.appendChild(beschreibung);
        console.log(beschreibung);

        //Preis
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€"!;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);

        //Button
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleDelete);

        //Gesamtpreis berechnen
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        document.getElementById("warenkorbWert")?.appendChild(gesamtpreis);
    }
    let delButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("delButton"));
    delButton.addEventListener("click", handleDeleteAll);

    function handleDelete(_event: Event): void {
        let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    }
    function handleDeleteAll(_event: Event): void {
        for (let index: number = 0; index <= length; index++) {
            (<HTMLDivElement>document.getElementById("div" + index)).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
    }
}