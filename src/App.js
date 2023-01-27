import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import Navbar from './components/Navbar'
import Shreyas from './components/Shreyas'
import EditUser from './components/EditUser'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = props => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shreyas/>} />
          <Route path ="/all" element={<AllUsers/>} />
          <Route path ="/add" element={<AddUser/>} />
          <Route path ="/edit/:id" element={<EditUser/>} />
        </Routes>
      </Router>
    </>
  )
}

App.propTypes = {}

export default App