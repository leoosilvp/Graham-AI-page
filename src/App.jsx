import './css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChangeIcon from './hooks/ChangeIcon'
import Home from './routes/Home';
import Error from './routes/Error';
import Contribute from './routes/Contribute';

function App() {

  ChangeIcon();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/Contribute' element={<Contribute />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
