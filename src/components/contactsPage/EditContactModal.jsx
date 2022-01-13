import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import {editContact } from "../../redux/reducers/actions"; 


const EditContactModal = ({item}) => {


  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone
  })

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const onChange = ({ target }) => {
    setFormData((data) => ({ ...data, [target.name]: target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editContact(formData))
    setShow(false)
  }

  return (
    <>
    <i variant="primary" onClick={handleShow} class="bi bi-credit-card-2-front"/>
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




export default EditContactModal;