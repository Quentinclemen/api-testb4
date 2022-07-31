import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users, setUsers]= useState([])

  const deleteUser=(id)=> {
    fetch("http://localhost:8080/api/deleteUser/" + id, {
      method:"DELETE",
    }).then(res => res)
  }

  useEffect(()=>{
    fetch("http://localhost:8080/api/getAllUsers")
    .then(res=>res.json())
    .then((result)=>{
      setUsers(result);
    })
  },[])

  return (
    <Container>
        <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>User List</h1>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-2">First Name</div>
            <div className="col-md-2"> Last Name</div>
            <div className="col-md-2">Email</div>
            <div className="col-md-2">Update</div>
            <div className="col-md-2">Delete</div>
        </div>

        {users.map(user=>(
        <div className="row">
            <div className="col-md-2">{user.firstName}</div>
            <div className="col-md-2">{user.lastName}</div>
            <div className="col-md-2">{user.email}</div>
            <Link className="btn btn-success col-md-2" to={`/edit-user/${user.id}`}>Edit</Link>
            <Link className="btn btn-danger col-md-2" to="" onClick={()=> deleteUser(user.id)}>Delete</Link>
        </div>
        ))}
    </Container>
  );
}
