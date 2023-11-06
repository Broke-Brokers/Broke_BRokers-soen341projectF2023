import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from './../Button';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button,setButton]= useState(true);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu=() => setClick(false); 

const showButton = ()=>{
    if (window.innerWidth<=960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(()=>{showButton();},[]);
window.addEventListener('resize', showButton);
  return (
    <>
   <nav className="navbar">
    <div className="navbar-container"> 

        <Link to= "/"className="navbar-logo" onClick={closeMobileMenu}>
            BrokeBroker
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>

        


        <ul className={click? 'nav-menu active' : 'nav-menu'}>
          
                 

              <li className='nav-item'>
          <Link to='/profile' className='nav-links ' onClick={closeMobileMenu}>
            My Profile
              </Link>
              </li>

        </ul>
      {/*We will need to add  a signout */}
        {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}


        
    </div>
   </nav>
   </>
  );
}

export default Navbar;
