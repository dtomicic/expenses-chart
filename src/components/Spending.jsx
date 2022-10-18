import '../styles/Spending.css'
import data from '../data.json'

const Spending = () => {

    const displayData = data.map((item) => {
        return(
            <div className="spendingBoxChartItem" key={item.day}>
                <div className="spendingBoxChartItemPopup">${item.amount}</div>
                <div className="spendingBoxChartItemLine" style={{height: (item.amount + 15) + '%'}}></div>
                <h4 className="spendingBoxChartItemHeader">{item.day}</h4>
            </div>  
        )
    })

    console.log();
  return (
    <div className='spendingBox'>
        <h3 className="spendingBoxHeader">Spending - Last 7 days</h3>
        <div className="spendingBoxChart">
            {displayData}
        </div>
        <hr className='spendingBoxDivider'></hr>
        <div className="spendingBoxTotal">
            <div className="spendingBoxTotalLeft">
                <h2 className="spendingBoxTotalLeftHeader">Total this month</h2>
                <h2 className="spendingBoxTotalLeftAmount">$478.33</h2>
            </div>
            <div className="spendingBoxTotalRight">
                <h2 className="spendingBoxTotalRightPercentage">+2.4%</h2>
                <h2 className="spendingBoxTotalRightText">from last month</h2>
            </div>
        </div>
    </div>
  )
}
export default Spending