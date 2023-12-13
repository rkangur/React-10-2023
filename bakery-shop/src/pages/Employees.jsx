import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [users, setUsers] = useState([]);

  // TODO: Load data from backend service
  useEffect(() => {
    fetch("https://reqres.in/api/users")
     .then(res => res.json())
     .then(data => {
        setUsers(data);
     })
  }, []);

  const addEmployee = () => {
    // TODO: Add validations
    // TODO: Add an employee to the table
  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
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
            <th scope="col">Actions</th>
          </tr>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
          <tbody>
            {Employees.data(users).map((data, index) =>
            <tr className="input-row" key={index}>
              <td>{data["id"]}</td>
              <td>{data["first_name"]} + {data["last_name"]}</td>
              <td>{data["email"]}</td>
              <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
              <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
          </tr>)}
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;