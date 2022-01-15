import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { addContactThunk,editContactThunk } from "../../redux/contacts/actionCreator";
import { CONTACT_MODAL_TYPES } from "../../constants/contacts";

function getInitialFormData(type, contact) {
  switch (type) {
    case CONTACT_MODAL_TYPES.EDIT:
      return contact;
    case CONTACT_MODAL_TYPES.CREATE:
    default:
      return {
        name: '',
        email: '',
        phone: ''
      };
  }
}

const ContactModal = ({ contact, type, isOpen, onClose }) => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(getInitialFormData(type, contact));

  const onChange = ({ target }) => {
    setFormData((data) => ({ ...data, [target.name]: target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (type === CONTACT_MODAL_TYPES.EDIT) dispatch(editContactThunk(formData));
    else dispatch(addContactThunk(formData));
    setFormData({})
    onClose();
  }

  return (
    <Modal className=''
      show={isOpen}
      onHide={onClose}
    >
      <Modal.Header>
        {type === CONTACT_MODAL_TYPES.EDIT
          ? 'Изменить контакт'
          : 'Добавить контакт'
        }
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Имя контакта</Form.Label>
            <Form.Control onChange={onChange} value={formData.name} name="name" type="name" placeholder="Имя..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Введите почта</Form.Label>
            <Form.Control onChange={onChange} value={formData.email} name="email" type="email" placeholder="Почта..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Введите телефон</Form.Label>
            <Form.Control onChange={onChange} value={formData.phone} name="phone" type="number" placeholder="+(---)-------" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {type === CONTACT_MODAL_TYPES.EDIT
              ? 'Изменить контакт'
              : 'Добавить контакт'
            }
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;