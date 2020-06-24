"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("submitBut")?.addEventListener("click", handleButton);
    function handleButton() {
        let formData = new FormData(document.forms[0]);
        let url = "https://pirripirri.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicate(url);
    }
    async function communicate(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        console.log(response2);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map