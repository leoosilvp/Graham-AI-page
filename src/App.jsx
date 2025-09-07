import './css/style.css'
import Header from './components/Header'
import Apresentation from './components/Apresentation'
import Icon from './components/Icon'

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Apresentation />
      </div>
      <Icon />
    </>
  )
}

export default App
