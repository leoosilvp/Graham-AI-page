import logo from '../assets/img/logo-light.png'
import '../css/footer.css'

function Footer() {
    return (
        <footer>
            <div className="content-footer">
                <div className="presentation-anonymous">
                    <img src={logo} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum rerum blanditiis aut? Cumque repudiandae iusto 
                        unde voluptate aut laboriosam.</p>
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
                            <li><a href="#">Anonymous - chat</a></li>
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
            <p>Anonymous &copy;2025 - Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer
