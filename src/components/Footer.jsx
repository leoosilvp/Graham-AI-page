import {Link} from 'react-router-dom'
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
                            <li><a><Link to="/">Home</Link></a></li>
                            <li><a><Link to="/">About</Link></a></li>
                            <li><a><Link to="/">Documetation</Link></a></li>
                            <li><a><Link to="/">Brain</Link></a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="https://graham-ai-kappa.vercel.app/" target='_blank'>Graham - chat</a></li>
                            <li><a href="https://graham-ai-kappa.vercel.app/" target='_blank'>Login</a></li>
                            <li><a href="https://graham-ai-kappa.vercel.app/" target='_blank'>Create account</a></li>
                            <li><a><Link to="/Contribute">contribute</Link></a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="https://github.com/leoosilvp" target='_blank'>GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/leeosilvp/" target='_blank'>Linkedin</a></li>
                            <li><a href="https://www.instagram.com/leeosilvp/" target='_blank'>Instagram</a></li>
                            <li><a href="https://github.com/leoosilvp?tab=repositories" target='_blank'>Portfólio</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact-us</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Dev</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <p>Graham-AI &copy; 2025</p>
        </footer>
    )
}

export default Footer
