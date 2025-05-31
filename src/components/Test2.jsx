export default function Test2() {
    var user = fetch("https://localhost:7240/Stock?ticker=MSFT", {
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': "*",
          "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
          "Access-Control-Max-Age": "86400",
        }
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("valueLabel").innerHTML = data["ticker"]
        })






    return (
        <div>
        <label id="valueLabel"></label>
        </div>
    );
}