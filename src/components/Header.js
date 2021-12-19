import React , { useState } from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link , Route } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Header = ({cartItem}) => {
    const [show , setShow] = useState('false')

    const onClick = () => {
       if(show === 'false'){
           setShow('true')
       }
       else{
           setShow('false')

       }
    }


    const logoOnClick = () => {
        if(show === 'true'){
            setShow('false')
        }
      
     }
 
 





    return (
        <div className='nav__header'>
            <div className='nav__container'>
   <Link className='nav__link' to="/">   <img onClick={logoOnClick} src='https://gostore-be87.kxcdn.com/gostore/wp-content/themes/gostore/images/logo.png'/> </Link>
 

            <div className='header__menu'>
                <MenuIcon onClick={onClick}/> <span className='header__menuspan'>
                 
                   <Link to='/cart' className='nav__link'> <ShoppingBasketIcon/> <p>
                       <span> {cartItem.length}</span>
                    </p> </Link>
                </span>
            </div>

            <nav className={`header__nav ${show=== 'true' ? 'hideMenu': 'showmenu'}`}>
                <ul>
                    <li ><Link onClick={onClick} to='/' className='nav__link'>
                        Home
                        </Link>
                    </li>
                   
                    <li ><Link to='/shop'  onClick={onClick} className='nav__link'>
                        Shop
                        </Link>
                    </li>
                    <li  ><Link to='/blogpage' onClick={onClick} className='nav__link'>
                        BlogPage
                        </Link>
                    </li>
                    <li className='header__cart'><Link to='/cart' className='nav_-link'>
                    <ShoppingBasketIcon/><p>{cartItem.length}</p>
                    </Link>
                    </li>

                </ul>
            </nav>
            </div>
        </div>
    )
}

export default Header
