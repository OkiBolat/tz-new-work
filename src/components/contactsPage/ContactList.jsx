import React from "react";
import AddContactModal from "../authPage/AddContactModal.jsx"
import Contacts from "./Contacts";
import styles from './ContactList.module.css'

const ContactList = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1>Контактная книжка</h1>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.modal}>
          <AddContactModal />
        </div>
        <div className={styles.contacts}>
          <Contacts contacts={props.contacts} />
        </div>
      </div>
    </div>
  )
}

export default ContactList;