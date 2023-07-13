import './Menu.scss'
import { Link } from 'react-router-dom'

export const Menu = (props) => {

    const itemClickHandler = () => {
        props.onItemClick()
    }

    return(
        <div className='menu scale-up-center'>
            <Link to='/sale' className='menu__item' onClick={itemClickHandler}>Sale!</Link>
            <Link to='/newest' className='menu__item' onClick={itemClickHandler}>Newest</Link>
            <Link to='/women' className='menu__item' onClick={itemClickHandler}>Women</Link>
            <Link to='/men' className='menu__item' onClick={itemClickHandler}>Men</Link>
        </div>
    )
}
