import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/reducers/actions";

const Contact = (props) => {
  const dispatch = useDispatch()

  const deleteItem = (id) => {
    dispatch(deleteContact({ id }))
    console.log(id)
  }

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
            <th>Телефон</th>
            <th></th>
          </tr>
        </thead>
        {props.contacts.map(item => (
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <i onClick={() => deleteItem(item.id)} class="bi bi-trash" />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  )
}

export default Contact;
