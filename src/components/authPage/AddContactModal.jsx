import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { addContacts } from "../../redux/reducers/actions"; 


const AddContactModal = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const onChange = ({ target }) => {
    setFormData((data) => ({ ...data, [target.name]: target.value }));
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addContacts(formData))
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Добавить контакт
      </Button>
      <Modal className='' show={show} onHide={handleClose}>
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
              Добавить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}




export default AddContactModal;