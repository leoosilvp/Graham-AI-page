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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Documetation</a></li>
                            <li><a href="#">Brain</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="https://graham-ai-kappa.vercel.app/">Graham - chat</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Create account</a></li>
                            <li><a href="#">contribute</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Portfólio</a></li>
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
