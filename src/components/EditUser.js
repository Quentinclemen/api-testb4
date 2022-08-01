import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@material-ui/core'
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EditUser() {
  const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [email, setEmail]= useState('')
  const { id } = useParams();

  const updateUser=(id)=> {
    const user={firstName, lastName, email}
    fetch("http://localhost:8080/api/updateUser/" + id, {
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("User Updated")
    })
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Edit User</h1>

    <form className={ClassNames.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="email" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
       <Link class="nav-link" className="btn btn-success col-md-2" to="/" onClick={()=> updateUser(id)}>
        Submit
      </Link>
      
    </form>

      </Paper>
    </Container>
  );
}
