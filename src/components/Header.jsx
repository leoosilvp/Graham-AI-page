import logo from '../assets/img/icon-light.svg'
import '../css/header.css'

function Header(){
  return (
    <header>
        <a href="#"><img src={logo} alt="logo-anonymous" /></a>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Brain</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
