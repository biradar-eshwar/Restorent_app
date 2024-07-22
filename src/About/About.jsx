import React from 'react'
import Style from "./About.module.css"
import CountUp from 'react-countup';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom'
const About = () => {
  return (
<>
<section className={Style.sec1}>
<img src="https://media.istockphoto.com/id/1208081427/photo/veg-manchurian-very-popular-chinese-snack-popular-in-india.jpg?s=612x612&w=0&k=20&c=C_Lsxts8SAyGTaMwiAx_S2PEaRzM0V1r93S6FeysW8I=" height="487px" width="100%" alt="" />

<h1>About</h1>
<h2><Link to="/">home</Link></h2>
<h3><a>About</a></h3>

</section>
<section className={Style.sec2}>
      <div className={Style.sub1}>
<img src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoZWZ8ZW58MHx8MHx8fDA%3D" height="490px" width="350px" alt="" />
<img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" height="490px" width="350px" alt="" />
      </div>
      <div className={Style.sub2}>
        <div className={Style.rlogo}>
        <span class={Style.d1}>About</span>
        <h2 class={Style.text}>Hungry Brunch Restaurant</h2>
        </div>
        <div className={Style.para}>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        <div className={Style.time}>
        <span>Mon - Fri <strong>8 AM - 11 PM</strong></span>
        </div>
        <div className={Style.no}>
          <h1>+ 1-978-123-4567</h1>
        </div>

</div>

    </section>
    <section className={Style.sec3}>
<div className={Style.count1}>
<CountUp className={Style.c1} start={0} end={10} duration={6} />
<p>YEARS OF EXPERIENCED</p>

</div>
<div className={Style.count1}>
<CountUp className={Style.c2} start={0} end={100} duration={3} />
<p>MENUS/DISH</p>
</div>
<div className={Style.count1}>
<CountUp className={Style.c2} start={0} end={50} duration={4} />
<p>STAFFS</p>
</div>
<div className={Style.count1}>
<CountUp className={Style.c2} start={0} end={15000} duration={3} />
<p>HAPPY CUSTOMERS</p>
</div>
<h2>A small river named Duden flows by their place and supplies it with the necessary regelialia.

</h2>
    </section>
    <section className={Style.sec4}>
      {/* <p>Services</p> */}
      
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTFJG2_evHpM4XDsJP5x3IrBmNyN7LQEEQA&s" height="189px" width="199px"  alt="" /> */}
    
        <span class={Style.s1}>Services</span>
        <h2>Catering Services</h2>
    </section>
    <section className={Style.sec5}>
      <div className={Style.card}>
        <div className={Style.scard}>
        <div className={Style.icon}>
          <img className={Style.cake} src="https://media.istockphoto.com/id/1359634016/photo/ocean-themed-birthday-cake.jpg?s=612x612&w=0&k=20&c=86clHOjk-0rjjDPJsKleHWY8SFg0RZLvgSKPfh7qsGM=" height="80px" width="90px"  alt="" />  </div>
          <h1>Birthday Party</h1>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        
        </div>

      </div>
      <div className={Style.card}>
        <div className={Style.scard}>
        <div className={Style.icon}>
          <img className={Style.cake} src="https://media.istockphoto.com/id/1467898033/photo/team-business-meeting-presentation-hand-businessman-working-project-in-modern-office-laptop.jpg?s=612x612&w=0&k=20&c=-qycIXUE3J6GEUaYadoEfWd_HdSfdHebCEHJS17ZdAA=" height="80px" width="90px"  alt="" />  </div>
          <h1>BusinessMeetings</h1>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        
        </div>

      </div>
      <div className={Style.card}>
        <div className={Style.scard}>
        <div className={Style.icon}>
          <img className={Style.cake} src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=" height="80px" width="90px"  alt="" />  </div>
          <h1>Wedding Party</h1>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        
        </div>

      </div>

    </section> 
    <section className={Style.sec8}>
    <span class={Style.sub}>Chef</span>
    <h1>Our Master Chef
    </h1>
    </section>
    <section className={Style.sec9}>
      <div className={Style.chef}>
<img className={Style.chefimg} src="https://media.istockphoto.com/id/641991356/photo/chef-cook-at-the-kitchen.jpg?s=612x612&w=0&k=20&c=SkMJvu_k2J5PEV0mJ8tDSBvsMRfnxO3VyQMU1vUzgJ4=" alt="" />
<h1>John Smooth</h1>
<p>Restaurant Owner</p>
<div className={Style.cheficon}>
<FaTwitter />  <FaFacebook />  <FaInstagram />  <FaGooglePlusG />

</div>
      </div>
      <div className={Style.chef}>
<img className={Style.chefimg} src="https://media.istockphoto.com/id/486860378/photo/my-chefs-know-how-to-cook.jpg?s=612x612&w=0&k=20&c=F7e0Nr5Xr56VJS1NFffBFu_zkcW2ifsw6EHxvKPGh38=" alt="" />
<h1>Rebeca Welson</h1>
<p>Head Chef</p>
<div className={Style.cheficon}>
<FaTwitter />  <FaFacebook />  <FaInstagram />  <FaGooglePlusG />

</div>
      </div>
      <div className={Style.chef}>
<img className={Style.chefimg} src="https://media.istockphoto.com/id/1178076349/photo/smiling-young-cook-wearing-chefs-hat.jpg?s=612x612&w=0&k=20&c=5aTVOYcCgD_ioHJE-v2nHqJLXyZdKkBNdO0sCKDB9uM=" alt="" />
<h1>Liza</h1>
<p>Chef</p>
<div className={Style.cheficon}>
<FaTwitter />  <FaFacebook />  <FaInstagram />  <FaGooglePlusG />

</div>
      </div>
      <div className={Style.chef}>
<img className={Style.chefimg} src="https://media.istockphoto.com/id/803934008/photo/female-chef-in-kitchen.jpg?s=612x612&w=0&k=20&c=jYq8CNkSAvzu8QwpKY71xQ2HuqKPWqDjBUcj72XtyEU=" alt="" />
<h1>Liza</h1>
<p>Chef</p>
<div className={Style.cheficon}>
<FaTwitter />  <FaFacebook />  <FaInstagram />  <FaGooglePlusG />

</div>
      </div>
    </section>
    <section className={Style.sec10}>
<div className={Style.form}>
<div>
<span class={Style.subheading}>Book a table</span>
<h1>Make Reservation</h1>
</div>

</div>
<div className={Style.form1}>
<div className={Style.book}>
  <div className={Style.bookname}>
<h2>Name</h2>
<input className={Style.input} type="text" placeholder='Your Name' />


  </div>
  <div className={Style.bookname}>
  <h2>Email</h2>
<input className={Style.input} type="text" placeholder='Your Email' />

  </div>
</div>
<div className={Style.book}>
  <div className={Style.bookname}>
<h2>Phone</h2>
<input className={Style.input} type="text" placeholder='Your Phone' />


  </div>
  <div className={Style.bookname}>
  <h2>Date</h2>
<input className={Style.input} type="date" placeholder='Your Date' />

  </div>
</div>
<div className={Style.book}>
  <div className={Style.bookname}>
<h2>Name</h2>
<input className={Style.input} type="time" placeholder='Your Name' />


  </div>
  <div className={Style.bookname}>
  <h2>Person</h2>
<select className={Style.nos} name='input'>
  <input type="text" placeholder='person' />
  <option value="person">person</option>
  <option value="number">1</option>
  <option value="number">2</option>
  <option value="number">3</option>
  <option value="number">4+</option>
</select>




  </div>
</div>
<button className={Style.resbtn}>Make a Reservation</button>
</div>
    </section>
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

export default About
