import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CONTACT_MODAL_TYPES } from "../../constants/contacts";
import { deleteContactThunk } from "../../redux/contacts/actionCreator";
import ContactModal from "./ContactModal";
import styles from './Contacts.module.css'


const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch()


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null)
  const deleteItem = (id) => {
    dispatch(deleteContactThunk(id))
  }
  const onEditClick = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  }
  const onCloseModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  }

  return (
    <div>
      {selectedContact && <ContactModal
        contact={selectedContact}
        type={CONTACT_MODAL_TYPES.EDIT}
        onClose={onCloseModal}
        isOpen={isModalOpen}
      />}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
            <th>Телефон</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className={styles.icons}>
                <i onClick={() => onEditClick(contact)} className="mr-4 bi bi-pencil"/>
                <i onClick={() => deleteItem(contact.id)} className="bi bi-trash" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ContactsList;
