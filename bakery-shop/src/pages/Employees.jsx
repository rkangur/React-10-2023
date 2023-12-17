import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Employees() {
  const [users, setUsers] = useState([]);
  const url = "https://reqres.in/api/users";
  const first_nameRef = useRef();
  const last_nameRef = useRef();
  const emailRef = useRef();
  const idRef = useRef();
  const avatarRef = useRef();

  // TODO: Load data from backend service
  useEffect(() => {
    fetch(url)
     .then(res => res.json())
     .then(userData => {
        setUsers(userData.data);
     })
  }, []);

  const addEmployee = () => {
    // TODO: Add validations
   	(validator.isEmail(emailRef.current.value) && 
    (users.find(user => user.id === validator.isNumeric(idRef.current.value)) && 
    validator.isAlphanumeric(first_nameRef.current.value) &&
    validator.isAlphanumeric(last_nameRef.current.value)))
    !== true ? 
    toast.error("Please fill in all fields and enter valid data!") :

    // TODO: Add an employee to the table
    users.push( {
      "id": Number(idRef.current.value),
      "first_name": first_nameRef.current.value,
      "last_name": last_nameRef.current.value,
      "email": emailRef.current.value,
      "avatar": avatarRef.current.value
    });
    setUsers(users.slice());

    idRef.current.value = "";
    first_nameRef.current.value = "";
    last_nameRef.current.value = "";
    emailRef.current.value = "";
    avatarRef.current.value = "";
  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
    users.splice(index, 1);
    setUsers(users.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            {/* <!-- TODO: Add a column for an avatar --> */}
            <th scope="col">Avatar</th>
            <th scope="col">Actions</th>
          </tr>
          
        </thead>
          <tbody>
            {users.map((user, index) =>
            <tr className="input-row" key={user.id} >
              <td>{user.id}</td>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} alt=""/></td>
              <td>
                <div><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button> </div>
                {/* <div><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></div> */}
              </td>
          </tr>)}     

          <tr className="input-row">
          <td><input required type="text" ref={idRef} placeholder="ID (unique & numeric)"/></td>
          <td>
            <input required type="text" ref={first_nameRef} placeholder="First name (only letters)"/> <br /> <br/>
            <input required type="text" ref={last_nameRef} placeholder="Last name (only letters)"/>
          </td>
          <td><input required type="text" ref={emailRef} placeholder="somebody@domain"/></td>
          <td><input required type="text" ref={avatarRef} placeholder="image url (.png/.jpg)"/></td>
          <td><Button variant="success" type="submit" onClick={() => addEmployee()} >Add</Button></td>
        </tr>
          </tbody>
      </Table>
      <ToastContainer />
    </div>

  </div>)
}

export default Employees;