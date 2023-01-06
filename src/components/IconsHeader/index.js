import profile from '../../img/perfil.svg'
import cart from '../../img/sacola.svg'
import styled from 'styled-components'

const Icons = styled.ul`
    display: flex;
    align-items: center;
`
const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icons = [profile,cart]

function IconsHeader(){
    return (
        <Icons>
            {icons.map((icon)=>(
                <Icon><img src={icon}></img></Icon>
            ))}
        </Icons>
    )
}
export default IconsHeader