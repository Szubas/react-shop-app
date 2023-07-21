import './Nav.scss'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return(
        <div className="nav">
            <Link to='/sale' className='nav__item'><a className='nav__item__sale'>Sale!</a></Link>
            <Link to='/newest' className='nav__item'>Newest</Link>
            <Link to='/women' className='nav__item'>Women</Link>
            <Link to='/men' className='nav__item'>Men</Link>
        </div>
    )
}
