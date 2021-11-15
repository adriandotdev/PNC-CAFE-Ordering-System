import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import AdminNavbar from './components (admin)/AdminNavbar'

import Sample from './Pages/Sample' // for testing

// pages
import Login from './Pages/Login'
import SignupPage from './Pages/SignupPage'
import AdminPage from './Pages/AdminPage'
import MenuPage from './Pages/MenuPage'
import CustomersPage from './Pages/CustomersPage'
import AdminLogin from './Pages/AdminLogin'

function App() {

  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {

    if (window.sessionStorage.getItem('isAdmin') === 'true') {
      setAdmin(true)
    }
  })
  return (
    <Router >
        <Routes>
          <Route exact path="/" element={<Navbar navClass="grid grid-rows-2 h-screen"/>} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* Admin Route */}
          <Route path="/admin" element={<AdminNavbar isAdmin={isAdmin} setAdmin={setAdmin} navClass="admin-layout"/>}>

            {!isAdmin && <Route path="/admin" element={<AdminLogin setAdmin={setAdmin}/>} />}
            {
              isAdmin && <Route path="/admin" element={<AdminPage />}>
                          <Route path="/admin/users" element={<CustomersPage />} />
                          <Route path="/admin/menu" element={<MenuPage />} />
                        </Route>
            }
            
          </Route>

          {/* For testing only */}
          <Route path="/sample" element={<Sample />} />
        </Routes>
    </Router>
  );
}

export default App;
