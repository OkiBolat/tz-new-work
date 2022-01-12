import React from "react";
import { connect } from "react-redux";
import ContactList from "./ContactList";


const ContactListContainer = (props) => {
  debugger
  return <ContactList {...props}/>
}


const mapStateToProps = (state) => ({
  contacts: state.contactsPage.contacts
})

export default connect(mapStateToProps, null)(ContactListContainer)
