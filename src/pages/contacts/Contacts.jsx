import React, { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import ContactsList from "./ContactsList";
import styles from "./Contacts.module.css"
import ContactModal from "./ContactModal";
import { CONTACT_MODAL_TYPES } from "../../constants/contacts";
import WithAuthRedirect from "../../components/WithAuthRedirect";
import { useSelector,useDispatch } from "react-redux";
import {getContactsThunk} from '../../redux/contacts/actionCreator'

const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <ContactModal
        type={CONTACT_MODAL_TYPES.CREATE}
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
      />
      <div>
        <div className={styles.header}>
          <h1>Контактная книжка</h1>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.modal}>
          <Button onClick={() => setIsModalOpen(true)}>
            Добавить контакт
          </Button>
        </div>
        <div className={styles.contacts}>
          <ContactsList contacts={contacts} />
        </div>
      </div>
    </div>
  )
}

export default WithAuthRedirect(Contacts) 