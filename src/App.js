import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import AdminNavbar from './components (admin)/AdminNavbar'

// pages
import UserLoginPage from './Pages/UserLoginPage'
import UserSignupPage from './Pages/UserSignupPage'
import AdminPage from './Pages/AdminPage'
import MenuPage from './Pages/MenuPage'
import CustomersPage from './Pages/CustomersPage'
import AdminLogin from './Pages/AdminLogin'
import Homepage from './Pages/Homepage'
import MenuInfoPage from './Pages/MenuInfoPage'
import ProfilePage from './Pages/ProfilePage'

// Contexts
import {AdminMenuProvider} from './contexts/AdminMenuContext'

function App() {

  const [isAdmin, setAdmin] = useState(false);
  const [isUser, setUser] = useState(false);
  

  // If the admin account hasn't logged out yet, we still use the sessionStorage for previous activity.
  useEffect(() => {

    if (window.sessionStorage.getItem('isAdmin') === 'true') 
      setAdmin(true)
  }, [])

  // If the user hasn't logged out yet, we still use the sessionStorage for previous activity.
  useEffect(() => {

    if (window.sessionStorage.getItem('isUser') === 'true') 
      setUser(true)
  }, [])

  return (

    <Router>

        <Routes>

          {/* Routes for user */}
          <Route path="/" element={<Navbar navClass="grid grid-rows-2 min-h-screen" isUser={isUser} setUser={setUser}/>} >
            <Route path="/" element={<UserLoginPage setUser={setUser}/>} />
            <Route path="/signup" element={<UserSignupPage />} />
            {isUser && <Route path="/homepage" element={<Homepage/>} />}
            {isUser && <Route path="/menu:id" element={<MenuInfoPage/>} />}
            {isUser && <Route path="/profile" element={<ProfilePage setUser={setUser}/>}/>}
          </Route> 

          {/* Routes for admin */}
          <Route path="/admin" element={<AdminNavbar isAdmin={isAdmin} setAdmin={setAdmin} navClass="admin-layout"/>}>

            {!isAdmin && <Route path="/admin" element={<AdminLogin setAdmin={setAdmin}/>} />}
            {
              isAdmin && <Route path="/admin" element={<AdminPage />}>
                          <Route path="/admin/users" element={<CustomersPage />} />
                          <Route path="/admin/menu" element={<AdminMenuProvider><MenuPage /></AdminMenuProvider>} />
                        </Route>
            }
          </Route>

        </Routes>
    </Router>
  );
}

export default App;
