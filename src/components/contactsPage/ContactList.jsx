import React from "react";
import AddContactModal from "../authPage/AddContactModal.jsx"
import Contact from "./Contact";

const ContactList = (props) => {
  return (
    <div>
      <div>
        <AddContactModal />
      </div>
      <div>
        {props.contacts.map(item => (
          <Contact email={item.mail}
            phone={item.phone}
            name={item.name}
          />))}
      </div>
    </div>
  )
}

export default ContactList;