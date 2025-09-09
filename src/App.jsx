import './css/style.css'
import Header from './components/Header'
import Presentation from './components/Presentation'
import ChangeIcon from './hooks/ChangeIcon'
import Footer from './components/Footer'

import imgInterface from './assets/img/interface.png'
import Icon from './components/Icon'
import colab from './assets/img/openai-anonymous.png'

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
        <hr />
        <section className='api'>
          <a href="#"><img src="https://www.danstapub.com/wp-content/uploads/2025/02/tW68oW9kC2HcoeJv7YT3gc-1280-80.jpg" /></a>
          <div className="text-ali-right">
            <h1>API OpenAI</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus 
              animi blanditiis autem quisquam laborum recusandae cupiditate architecto ex 
              totam in aliquam dignissimos nemo molestiae ut explicabo, et impedit quia eaque?</p>
              <button>Try now</button>
          </div>
        </section>
        <hr />
        <section className='openai-anonymous'>
          <div className="text-ali-left">
            <h1>OpenAI x Anonymous</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto odio 
              fugit. Laudantium itaque omnis quidem labore, incidunt est nisi sunt perferendis libero 
              illo beatae dolorem rem quae voluptatum pariatur.</p>
              <button>Learn more</button>
          </div>
          <img src={colab}/>
        </section>
        <hr />
      </section>
      <Icon />
      <Footer />
    </>
  )
}

export default App
