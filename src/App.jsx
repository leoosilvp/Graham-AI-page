import './css/style.css'
import ChangeIcon from './hooks/ChangeIcon'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Footer from './components/Footer'

import imgLoginInterface from './assets/img/login-interface.png'
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
          <h1>Simplified Access</h1>
          <h2>Simplified Login via GitHub. Just your username to get started.</h2>
          <img src={imgLoginInterface} alt="interface" />
          <div className="content-interface">
            <p>Key Features That Make Graham Unique</p>
            <section className="ctn-cards-interface">
              <article className="card-interface">
                <p><i className='fa-solid fa-hexagon-nodes'></i></p>
                <h2>Adaptive Intelligence</h2>
                <h3>Graham learns from your interactions, offering responses and solutions that become increasingly aligned with your needs.</h3>
              </article>

              <article className="card-interface">
                <p><i className='fa-solid fa-network-wired'></i></p>
                <h2>Continuous Integration</h2>
                <h3>Connect Graham to your favorite tools. Automate tasks and centralize your workflow in one place.</h3>
              </article>

              <article className="card-interface">
                <p><i className='fa-solid fa-layer-group'></i></p>
                <h2>Comprehensive Capacity</h2>
                <h3>From analyzing complex data to creating creative content, Graham is equipped to handle a wide range of tasks.</h3>
              </article>
            </section>
          </div>
          <h1>A Completely Intuitive Interface</h1>
          <h2>Built to be powerful, designed to be simple. Get started in seconds, with no learning curves.</h2>
          <img src={imgInterface} alt="interface" />
        </section>
        <hr />
        <section className='api'>
          <a href="#"><img src="https://www.danstapub.com/wp-content/uploads/2025/02/tW68oW9kC2HcoeJv7YT3gc-1280-80.jpg" /></a>
          <div className="text-ali-right">
            <h1>API OpenAI</h1>
            <p>We leverage OpenAI's cutting-edge technology to ensure Graham has a robust foundation and 
              world-class natural language processing power. This allows us to deliver more accurate, creative, 
              and contextually relevant responses.</p>
            <button>Try now</button>
          </div>
        </section>
        <hr />
        <section className='about'>
          <h1>About</h1>
          <div className="content-about">
            <h2>In a world saturated with information, clarity is the greatest power. Graham was born from the need for a 
              tool that not only processed data, but also understood it. Our mission is to transform complexity into simplicity, 
              allowing you to focus on what really matters: innovation.
            </h2>
            <h2>Conventional AI tools often require complex configurations and offer a fragmented experience.
              Graham breaks that barrier. We built it on a foundation of user-centered design,
              ensuring that every interaction is intuitive, efficient, and effortlessly produces meaningful results.
            </h2>
            <h2>We're committed to continuous evolution. Graham is more than a product; it's a growing partner,
              constantly updated with the latest innovations in artificial intelligence to ensure
              you're always one step ahead. The future of intelligent productivity starts here.
            </h2>
          </div>
        </section>
        <hr />
        <section className='openai-anonymous'>
          <div className="text-ali-left">
            <h1>OpenAI x Graham</h1>
            <p>While OpenAI provides the engine, Graham builds the experience. We optimize and refine this powerful 
              technology into an intuitive interface, unique features, and a workflow specifically designed to maximize 
              your productivity.</p>
            <button>Learn more</button>
          </div>
          <a href="#"><img src={colab} /></a>
        </section>
        <hr />
      </section>
      <Icon />
      <Footer />
    </>
  )
}

export default App
