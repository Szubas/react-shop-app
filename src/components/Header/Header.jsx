import { useState } from 'react';
import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Menu } from '../Menu';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const menuOnClickListener = () => {
        isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
    }

    const closeMenu = () => {
        setIsOpenMenu(false)
    }


    return (
        <>
            {isOpenMenu && <Menu onItemClick={() => { closeMenu() }} />}
            <div className='header'>
                <div onClick={() => { menuOnClickListener() }} className='header__menu-icon'><MenuIcon /></div>
                <Link to='/' className='header__title'>CLOTHES SHOP</Link>
                <div className='header__icons'>
                    <Link to='./cart' className='header__icon'><ShoppingCartIcon /></Link>
                    <Link to='./account' className='header__icon'><PersonIcon /></Link>
                </div>
            </div>
        </>
    )
}
