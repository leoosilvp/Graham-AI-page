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
                <li><Link state={{ scrollTo: "about" }} onClick={() => window.location.reload()} >About</Link></li>
                <li><Link state={{ scrollTo: "plans" }} onClick={() => window.location.reload()} >Plans</Link></li>
                <li><Link state={{ scrollTo: "colab" }} onClick={() => window.location.reload()} >Documentation</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
