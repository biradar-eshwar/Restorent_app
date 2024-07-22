import React from 'react';
import Style from "./Navbar.module.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className={Style.nav1}>
    <div className={Style.logo}>
    <h1>Hungry Brunch</h1>
    {/* <img src="https://dynamic.brandcrowd.com/asset/logo/187d6ef1-e8ab-4930-80b6-1c90203611c2/logo-search-grid-1x?logoTemplateVersion=1&v=638549258480200000&text=Hungry+Brunch" alt="" /> */}
    </div>
    <div className={Style.div1}>
        <ul>
            <li>
                <Link to='/' className={Style.active}  >Home</Link>
            </li>
            <li>
                <Link to='/menu ' >Menu</Link>
            </li>
            <li>
                <Link to='/About' >About</Link>
            </li>
            <li>
                <Link to='/Contact' >Contact</Link>
            </li>
        </ul>
    </div>

  </nav>
  )
}

export default Navbar
