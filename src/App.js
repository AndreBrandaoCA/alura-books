import Logo from './components/logo/index.js';
import './App.css';
import profile from './img/perfil.svg'
import cart from './img/perfil.svg'

const textOptions = ['Categories','Shelf','Favorites']
const icons = ['Profile','Cart']

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {textOptions.map((text)=>(
            <li className='option'><p>{text}</p></li>
          ) )}
        </ul>
        <ul className='icons'>
            {icons.map((icon)=>(
              <li><img src={icon}></img></li>
              
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
