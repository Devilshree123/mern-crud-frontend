import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, styled, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width:50%;
  margin: 5% auto 10% auto;
  & > div{
    margin-top: 20px
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: ""
}




const AddUser = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(defaultValue)

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const addUserDeatails = async() => {
    await addUser(user);
    navigate("/all")
  }



  return (
    <>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={onValueChange} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={onValueChange} name="phone" />
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={addUserDeatails}>Submit</Button>
        </FormControl>
      </Container>
    </>
  )
}

export default AddUser