import Icon from '../components/Icon'
import '../css/error.css'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <section className='ctn-error'>
        <article className='error'>
            <h1>Ops! ERROR <span>401</span></h1>
            <h2>page not found!</h2>
            <Link to='/'>Return</Link>
        </article>
        <Icon />
    </section>
  )
}

export default Error
