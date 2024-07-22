import React from 'react'
import Style from "./Home.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CountUp from 'react-countup';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: null,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000 
  
};
const Home = () => {
  return (
    <>
    <section className={Style.sec1}>

    <div  className={Style.slider}>
       <Slider className={Style.slider2} {...settings}>
     
      <div className={Style.slider1}>
      <h1>BEST RESTORENT</h1>
   <h4>Hungry Brunch</h4> 
        

      <img src="https://media.istockphoto.com/id/1276658604/photo/brazilian-gastronomy-fish-muqueca-with-shrimp-accompanied-by-rice-mush-and-manioc-flour.jpg?s=612x612&w=0&k=20&c=bTMATzelgAxtkpoiQE-lVD2GbQJ53k4i4oigNRA38N8=" height="580px" alt="" />
      </div>
      <div className={Style.slider1}>
      <h1>Nutritious &amp; Tasty</h1>
        <h4>Hungry Brunch</h4>
        

      <img src="https://media.istockphoto.com/id/1773177455/photo/dark-mood-variety-of-vegan-herbs-and-spices.jpg?s=612x612&w=0&k=20&c=tx3Bif5U92aUCtmFPpPp2OOimiCbSgw4KI3dvMflbqs=" alt="" />
      </div>
      <div className={Style.slider1}>

      <h1>Delicious Specialties</h1>
        <h4>Hungry Brunch</h4>
        

      <img src="https://media.istockphoto.com/id/668891798/photo/italian-restaurant-course-meal.jpg?s=2048x2048&w=is&k=20&c=ODDnc0-SVjDcOYXwI2XhWH-0gDE0r0QvoH9Pm4yGhAI=" alt="" />
      </div>

    </Slider>

 
      </div>

  );


    </section>
    <section className={Style.niku}>
    <div className={Style.e1}>

<img src="https://media.istockphoto.com/id/1363311536/photo/tandoori-chicken.jpg?s=612x612&w=0&k=20&c=h8sNMzT9SsJzFL8fxkw2icHEneneGsKXdyPckOvEzsk="   alt="" />
<h3>Grilled Beef with potatoes</h3>
<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
</div>
<div className={Style.e2}>

<img src="https://media.istockphoto.com/id/1091500222/photo/grilled-salmon-with-french-fries-and-asparagus.jpg?s=612x612&w=0&k=20&c=nd5Kr3iq9ATyf0j9etHOrqz2yyG7QsoahEBXvUkf4qY=" alt="" />
<h3>Grilled Beef with potatoes</h3>
<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
</div>
<div className={Style.e3}>

<img src="https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.jpg?s=612x612&w=0&k=20&c=tBMCVZt7CW0KRBqkRg-MDySzxMiQqzUamGU9IHnH13Q=" alt="" />
<h3>Grilled Beef with potatoes</h3>
<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
</div>
<div className={Style.e4}>

<img src="https://media.istockphoto.com/id/510082826/photo/italian-pasta-with-seafood-and-herbs.jpg?s=612x612&w=0&k=20&c=DNf2FQ9-tuVRiqe0K_7HR8s3zpteQXMCAblv6k0jjyU=" alt="" />
<h3>Grilled Beef with potatoes</h3>
<p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>

</div>
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
          <h1>Business Meetings</h1>
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
    <section className={Style.sec6}>
<div className={Style.special}>
<span class={Style.subheading2}>Specialties</span>
<br/>
<br/>

<h2 class={Style.ourmenu}>Our Menu</h2>
</div>
    </section>

    <section className={Style.sec7}>
      <div className={Style.menu1}>
        <div className={Style.menuc1}>
      <img src="https://media.istockphoto.com/id/174270012/photo/breakfast.jpg?s=612x612&w=0&k=20&c=gTAFHNDbe2j1dP1JtDLPi26BruQOM6QR4y2bXB7j7YU=" height="300px" width="299px" alt="" />
        </div>
        <div className={Style.menuc1}>
          <h1>
          Grilled Beef <br/> with potatoes
          <h2>$29</h2>
          </h1>
          <p>Meat, Potatoes, Rice, <br/> Tomatoe</p>
          <button className={Style.btn}>order Now</button>
          

</div>
<div className={Style.menuc1}>
<img src="https://media.istockphoto.com/id/179539996/photo/matra-chaat-with-kulcha.jpg?s=612x612&w=0&k=20&c=IVOZxdbzRzPOGwxTRbv0agfMH4nodG-RkwQ345PqZiI=" height="300px" width="299px" alt="" />
</div>
<div className={Style.menuc1}>
<h1>
          Grilled Beef <br/> with potatoes
          <h2>$29</h2>
          </h1>
          <p>Meat, Potatoes, Rice, <br/> Tomatoe</p>
          <button className={Style.btn}>order Now</button>

</div>
      </div>
      <div className={Style.menu1}>
        <div className={Style.menuc1}>
        <h1>
          Grilled Beef <br/> with potatoes
          <h2>$29</h2>
          </h1>
          <p>Meat, Potatoes, Rice, <br/> Tomatoe</p>
          <button className={Style.btn}>order Now</button>
        </div>
        <div className={Style.menuc1}>
<img src="https://media.istockphoto.com/id/896682876/photo/regional-food-backgrounds-dried-date-palm-fruits-fresh-orange-juice-samosa-snack-and-blurred.jpg?s=612x612&w=0&k=20&c=DzXg9_QmMgDR5BMSFwmR2rIxLnBo5p9VE5rrEYcj7i8=" height="300px" width="299px" alt="" />
</div>
<div className={Style.menuc1}>
<h1>
          Grilled Beef <br/> with potatoes
          <h2>$29</h2>
          </h1>
          <p>Meat, Potatoes, Rice, <br/> Tomatoe</p>
          <button className={Style.btn}>order Now</button>
</div>
<div className={Style.menuc1}>
<img src="https://media.istockphoto.com/id/479542175/photo/group-of-indian-food-or-indian-thali.jpg?s=612x612&w=0&k=20&c=-2kv7u--uJRIKM1Q-pZbFIi71j9reC0dxdThdZXBYNg=" height="300px" width="299px" alt="" />
</div>
      </div>
      <div className={Style.menu1}>
        <div className={Style.menuc1}>
<img src="https://media.istockphoto.com/id/502759669/photo/halwa-puri-breakfast.jpg?s=612x612&w=0&k=20&c=pAVZBHulOXX7o3HOXgmRQAGsTFJuoAL3UbZirxLnpJg=" height="300px" width="299px" alt="" />
        </div>
        <div className={Style.menuc1}>
        <h1>
          Grilled Beef <br/> with potatoes
          <h2>$29</h2>
          </h1>
          <p>Meat, Potatoes, Rice, <br/> Tomatoe</p>
          <button className={Style.btn}>order Now</button>
</div>
<div className={Style.menuc1}>
<img src="https://media.istockphoto.com/id/1620129740/photo/selective-focus-of-south-indian-famous-food-idli-vada-with-sambar-and-chatney.jpg?s=612x612&w=0&k=20&c=sUepsZL9VXtY-J46o8pX0B06tXm-cgGGS-N5JIlaKUY=" height="300px" width="299px" alt="" />
</div>
<div className={Style.menuc1}>
<h1>
          Grilled Beef <br/> with potatoes
          <h2>$29</h2>
          </h1>
          <p>Meat, Potatoes, Rice, <br/> Tomatoe</p>
          <button className={Style.btn}>order Now</button>
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
<h1>Rebeca</h1>
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
    {/* sec11 */}
    <section className={Style.sec11}>
<div>
<span class={Style.sub11}>Blog</span>
<h1>Recent Posts</h1>
</div>
    </section>
    <section className={Style.sec12}>
      <div className={Style.blog}>
        <img src="https://media.istockphoto.com/id/1201981415/photo/selection-of-alcohol-bottles-on-shelves-on-display-at-a-bar-in-new-york-united-states-of.jpg?s=612x612&w=0&k=20&c=5ZQOSACKhClDl43ljzTebDejt-bcJt_qTr25a6nMrM4=" alt="" />
<p>Sept. 06, 2019 Admin</p>

<h1>Taste the delicious foods in <br/> Asia</h1>
<button>Read More</button>
      </div>
      <div className={Style.blog}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
<p>Sept. 06, 2019 Admin</p>

<h1>Taste the delicious foods in <br/> Asia</h1>
<button>Read More</button>
      </div>
      <div className={Style.blog}>
        <img src="https://media.istockphoto.com/id/1220042369/photo/glasses-of-martini-cocktail.jpg?s=612x612&w=0&k=20&c=eHmgfa8U1PtZOWN-Y8I66zoPjetttryIofiVFhcOry8=" alt="" />
<p>Sept. 06, 2019 Admin</p>

<h1>Taste the delicious foods in <br/> Asia</h1>
<button>Read More</button>
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

export default Home
