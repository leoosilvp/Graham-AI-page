import './css/style.css'
import Header from './components/Header'
import Presentation from './components/Presentation'
import ChangeIcon from './hooks/ChangeIcon'
import Icon from './components/Icon'
import imgInterface from './assets/img/interface.png'

function App() {

  ChangeIcon();

  return (
    <>
      <Header />
      <section className="content">
        <Presentation />
        <section className="interface">
          <h1>Completely intuitive interface</h1>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <img src={imgInterface} alt="interface" />
          <div className="content-interface">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur.</p>
            <section className="ctn-cards-interface">
              <article className="card-interface">
                <p>😊</p>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur.</h3>
              </article>  

              <article className="card-interface">
                <p>😊</p>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur.</h3>
              </article>

              <article className="card-interface">
                <p>😊</p>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur.</h3>
              </article>
            </section>
          </div>
        </section>
      </section>
      <Icon />
    </>
  )
}

export default App
