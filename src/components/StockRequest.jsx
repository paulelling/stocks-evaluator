import { useState } from "react"
import StockResponse from "./StockResponse";
/**import Test2 from "./Test2";**/

export default function StockRequest() {
    const [showResponse, setShowReponse] = useState(false);

    const searchStock = () => setShowReponse(!showResponse)

    return (
        <div className="form">
            <input type="text" id="tickerTextBox" placeholder="Enter Stock Ticker"></input>
            &nbsp;&nbsp;
            <button className="searchButton" onClick={searchStock}>Search</button>
            {showResponse && <StockResponse></StockResponse>}
        </div>
    );
}