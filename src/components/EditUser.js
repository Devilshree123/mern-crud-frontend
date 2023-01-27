import { useState, useEffect } from "react";
import { FormControl, FormGroup, InputLabel, Input, styled, Typography, Button } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";

import { editUser, getUser } from "../service/api";

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




const EditUser = () => {
  
  const [user, setUser] = useState(defaultValue)

  const navigate = useNavigate();
  
  const {id} = useParams();
  
  const loadUserDetails = async() => {
    const response = await getUser(id);
    setUser(response.data)
  }
  
  useEffect(() => {
      loadUserDetails();
  },[])



  const onValueChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const editUserDeatails = async() => {
    await editUser(user, id);
    navigate("/all")
  }



  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} name="name" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={onValueChange} name="username" value={user.username} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" value={user.email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={onValueChange} name="phone" value={user.phone} />
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={editUserDeatails}>Update</Button>
        </FormControl>
      </Container>
    </>
  )
}

export default EditUser