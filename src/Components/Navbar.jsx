import React, {useState} from 'react';
import logo from '../../public/images/logo.png';
import {Link} from 'react-scroll';


function Navbar() {
  const[nav,setnav] = useState(false);

  const changeBackground = ()=>{
    if (window.scrollY >= 50){
      setnav(true);
    }else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active':'nav'}>

    </nav>
  );
}

export default Navbar;
