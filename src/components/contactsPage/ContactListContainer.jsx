import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../redirectLogin";
import ContactList from "./ContactList";


const ContactListContainer = (props) => {
  return <ContactList {...props}/>
}


const mapStateToProps = (state) => ({
  contacts: state.contactsPage.contacts
})

// export default connect(mapStateToProps, null)(ContactListContainer)

export default compose(
  connect(mapStateToProps,null),
  withAuthRedirect
)(ContactListContainer)