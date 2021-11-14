import Navbar from './components/Navbar'
import AdminNavbar from './components (admin)/AdminNavbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import SignupPage from './Pages/SignupPage'
import AdminPage from './Pages/AdminPage'
import Sample from './Pages/Sample'
import CustomersPage from './Pages/CustomersPage'
import Sidebar from './components/Sidebar'
import React from 'react'
function App() {
  return (
    <Router >
        <Routes>
          <Route exact path="/" element={<Navbar navClass="grid grid-rows-2 h-screen"/>} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* Admin Route */}
          <Route path="/admin" element={<AdminNavbar navClass="admin-layout"/>}>

            <Route path="/admin" element={<AdminPage />}>
              <Route path="/admin/users" element={<CustomersPage />} />
            </Route>
            
          </Route>

          {/* For testing only */}
          <Route path="/sample" element={<Sample />} />
        </Routes>
    </Router>
  );
}

export default App;
