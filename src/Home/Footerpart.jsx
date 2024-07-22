import React from 'react'
import Style from "./Footerpart.module.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footerpart = () => {
  return (
    <>
        <section className={Style.sec13}>
<div className={Style.footer1}>
<h1>Hungry Brunch</h1>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
 <div className={Style.footericon}>
 <FaTwitter />  <FaFacebook />  <FaInstagram />   
 </div>
</div>

<div className={Style.footer2}>
<h1>Open Hours</h1>
<div className={Style.open}>
<p className={Style.p1}>Monday  </p><p>9:00 - 24:00</p>

</div>
<div className={Style.open}>
<p className={Style.p1}>Tuesday  </p><p>9:00 - 24:00</p>

</div>
<div className={Style.open}>
<p className={Style.p1}>Wednesday  </p><p>9:00 - 24:00</p>

</div>
<div className={Style.open}>
<p className={Style.p1}>Thursday </p><p>9:00 - 24:00</p>

</div>
<div className={Style.open}>
<p className={Style.p1}>Friday  </p><p>9:00 - 24:00</p>

</div>
<div className={Style.open}>
<p className={Style.p1}>Saturday
</p><p>9:00 - 24:00</p>

</div>
<div className={Style.open}>
<p className={Style.p1}>Sunday </p><p>9:00 - 24:00</p>

</div>

 
</div>
<div className={Style.footer3}>
<h1>Instagram</h1>
<div className={Style.footerimg}>
<div className={Style.hlf1}>
<img className={Style.fimg1} src="https://media.istockphoto.com/id/504754220/photo/cocktails.jpg?s=612x612&w=0&k=20&c=NxIzGT-LbUS0BAPoCMDY3mEp96AnIxxldbWmFMeeD-A=" alt="" />

<img className={Style.fimg2} src="https://media.istockphoto.com/id/1093661558/photo/indian-dish-chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=HyD_ak5-tCeEPooVnTnoCERfEKArb5s7KikTKe3ZoLU=" alt="" /></div>
<div className={Style.hlf2}>
<img className={Style.fimg3} src="https://media.istockphoto.com/id/991732782/photo/close-up-of-sommelier-serving-red-wine-at-fine-dining-restaurant.jpg?s=612x612&w=0&k=20&c=KPTJbmK7ryWZczvKJXkvCiwtc_BcX0oqJJN91qG2yVw=" alt="" />
<img className={Style.fimg4} src="https://media.istockphoto.com/id/1073455468/photo/view-inside-a-bar-no-people.jpg?s=612x612&w=0&k=20&c=srhxpa6pmgfoYZvLyH6Qj7zu7_yoVYwfr8QyjI7frKw=" alt="" />
</div>
</div>
  
 </div>

<div className={Style.footer4}>
<h1>Newsletter</h1>
<p>Far far away, behind the word mountains, far from the countries</p>
 <input type="text" placeholder='Enter your Email' />
 <button >Subscribe</button>
</div>

    </section>
    <h1 className={Style.foterlst}>Copyright ©2024 All rights reserved | This template is made with 💟 by Colorlib</h1>
    
    </>
  )
}

export default Footerpart
