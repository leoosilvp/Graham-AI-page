import {Link} from 'react-router-dom'
import logo from '../assets/img/icon-light.svg'
import '../css/header.css'

function Header(){
  return (
    <header>
        <Link to='/'><img src={logo} alt="logo-Graham" /></Link>
        <nav>
            <ul>
                <li><Link to='/' onClick={() => window.location.reload()}>Home</Link></li>
                <li><Link state={{ scrollTo: "about" }}>About</Link></li>
                <li><Link state={{ scrollTo: "plans" }}>Plans</Link></li>
                <li><Link state={{ scrollTo: "colab" }}>Documentation</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
