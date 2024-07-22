import React from 'react'
import Style from"./Contact.module.css"
import { Link } from 'react-router-dom'
import Footerpart from '../Home/Footerpart'
import { MdKeyboardArrowRight } from "react-icons/md";
const Contact = () => {
  return (
<>
<section className={Style.sec1}>
  <img src="https://media.istockphoto.com/id/1250567402/photo/table-top-view-of-indian-food.jpg?s=612x612&w=0&k=20&c=pyL7bJn4SSYuMJnBO4zBoX5vFONZTHRBt-M70DZAjk8=" height="498px" width="100%" alt="" />
  <h1>Contact</h1>
  <h2>
    <Link className={Style.home} to="/">Home</Link>
    </h2>
  <h3><a>Contact</a></h3>
</section>
<section className={Style.sec2}>
  <div className={Style.div1}>
<img src="https://media.istockphoto.com/id/2159298553/photo/contact-us-icons-on-virtual-screen-email-call-chat-or-message.jpg?s=612x612&w=0&k=20&c=-8vQSHJDkDLvJnPZiYYMAVIhxCchkSJsAtd3oBYXdpU=" height="546px" width="100%" alt="" />
  </div>
  <div className={Style.div2}>
    <h1>Contact Us</h1>
    <br/>
    <input type="text" placeholder='Your Name' />
    <br/>
<input type="email" placeholder='Your email' />
<br/>
<input type="text" placeholder='Subject' />
<br/>
<textarea className={Style.para} cols="30" placeholder='Message' rows="10"></textarea>
<br/>
<button>Send Message</button>
  </div>
  

</section>
<section className={Style.sec3}>

<h1>Contact Information</h1>
<br/>
<div>
<p>Address: 198 West 21th Street,
  <br/> Suite 721 New York NY 10016

</p>
<p>Phone:23432566</p>
<p>Email:@gmail.com</p>
</div>
</section>
<section>
  <Footerpart/>
</section>
</>
  )
}

export default Contact
