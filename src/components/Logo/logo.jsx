// import React from 'react'
import './logo.css';
import SneakHeavenLogo from '../../../public/assets/img/SneakHeaven.png';

const Logo = () => {
  return (
    <div>
        {/* <img src="../public/assets/img/Sneak Heaven.png" alt="logo-sh" /> */}
        {/* <img src="../../../public/assets/img/SneakHeaven.png" alt="logo-sh" /> */}
        <img src={SneakHeavenLogo} alt="logo-sh" />
    </div>
  )
}

export default Logo
