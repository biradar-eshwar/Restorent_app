import React from 'react'
import Style from "./Menu.module.css"
import { Link,Outlet } from 'react-router-dom';
import breakefast from "../Subpage/Breakefast";
import Lunch from "../Subpage/Lunch"
import Drinks from './../Subpage/Drinks';
import Footerpart from '../Home/Footerpart';
import Breakefast from './../Subpage/Breakefast';
import Wine from './../Subpage/Wine';
const Menu = () => {
   

  return (
  <>
  
  <section className={Style.sec1}>
    <img src="https://media.istockphoto.com/id/1315621909/photo/veg-biryani.jpg?s=612x612&w=0&k=20&c=tF9UWBwv-Y0_PfLEV8L0tMx8Lv4Cuit6Lt7k1hWTMRs=" height="496px" width="1345px" alt="" />

  </section>
  <section className={Style.sec2}>
   <div className={Style.div1}>
<Link className={Style.b1} exact to='breakefast' >Breakefast</Link>
<Link  className={Style.b1} to='Lunch'>Lunch</Link>
<Link  className={Style.b1} to='Drinks'>Drinks</Link>
<Link  className={Style.b1} to='Wine'>Wine</Link>
</div> 
  </section>
  <Outlet/>
  <section>
  <Footerpart/>
</section>
  </>
  )
}

export default Menu
