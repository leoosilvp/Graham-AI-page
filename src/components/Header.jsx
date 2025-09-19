import {Link} from 'react-router-dom'
import logo from '../assets/img/icon-light.svg'
import '../css/header.css'

function Header(){
  return (
    <header>
        <a><Link to='/'><img src={logo} alt="logo-Graham" /></Link></a>
        <nav>
            <ul>
                <li><a><Link to='/'>Home</Link></a></li>
                <li><a><Link to='/'>About</Link></a></li>
                <li><a><Link to='/'>Documentation</Link></a></li>
                <li><a><Link to='/'>Brain</Link></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
