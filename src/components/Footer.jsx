import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-light.svg'
import '../css/footer.css'

function Footer() {
    return (
        <footer>
            <div className="content-footer">
                <div className="presentation-graham">
                    <img src={logo} />
                    <p>Graham is your new AI interface, designed to be powerful
                        and intuitive. Try it now and simplify your work.</p>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/' onClick={() => window.location.reload()} >Home</Link></li>
                            <li><Link state={{ scrollTo: "about" }} onClick={() => window.location.reload()} >About</Link></li>
                            <li><Link state={{ scrollTo: "plans" }} onClick={() => window.location.reload()} >Plans</Link></li>
                            <li><Link state={{ scrollTo: "colab" }} onClick={() => window.location.reload()} >Documentation</Link></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="https://ai-graham.vercel.app/" target='_blank'>Graham - chat</a></li>
                            <li><a href="https://ai-graham.vercel.app/login" target='_blank'>Login</a></li>
                            <li><a href="https://ai-graham.vercel.app/login" target='_blank'>Create account</a></li>
                            <li><a href="https://ai-graham.vercel.app/settings/account" target='_blank'>Profile</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/leeosilvp/" target='_blank'>Linkedin</a></li>
                            <li><a href="https://www.instagram.com/leeosilvp/" target='_blank'>Instagram</a></li>
                            <li><a href="">twitter</a></li>
                            <li><a href="https://github.com/leoosilvp" target='_blank'>GitHub</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="https://ai-graham.vercel.app/settings/support">Support</a></li>
                            <li><a href="https://ai-graham.vercel.app/settings/support">Contact-us</a></li>
                            <li><a href="">Community</a></li>
                            <li><a href="">Contribute</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <p>Graham AI &copy; 2025</p>
        </footer>
    )
}

export default Footer
