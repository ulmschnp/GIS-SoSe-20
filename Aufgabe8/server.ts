import * as Http from "http";

export namespace A08Server {

    console.log("Starting server");
    //Port wird zugewiesen
    let port: number = Number(process.env.PORT);
    //Port wird überprüft
    if (!port)
        port = 8100;
    //Server variablen erstellun
    let server: Http.Server = Http.createServer();
    //Hinzufügen der request handler
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server "hört" auf port, für Anfragen
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        console.log("I hear voices!");
        //Parameter Reponse-Header
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe URL
        _response.write(_request.url);
        //Reponse Ende
        _response.end();
    }
}