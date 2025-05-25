export default function Test() {
    var user = fetch("http://localhost:8080/stock?ticker=MSFT")
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