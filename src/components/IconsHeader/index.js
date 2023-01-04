import profile from '../../img/perfil.svg'
import cart from '../../img/sacola.svg'
import './style.css'

const icons = [profile,cart]

function IconsHeader(){
    return (
        <ul className='icons'>
            {icons.map((icon)=>(
                <li className='icon'><img src={icon}></img></li>
            ))}
        </ul>
    )
}
export default IconsHeader