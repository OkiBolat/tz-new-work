import React from "react";
import contactBg from '../../contact-bg.jpeg'
const Contact = (props) => {
  return (
    <div class="w-25 card bg-dark text-white">
  <img src={contactBg} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">Email: {props.email}</p>
    <p class="card-text">Phone: {props.phone}</p>
  </div>
</div>
  )
}

export default Contact;
