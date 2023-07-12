import { useState } from 'react';
import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '../Menu';

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const menuOnClickListener = () => {
        isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
    }

    return (
        <>
            {isOpenMenu && <Menu />}
            <div className='header'>
                <div onClick={() => { menuOnClickListener() }} className='header__menu-icon'><MenuIcon /></div>
                <p className='header__title'>Clothes shop</p>
                <div className='header__icons'>
                    <p className='header__icon'>search</p>
                    <p className='header__icon'>account</p>
                    <p className='header__icon'>cart</p>
                </div>
            </div>
        </>
    )
}
