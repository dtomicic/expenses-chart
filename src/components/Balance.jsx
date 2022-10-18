import logo from '../images/logo.svg'
import '../styles/Balance.css';

const Balance = () => {
  return (
    <div className='balance'>
        <div className="balanceLeft">
            <h3 className="balanceLeftText">My balance</h3>
            <h5 className="balanceLeftAmount">$921.48</h5>
        </div>
        <div className="balanceRight">
            <img src={logo} alt="Logo" className="balanceRightImage" />
        </div>
    </div>
  )
}
export default Balance