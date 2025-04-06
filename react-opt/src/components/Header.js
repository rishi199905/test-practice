import { React, useState}  from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = () => {
    const [ btn, setBtn] = useState("LOGIN")
    const onlineStatus = useOnlineStatus()
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' alt='logo' src='https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png'></img>
        </div> 
        <div className='nav-items'>
          <ul >
            <li>{onlineStatus ? "ONLINE" : "OFFLINE"}</li>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About Us</Link> </li>
            <li> <Link to="/grocery">Grocery</Link> </li>
            <li><Link to="/">Cart</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
            <button className='log-btn' onClick={ () => { setBtn("LOG OUT")} }> {btn} </button>
          </ul>
        </div>
      </div>
    )
  }

export default Header