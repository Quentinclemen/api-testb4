import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@material-ui/core'
import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';

export default function AddUser() {
  const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [email, setEmail]= useState('')

  const addUser=(e)=> {
    e.preventDefault()
    const user={firstName, lastName, email}
    console.log(user);
    fetch("http://localhost:8080/api/addUser", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("New User Added")
    })
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Add User</h1>

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
       <Button variant="contained" color="secondary" onClick={addUser}>
        Submit
      </Button>
    </form>

      </Paper>
    </Container>
  );
}
