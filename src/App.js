import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import SignupPage from './Pages/SignupPage'
import AdminPage from './Pages/AdminPage'
import Sample from './Pages/Sample'

function App() {
  return (
    <Router >
        <Routes>
          <Route exact path="/" element={<Navbar navClass="grid grid-rows-2 h-screen"/>} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route path="/" element={<Navbar navClass="admin-layout"/>}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="/sample" element={<Sample />} />
        </Routes>
    </Router>
  );
}

export default App;
