import '../css/contribute.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pix from '../assets/img/pix.jpg'
import Icon from '../components/Icon';


function Contribute() {
  return (
    <>
        <Header />
        <section className='ctn-contribute'>
            <section className="contribute">
                <h1>Together we can build something extraordinary!</h1>
                <img src={Pix} />
                <h2>come be part of it</h2>
            </section>
        </section>
        <Icon />
        <Footer />
    </>
  )
}

export default Contribute;
