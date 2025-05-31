import stockData from './ApiResponse.json'
import { LineChart } from '@mui/x-charts'

export default function StockResponse() {
    var price = stockData.price;
    var todaysDate = new Date().toISOString();
    todaysDate = todaysDate.substring(0, 10)
    var fiftyTwoWeekHigh = stockData.fiftyTwoWeekHigh;
    var fiftyTwoWeekHighDate = stockData.fiftyTwoWeekHighDate;
    var fiftyTwoWeekLow = stockData.fiftyTwoWeekLow;
    var fiftyTwoWeekLowDate = stockData.fiftyTwoWeekLowDate;
    
    var fiftyTwoWeekHighDateObject = new Date(fiftyTwoWeekHighDate);
    var fiftyTwoWeekLowDateObject = new Date(fiftyTwoWeekLowDate);

    var firstDate;
    var secondDate;

    var firstPrice;
    var secondPrice;

    if (fiftyTwoWeekHighDateObject > fiftyTwoWeekLowDateObject) {
        firstDate = fiftyTwoWeekLowDate;
        firstPrice = fiftyTwoWeekLow;
        secondDate = fiftyTwoWeekHighDate;
        secondPrice = fiftyTwoWeekHigh;
    }
    else if (fiftyTwoWeekLowDateObject > fiftyTwoWeekHighDateObject) {
        firstDate = fiftyTwoWeekHighDate;
        firstPrice = fiftyTwoWeekHigh;
        secondDate = fiftyTwoWeekLowDate;
        secondPrice = fiftyTwoWeekLow;
    }

    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);

    const years = [
        firstDate,
        secondDate
    ];

    const dataSeries = [
        {
            data: [firstPrice, secondPrice],
            label: 'Price',
        },
    ];

    return (
        <div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>{stockData.name} ({stockData.ticker})</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Price</label>
                        </div>
                        <div>
                            <label>{stockData.price}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>52 Week Range</label>
                        </div>
                        <div>
                            <label>{stockData.fiftyTwoWeekLow} - {stockData.fiftyTwoWeekHigh}</label>
                        </div>                    
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Market Capitalization</label>
                        </div>
                        <div>
                            <label>{stockData.marketCapitalization}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Shares Outstanding</label>
                        </div>
                        <div>
                            <label>{stockData.sharesOutstanding}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Earnings Per Share</label>
                        </div>
                        <div>
                            <label>{stockData.earningsPerShare}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Dividend Per Share</label>
                        </div>
                        <div>
                            <label>{stockData.dividendPerShare}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Beta</label>
                        </div>
                        <div>
                            <label>{stockData.beta}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>P/E Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.priceEarningsRatio}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Earnings Yield</label>
                        </div>
                        <div>
                            <label>{stockData.earningsYield}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Gross Margin</label>
                        </div>
                        <div>
                            <label>{stockData.grossMargin}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Operating Margin</label>
                        </div>
                        <div>
                            <label>{stockData.operatingMargin}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Asset Turnover</label>
                        </div>
                        <div>
                            <label>{stockData.assetTurnover}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Inventory Turnover</label>
                        </div>
                        <div>
                            <label>{stockData.inventoryTurnover}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Receivables Turnover</label>
                        </div>
                        <div>
                            <label>{stockData.receivablesTurnover}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Quick Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.quickRatio}</label>
                        </div>
                    </div>
                </div>  
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div>
                    <label>52-week Price Swing</label>
                    <br />
                    <label>X-Axis: Date</label>
                    <br />
                    <label>Y-Axis: Price</label>
                </div>                
                <div>
                    <LineChart
                        xAxis={[
                            {
                                data: years,
                                scaleType: 'time',
                                label: 'Year',
                            },
                        ]}
                        series={dataSeries}
                        width={300}
                        height={300}
                    />               
                </div>
                <div>
          
                </div>
            </div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Balance Sheet</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.date}</label>
                        </div>
                    </div>    
                    <div className='dataLayout'>
                        <div>
                            <label>Current Assets</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.currentAssets}</label>
                        </div>
                    </div>   
                    <div className='dataLayout'>
                        <div>
                            <label>Current Liabilities</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.currentLiabilities}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Total Cash</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.totalCash}</label>
                        </div>
                    </div>  
                    <div className='dataLayout'>
                        <div>
                            <label>Total Debt</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.totalDebt}</label>
                        </div>
                    </div>   
                    <div className='dataLayout'>
                        <div>
                            <label>Total Equity</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.totalEquity}</label>
                        </div>
                    </div>  
                    <div className='dataLayout'>
                        <div>
                            <label>Owners' Equity</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.ownerEquity}</label>
                        </div>
                    </div>     
                    <div className='dataLayout'>
                        <div>
                            <label>Long-Term Debt</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.longTermDebt}</label>
                        </div>
                    </div>    
                    <div className='dataLayout'>
                        <div>
                            <label>Inventory</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.inventory}</label>
                        </div>
                    </div>      
                    <div className='dataLayout'>
                        <div>
                            <label>Accounts Receivable</label>
                        </div>
                        <div>
                            <label>{stockData.balanceSheet.accountsReceivable}</label>
                        </div>
                    </div>                           
                </div>
            </div>           
            <div>&nbsp;</div>
            <div>&nbsp;</div> 
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Income Statement</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <label>{stockData.incomeStatement.date}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>EBIT</label>
                        </div>
                        <div>
                            <label>{stockData.incomeStatement.ebit}</label>
                        </div>
                    </div>       
                    <div className='dataLayout'>
                        <div>
                            <label>EBITDA</label>
                        </div>
                        <div>
                            <label>{stockData.incomeStatement.ebitda}</label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Depreciation and Amortization</label>
                        </div>
                        <div>
                            <label>{stockData.incomeStatement.depreciationAndAmortization}</label>
                        </div>
                    </div>   
                    <div className='dataLayout'>
                        <div>
                            <label>Net Income</label>
                        </div>
                        <div>
                            <label>{stockData.incomeStatement.netIncome}</label>
                        </div>
                    </div>   
                    <div className='dataLayout'>
                        <div>
                            <label>Operating Income</label>
                        </div>
                        <div>
                            <label>{stockData.incomeStatement.operatingIncome}</label>
                        </div>
                    </div>                      
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Cash Flow Statement</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <label>{stockData.cashFlowStatement.date}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Operating Cash Flow</label>
                        </div>
                        <div>
                            <label>{stockData.cashFlowStatement.operatingCashFlow}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Taxes</label>
                        </div>
                        <div>
                            <label>{stockData.cashFlowStatement.taxes}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Change in Net Working Capital</label>
                        </div>
                        <div>
                            <label>{stockData.cashFlowStatement.changeInNetWorkingCapital}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Inventory</label>
                        </div>
                        <div>
                            <label>{stockData.cashFlowStatement.inventory}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Quality of Income Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.qualityOfIncomeRatio}</label>
                        </div>
                    </div> 
                </div>
            </div>      
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Liquidity</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Current Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.currentRatio}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Cash Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.cashRatio}</label>
                        </div>
                    </div> 
                </div>                
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>   
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Financial Leverage</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Net Asset Value</label>
                        </div>
                        <div>
                            <label>{stockData.netAssetValue}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Total Debt Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.totalDebtRatio}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Debt Equity Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.debtEquityRatio}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Equity Multiplier</label>
                        </div>
                        <div>
                            <label>{stockData.equityMultiplier}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Financial Leverage Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.financialLeverageRatio}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Long-Term Debt Ratio</label>
                        </div>
                        <div>
                            <label>{stockData.longTermDebtRatio}</label>
                        </div>
                    </div> 
                </div>                
            </div> 
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Profitability</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Return on Assets</label>
                        </div>
                        <div>
                            <label>{stockData.returnOnAssets}</label>
                        </div>
                    </div> 
                    <div className='dataLayout'>
                        <div>
                            <label>Return on Equity</label>
                        </div>
                        <div>
                            <label>{stockData.returnOnEquity}</label>
                        </div>
                    </div> 
                </div>                
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>     
        </div>
    )
}