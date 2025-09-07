import './css/style.css'
import Header from './components/Header'
import Apresentation from './components/Apresentation'
import ChangeIcon from './hooks/ChangeIcon'
import Icon from './components/Icon'

function App() {

  ChangeIcon();

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
