namespace Aufgabe07 {
    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
    }

    export let artikel: Artikel[];
    loadArtikel("artikel.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        artikel = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }
}