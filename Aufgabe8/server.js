"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    //Port wird zugewiesen
    let port = Number(process.env.PORT);
    //Port wird überprüft
    if (!port)
        port = 8100;
    //Server variablen erstellun
    let server = Http.createServer();
    //Hinzufügen der request handler
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server "hört" auf port, für Anfragen
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Parameter Reponse-Header
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe URL
        _response.write(_request.url);
        //Reponse Ende
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map