import './style.css'

const textOptions = ['Categories','Shelf','Favorites']

function OptionsHeader(){
    return (
        <ul className='options'>
            {textOptions.map((text)=>(
                <li className='option'><p>{text}</p></li>
            ))}
        </ul>
    )
}
export default OptionsHeader