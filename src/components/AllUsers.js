import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getUsers, deleteUser } from '../service/api'

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const TRow = styled(TableRow)`
  background: black;
  & > th{
    color: white;
    font-size: 20px
  }
`;

const TBody = styled(TableRow)`
  & > td{
    font-size: 15px;
  }
`;

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  },[])

  const getAllUsers = async() => {
    const response = await getUsers();
    setUsers(response.data)
  }

  const deleteUserDetails = async(id) => {

    alert(`User ${id} deleted Successfully`)
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <div>
      <StyledTable>
        <TableHead>
          <TRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TRow>
        </TableHead>

        <TableBody>
          {
            users.map(user => (
              <TBody>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant='contained' color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                </TableCell>
              </TBody>
            ))
          }
        </TableBody>

      </StyledTable>
    </div>
  )
}

export default AllUsers