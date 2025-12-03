import logo from '../assets/img/icon-light.svg'
import '../css/icon.css'

function Icon(){
    return(
        <article className='icon'>
            <a href="https://ai-graham.vercel.app/"><img src={logo} alt="logo" /></a>
        </article>
    )
}

export default Icon