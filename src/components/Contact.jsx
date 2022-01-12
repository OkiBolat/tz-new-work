import React from "react";


const Contact = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Mail: {props.email}</h1>
      <h1>Phone: {props.phone}</h1>
    </div>
  )
}

export default Contact;
