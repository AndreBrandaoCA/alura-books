import './style.css';
import Logo from '../../components/Logo';
import OptionsHeader from '../../components/OptionsHeader';
import IconsHeader from '../../components/IconsHeader';

function Header(){
    return (
        <header className='App-header'>
                <Logo/>
                <OptionsHeader/>
                <IconsHeader/>
        </header>
    )
}

export default Header