import React from "react";
import Contact from "./Contact";


const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map(item => (
        <Contact email={item.mail}
                 phone={item.phone}
                 name={item.name}
        />
      )

      )}
    </div>
  )
}

export default ContactList;