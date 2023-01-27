



import {AppBar, Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';



const Header = styled(AppBar)`
    position: static
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: white;
    text-decoration: none
`;

const Navbar = () => {
  return (
    <div>
        <Header>
            <Toolbar>
                <Tabs to="/">Code With SHREYAS</Tabs>
                <Tabs to="all">All Users</Tabs>
                <Tabs to="add">Add Users</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar