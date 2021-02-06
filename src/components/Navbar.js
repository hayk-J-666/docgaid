import React, { useState } from 'react';
import './../scss/navbar.scss'
import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-scroll';
import logo from './../assets/images/Logo.png';

function Navbar({rerender, state}) {
    const [hamburgerActiv, setHamburgerActiv] = useState(false);
    const hamburgerON = () => {
      setHamburgerActiv(false);
    };
    const hamburgerOFF = () => {
      setHamburgerActiv(true);
    };


  return (
    <>
      <section className='menu'>
        <div className='menu-container'>
          <Link to='home' className='menu__logo' smooth={true} duration={1000}>
            <img src={logo} alt=''/>
          </Link>
          <div className='menu__navigation'>
            <Link to='aboutUs'  smooth={true} duration={1000}>
              About Us
            </Link>
            <Link to='klar'  smooth={true} duration={1000}>
              Klar
            </Link>
            <Link to='dein'  smooth={true} duration={1000}>
              Dein
            </Link>
            <Link to='contacts'  smooth={true} duration={1000}>
              Contacts
            </Link>
          </div>
          <div className='hamburger-mb-menu' onClick={hamburgerOFF}>
            <span
              className={!hamburgerActiv ? 'hamburger1' : 'hamburger11'}
            ></span>
            <span
              className={!hamburgerActiv ? 'hamburger2' : 'hamburger22'}
            ></span>
            <span
              className={!hamburgerActiv ? 'hamburger3' : 'hamburger33'}
            ></span>
          </div>
          <div className={hamburgerActiv ? 'menu-blok-active' : 'menu-blok'} onClick={hamburgerON}>
            <div className='menu-blok__container' onClick={(e) => {e.stopPropagation(); }}>
              <ul className='menu-blok__navigation'>
                <li>
                  <Link to='aboutUs'  smooth={true} duration={1000} onClick={hamburgerON}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='klar'  smooth={true} duration={1000} onClick={hamburgerON}>
                    Klar
                  </Link>
                </li>
                <li>
                  <Link to='dein'  smooth={true} duration={1000} onClick={hamburgerON}>
                    Dein
                  </Link>
                </li>
                <li>
                  <Link to='contacts'  smooth={true} duration={1000} onClick={hamburgerON}>
                    Contacts
                  </Link>
                </li>
                <li>
                  <a href="tel:+49 (0)30 621 36 54" onClick={hamburgerON}>Telefon: +49 (0)30 621 36 54</a>
                </li>
                <li>
                  <a href="tel:+49 (0)30 627 055 26" onClick={hamburgerON}>Telefax: +49 (0)30 627 055 26</a> 
                </li>
                <li> 
                  <a href="mailto: info@zp-am.de" onClick={hamburgerON}>E-Mail: info@zp-am.de</a>
                </li>
              </ul>
            </div>
            </div>
        </div>
    </section>
    </>
 );  
}
  
export default  Navbar;